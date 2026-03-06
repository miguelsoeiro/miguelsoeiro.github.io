import * as THREE from "three";
import { Pane } from "tweakpane";

let scene: THREE.Scene | null = null;
let camera: THREE.OrthographicCamera | null = null;
let renderer: THREE.WebGLRenderer | null = null;
let material: THREE.ShaderMaterial | null = null;
let clock: THREE.Clock | null = null;
let rafId: number | null = null;

let cursorSphere3D = new THREE.Vector3(0, 0, 0);
let activeMerges = 0;
let targetMousePosition = new THREE.Vector2(0.5, 0.5);
let mousePosition = new THREE.Vector2(0.5, 0.5);
let lastTime = performance.now();
let frameCount = 0;
let fps = 0;

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isLowPowerDevice = isMobile || (navigator as any).hardwareConcurrency <= 4;
const devicePixelRatio = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

// Minimal presets and settings (copied/trimmed from provided script)
const presets: any = {
  holographic: {
    sphereCount: isMobile ? 4 : 6,
    ambientIntensity: 0.12,
    diffuseIntensity: 1.2,
    specularIntensity: 2.5,
    specularPower: 3,
    fresnelPower: 0.8,
    // keep background very dark
    backgroundColor: new THREE.Color(0x0a0a15),
    // keep spheres dark as originally
    sphereColor: new THREE.Color(0x050510),
    // use blue-tinted light for the glow
    lightColor: new THREE.Color(0x88aaff),
    lightPosition: new THREE.Vector3(0.9, 0.9, 1.2),
    smoothness: 0.8,
    contrast: 1.6,
    fogDensity: 0.06,
    cursorGlowIntensity: 0.8, // lessen the brightness of cursor halo
    cursorGlowRadius: 2.2,
    cursorGlowColor: new THREE.Color(0x3366cc) // blue tone instead of purple
  }
};

const settings: any = {
  preset: "holographic",
  ...presets.holographic,
  fixedTopLeftRadius: 0.8,
  fixedBottomRightRadius: 0.9,
  smallTopLeftRadius: 0.3,
  smallBottomRightRadius: 0.35,
  cursorRadiusMin: 0.08,
  cursorRadiusMax: 0.15,
  animationSpeed: 0.6,
  movementScale: 1.2,
  mouseSmoothness: 0.1,
  mergeDistance: 1.5,
  mouseProximityEffect: true,
  minMovementScale: 0.3,
  maxMovementScale: 1.0
};

function getStoryText(x: number, y: number, radius: number, merges: number, fpsVal: number) {
  if (isMobile) {
    return `vessel: (${x}, ${y})\nfield: ${radius}u\nmerges: ${merges}\nflux: ${fpsVal}hz`;
  }
  return `our vessel drifts at coordinates (${x}, ${y})\ngravitational field extends ${radius} units into quantum foam\ncurrently merging with ${merges} other entities\ntemporal flux: ${fpsVal} cycles per second`;
}

function screenToWorldJS(normalizedX: number, normalizedY: number) {
  const uv_x = normalizedX * 2.0 - 1.0;
  const uv_y = normalizedY * 2.0 - 1.0;
  const aspect = window.innerWidth / window.innerHeight;
  return new THREE.Vector3(uv_x * aspect * 2.0, uv_y * 2.0, 0.0);
}

function updateStory(x: number, y: number, radius: number, merges: number, fpsVal: number) {
  const storyText = document.getElementById("story-text");
  if (storyText) {
    // keep markup friendly for React; insert as text
    storyText.innerHTML = getStoryText(x, y, radius, merges, fpsVal).replace(/\n/g, "<br>");
  }
}

function onPointerMove(event: PointerEvent | { clientX: number; clientY: number }) {
  targetMousePosition.x = event.clientX / window.innerWidth;
  targetMousePosition.y = 1.0 - event.clientY / window.innerHeight;

  const normalizedX = targetMousePosition.x;
  const normalizedY = targetMousePosition.y;
  const worldPos = screenToWorldJS(normalizedX, normalizedY);
  cursorSphere3D.copy(worldPos);

  let closestDistance = 1000.0;
  activeMerges = 0;

  const fixedPositions = [
    screenToWorldJS(0.08, 0.92),
    screenToWorldJS(0.25, 0.72),
    screenToWorldJS(0.92, 0.08),
    screenToWorldJS(0.72, 0.25)
  ];

  fixedPositions.forEach((pos) => {
    const dist = cursorSphere3D.distanceTo(pos);
    closestDistance = Math.min(closestDistance, dist);
    if (dist < settings.mergeDistance) activeMerges++;
  });

  const proximityFactor = Math.max(0, 1.0 - closestDistance / settings.mergeDistance);
  const smoothFactor = proximityFactor * proximityFactor * (3.0 - 2.0 * proximityFactor);
  const dynamicRadius = settings.cursorRadiusMin + (settings.cursorRadiusMax - settings.cursorRadiusMin) * smoothFactor;

  if (material) {
    material.uniforms.uCursorSphere.value.copy(cursorSphere3D);
    material.uniforms.uCursorRadius.value = dynamicRadius;
  }

  updateStory(cursorSphere3D.x, cursorSphere3D.y, dynamicRadius, activeMerges, fps);
}

// we keep references to the touch handlers so we can remove them later
const handleTouchStart = (e: TouchEvent) => {
  if (e.touches && e.touches[0]) {
    onPointerMove({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } as any);
  }
};

const handleTouchMove = (e: TouchEvent) => {
  if (e.touches && e.touches[0]) {
    onPointerMove({ clientX: e.touches[0].clientX, clientY: e.touches[0].clientY } as any);
  }
};

function setupEventListeners() {
  window.addEventListener("mousemove", onPointerMove as any, { passive: true });
  window.addEventListener("touchstart", handleTouchStart, { passive: false });
  window.addEventListener("touchmove", handleTouchMove, { passive: false });
  window.addEventListener("resize", onWindowResize, { passive: true });
}

function removeEventListeners() {
  window.removeEventListener("mousemove", onPointerMove as any);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("resize", onWindowResize as any);
}

function onWindowResize() {
  if (!camera || !renderer || !material) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const currentPixelRatio = Math.min(devicePixelRatio, isMobile ? 1.5 : 2);

  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(currentPixelRatio);

  material.uniforms.uResolution.value.set(width, height);
  material.uniforms.uActualResolution.value.set(width * currentPixelRatio, height * currentPixelRatio);
  material.uniforms.uPixelRatio.value = currentPixelRatio;
}

function animate() {
  rafId = requestAnimationFrame(animate);
  render();
}

function render() {
  if (!material || !renderer || !clock) return;
  const currentTime = performance.now();
  frameCount++;

  if (currentTime - lastTime >= 1000) {
    fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
    frameCount = 0;
    lastTime = currentTime;
  }

  mousePosition.x += (targetMousePosition.x - mousePosition.x) * settings.mouseSmoothness;
  mousePosition.y += (targetMousePosition.y - mousePosition.y) * settings.mouseSmoothness;

  material.uniforms.uTime.value = clock.getElapsedTime();
  material.uniforms.uMousePosition.value = mousePosition;

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
}

export function startBackground() {
  const container = document.getElementById("container");
  if (!container) return () => {};

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  camera.position.z = 1;
  clock = new THREE.Clock();

  renderer = new THREE.WebGLRenderer({ antialias: !isMobile && !isLowPowerDevice, alpha: true, powerPreference: isMobile ? "default" : "high-performance", preserveDrawingBuffer: false, premultipliedAlpha: false });

  const pixelRatio = Math.min(devicePixelRatio, isMobile ? 1.5 : 2);
  renderer.setPixelRatio(pixelRatio);

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  renderer.setSize(viewportWidth, viewportHeight);
  renderer.setClearColor(0x000000, 0);
  (renderer as any).outputColorSpace = (THREE as any).SRGBColorSpace || undefined;

  const canvas = renderer.domElement;
  canvas.style.cssText = `position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; z-index: 0 !important; display: block !important;`;
  container.appendChild(canvas);

  // Shader material (using simplified subset of original). For fidelity, use the full shader from the provided file.
  material = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(viewportWidth, viewportHeight) },
      uActualResolution: { value: new THREE.Vector2(viewportWidth * pixelRatio, viewportHeight * pixelRatio) },
      uPixelRatio: { value: pixelRatio },
      uMousePosition: { value: new THREE.Vector2(0.5, 0.5) },
      uCursorSphere: { value: new THREE.Vector3(0, 0, 0) },
      uCursorRadius: { value: settings.cursorRadiusMin },
      uSphereCount: { value: settings.sphereCount },
      uFixedTopLeftRadius: { value: settings.fixedTopLeftRadius },
      uFixedBottomRightRadius: { value: settings.fixedBottomRightRadius },
      uSmallTopLeftRadius: { value: settings.smallTopLeftRadius },
      uSmallBottomRightRadius: { value: settings.smallBottomRightRadius },
      uMergeDistance: { value: settings.mergeDistance },
      uSmoothness: { value: settings.smoothness },
      uAmbientIntensity: { value: settings.ambientIntensity },
      uDiffuseIntensity: { value: settings.diffuseIntensity },
      uSpecularIntensity: { value: settings.specularIntensity },
      uSpecularPower: { value: settings.specularPower },
      uFresnelPower: { value: settings.fresnelPower },
      uBackgroundColor: { value: settings.backgroundColor },
      uSphereColor: { value: settings.sphereColor },
      uLightColor: { value: settings.lightColor },
      uLightPosition: { value: settings.lightPosition },
      uContrast: { value: settings.contrast },
      uFogDensity: { value: settings.fogDensity },
      uAnimationSpeed: { value: settings.animationSpeed },
      uMovementScale: { value: settings.movementScale },
      uMouseProximityEffect: { value: settings.mouseProximityEffect },
      uMinMovementScale: { value: settings.minMovementScale },
      uMaxMovementScale: { value: settings.maxMovementScale },
      uCursorGlowIntensity: { value: settings.cursorGlowIntensity },
      uCursorGlowRadius: { value: settings.cursorGlowRadius },
      uCursorGlowColor: { value: settings.cursorGlowColor },
      uIsSafari: { value: isSafari ? 1.0 : 0.0 },
      uIsMobile: { value: isMobile ? 1.0 : 0.0 },
      uIsLowPower: { value: isLowPowerDevice ? 1.0 : 0.0 }
    },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} `,
    fragmentShader: `
      ${
        isMobile || isSafari || isLowPowerDevice
          ? "precision mediump float;"
          : "precision highp float;"
      }
      
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uActualResolution;
      uniform float uPixelRatio;
      uniform vec2 uMousePosition;
      uniform vec3 uCursorSphere;
      uniform float uCursorRadius;
      uniform int uSphereCount;
      uniform float uFixedTopLeftRadius;
      uniform float uFixedBottomRightRadius;
      uniform float uSmallTopLeftRadius;
      uniform float uSmallBottomRightRadius;
      uniform float uMergeDistance;
      uniform float uSmoothness;
      uniform float uAmbientIntensity;
      uniform float uDiffuseIntensity;
      uniform float uSpecularIntensity;
      uniform float uSpecularPower;
      uniform float uFresnelPower;
      uniform vec3 uBackgroundColor;
      uniform vec3 uSphereColor;
      uniform vec3 uLightColor;
      uniform vec3 uLightPosition;
      uniform float uContrast;
      uniform float uFogDensity;
      uniform float uAnimationSpeed;
      uniform float uMovementScale;
      uniform bool uMouseProximityEffect;
      uniform float uMinMovementScale;
      uniform float uMaxMovementScale;
      uniform float uCursorGlowIntensity;
      uniform float uCursorGlowRadius;
      uniform vec3 uCursorGlowColor;
      uniform float uIsSafari;
      uniform float uIsMobile;
      uniform float uIsLowPower;
      
      varying vec2 vUv;
      
      const float PI = 3.14159265359;
      const float EPSILON = 0.001;
      const float MAX_DIST = 100.0;
      
      float smin(float a, float b, float k) {
        float h = max(k - abs(a - b), 0.0) / k;
        return min(a, b) - h * h * k * 0.25;
      }
      
      float sdSphere(vec3 p, float r) {
        return length(p) - r;
      }
      
      // FIXED: Use actual resolution for coordinate transformation
      vec3 screenToWorld(vec2 normalizedPos) {
        // normalizedPos is already 0-1, convert to -1 to 1
        vec2 uv = normalizedPos * 2.0 - 1.0;
        // Apply aspect ratio correction using logical resolution
        uv.x *= uResolution.x / uResolution.y;
        return vec3(uv * 2.0, 0.0);
      }
      
      float getDistanceToCenter(vec2 pos) {
        float dist = length(pos - vec2(0.5, 0.5)) * 2.0;
        return smoothstep(0.0, 1.0, dist);
      }
      
      float sceneSDF(vec3 pos) {
        float result = MAX_DIST;
        
        // Fixed sphere positions using consistent coordinate system
        vec3 topLeftPos = screenToWorld(vec2(0.08, 0.92));
        float topLeft = sdSphere(pos - topLeftPos, uFixedTopLeftRadius);
        
        vec3 smallTopLeftPos = screenToWorld(vec2(0.25, 0.72));
        float smallTopLeft = sdSphere(pos - smallTopLeftPos, uSmallTopLeftRadius);
        
        vec3 bottomRightPos = screenToWorld(vec2(0.92, 0.08));
        float bottomRight = sdSphere(pos - bottomRightPos, uFixedBottomRightRadius);
        
        vec3 smallBottomRightPos = screenToWorld(vec2(0.72, 0.25));
        float smallBottomRight = sdSphere(pos - smallBottomRightPos, uSmallBottomRightRadius);
        
        float t = uTime * uAnimationSpeed;
        
        float dynamicMovementScale = uMovementScale;
        if (uMouseProximityEffect) {
          float distToCenter = getDistanceToCenter(uMousePosition);
          float mixFactor = smoothstep(0.0, 1.0, distToCenter);
          dynamicMovementScale = mix(uMinMovementScale, uMaxMovementScale, mixFactor);
        }
        
        // Optimized iterations for performance
        int maxIter = uIsMobile > 0.5 ? 4 : (uIsLowPower > 0.5 ? 6 : min(uSphereCount, 10));
        for (int i = 0; i < 10; i++) {
          if (i >= uSphereCount || i >= maxIter) break;
          
          float fi = float(i);
          float speed = 0.4 + fi * 0.12;
          float radius = 0.12 + mod(fi, 3.0) * 0.06;
          float orbitRadius = (0.3 + mod(fi, 3.0) * 0.15) * dynamicMovementScale;
          float phaseOffset = fi * PI * 0.35;
          
          float distToCursor = length(vec3(0.0) - uCursorSphere);
          float proximityScale = 1.0 + (1.0 - smoothstep(0.0, 1.0, distToCursor)) * 0.5;
          orbitRadius *= proximityScale;
          
          vec3 offset;
          if (i == 0) {
            offset = vec3(
              sin(t * speed) * orbitRadius * 0.7,
              sin(t * 0.5) * orbitRadius,
              cos(t * speed * 0.7) * orbitRadius * 0.5
            );
          } else if (i == 1) {
            offset = vec3(
              sin(t * speed + PI) * orbitRadius * 0.5,
              -sin(t * 0.5) * orbitRadius,
              cos(t * speed * 0.7 + PI) * orbitRadius * 0.5
            );
          } else {
            offset = vec3(
              sin(t * speed + phaseOffset) * orbitRadius * 0.8,
              cos(t * speed * 0.85 + phaseOffset * 1.3) * orbitRadius * 0.6,
              sin(t * speed * 0.5 + phaseOffset) * 0.3
            );
          }
          
          vec3 toCursor = uCursorSphere - offset;
          float cursorDist = length(toCursor);
          if (cursorDist < uMergeDistance && cursorDist > 0.0) {
            float attraction = (1.0 - cursorDist / uMergeDistance) * 0.3;
            offset += normalize(toCursor) * attraction;
          }
          
          float movingSphere = sdSphere(pos - offset, radius);
          
          float blend = 0.05;
          if (cursorDist < uMergeDistance) {
            float influence = 1.0 - (cursorDist / uMergeDistance);
            blend = mix(0.05, uSmoothness, influence * influence * influence);
          }
          
          result = smin(result, movingSphere, blend);
        }
        
        float cursorBall = sdSphere(pos - uCursorSphere, uCursorRadius);
        
        float topLeftGroup = smin(topLeft, smallTopLeft, 0.4);
        float bottomRightGroup = smin(bottomRight, smallBottomRight, 0.4);
        
        result = smin(result, topLeftGroup, 0.3);
        result = smin(result, bottomRightGroup, 0.3);
        result = smin(result, cursorBall, uSmoothness);
        
        return result;
      }
      
      vec3 calcNormal(vec3 p) {
        float eps = uIsLowPower > 0.5 ? 0.002 : 0.001;
        return normalize(vec3(
          sceneSDF(p + vec3(eps, 0, 0)) - sceneSDF(p - vec3(eps, 0, 0)),
          sceneSDF(p + vec3(0, eps, 0)) - sceneSDF(p - vec3(0, eps, 0)),
          sceneSDF(p + vec3(0, 0, eps)) - sceneSDF(p - vec3(0, 0, eps))
        ));
      }
      
      float ambientOcclusion(vec3 p, vec3 n) {
        if (uIsLowPower > 0.5) {
          float h1 = sceneSDF(p + n * 0.03);
          float h2 = sceneSDF(p + n * 0.06);
          float occ = (0.03 - h1) + (0.06 - h2) * 0.5;
          return clamp(1.0 - occ * 2.0, 0.0, 1.0);
        } else {
          float occ = 0.0;
          float weight = 1.0;
          for (int i = 0; i < 6; i++) {
            float dist = 0.01 + 0.015 * float(i * i);
            float h = sceneSDF(p + n * dist);
            occ += (dist - h) * weight;
            weight *= 0.85;
          }
          return clamp(1.0 - occ, 0.0, 1.0);
        }
      }
      
      float softShadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
        if (uIsLowPower > 0.5) {
          float result = 1.0;
          float t = mint;
          for (int i = 0; i < 3; i++) {
            t += 0.3;
            if (t >= maxt) break;
            float h = sceneSDF(ro + rd * t);
            if (h < EPSILON) return 0.0;
            result = min(result, k * h / t);
          }
          return result;
        } else {
          float result = 1.0;
          float t = mint;
          for (int i = 0; i < 20; i++) {
            if (t >= maxt) break;
            float h = sceneSDF(ro + rd * t);
            if (h < EPSILON) return 0.0;
            result = min(result, k * h / t);
            t += h;
          }
          return result;
        }
      }
      
      float rayMarch(vec3 ro, vec3 rd) {
        float t = 0.0;
        int maxSteps = uIsMobile > 0.5 ? 16 : (uIsSafari > 0.5 ? 16 : 48);
        
        for (int i = 0; i < 48; i++) {
          if (i >= maxSteps) break;
          
          vec3 p = ro + rd * t;
          float d = sceneSDF(p);
          
          if (d < EPSILON) {
            return t;
          }
          
          if (t > 5.0) {
            break;
          }
          
          t += d * (uIsLowPower > 0.5 ? 1.2 : 0.9);
        }
        
        return -1.0;
      }
      
      vec3 lighting(vec3 p, vec3 rd, float t) {
        if (t < 0.0) {
          return vec3(0.0);
        }
        
        vec3 normal = calcNormal(p);
        vec3 viewDir = -rd;
        
        vec3 baseColor = uSphereColor;
        
        float ao = ambientOcclusion(p, normal);
        
        vec3 ambient = uLightColor * uAmbientIntensity * ao;
        
        vec3 lightDir = normalize(uLightPosition);
        float diff = max(dot(normal, lightDir), 0.0);
        
        float shadow = softShadow(p, lightDir, 0.01, 10.0, 20.0);
        
        vec3 diffuse = uLightColor * diff * uDiffuseIntensity * shadow;
        
        vec3 reflectDir = reflect(-lightDir, normal);
        float spec = pow(max(dot(viewDir, reflectDir), 0.0), uSpecularPower);
        float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), uFresnelPower);
        
        vec3 specular = uLightColor * spec * uSpecularIntensity * fresnel;
        
        vec3 fresnelRim = uLightColor * fresnel * 0.4;
        
        float distToCursor = length(p - uCursorSphere);
        if (distToCursor < uCursorRadius + 0.4) {
          float highlight = 1.0 - smoothstep(0.0, uCursorRadius + 0.4, distToCursor);
          specular += uLightColor * highlight * 0.2;
          
          float glow = exp(-distToCursor * 3.0) * 0.15;
          ambient += uLightColor * glow * 0.5;
        }
        
        vec3 color = (baseColor + ambient + diffuse + specular + fresnelRim) * ao;
        
        color = pow(color, vec3(uContrast * 0.9));
        color = color / (color + vec3(0.8));
        
        return color;
      }
      
      float calculateCursorGlow(vec3 worldPos) {
        float dist = length(worldPos.xy - uCursorSphere.xy);
        float glow = 1.0 - smoothstep(0.0, uCursorGlowRadius, dist);
        glow = pow(glow, 2.0);
        return glow * uCursorGlowIntensity;
      }
      
      void main() {
        vec2 uv = (gl_FragCoord.xy * 2.0 - uActualResolution.xy) / uActualResolution.xy;
        uv.x *= uResolution.x / uResolution.y;
        
        vec3 ro = vec3(uv * 2.0, -1.0);
        vec3 rd = vec3(0.0, 0.0, 1.0);
        
        float t = rayMarch(ro, rd);
        
        vec3 p = ro + rd * t;
        
        vec3 color = lighting(p, rd, t);
        
        float cursorGlow = calculateCursorGlow(ro);
        vec3 glowContribution = uCursorGlowColor * cursorGlow;
        
        if (t > 0.0) {
          float fogAmount = 1.0 - exp(-t * uFogDensity);
          color = mix(color, uBackgroundColor.rgb, fogAmount * 0.3);
          
          color += glowContribution * 0.3;
          
          gl_FragColor = vec4(color, 1.0);
        } else {
          if (cursorGlow > 0.01) {
            gl_FragColor = vec4(glowContribution, cursorGlow * 0.8);
          } else {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
          }
        }
      }
    `,
    transparent: true
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  setupEventListeners();
  // initialize mouse center
  onPointerMove({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 } as any);
  animate();

  // return cleanup
  return function stop() {
    if (rafId) cancelAnimationFrame(rafId);
    removeEventListeners();
    if (renderer) {
      try {
        renderer.dispose();
      } catch (e) {}
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    }
    scene = null;
    camera = null;
    renderer = null;
    material = null;
  };
}

export default startBackground;
