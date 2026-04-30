import{C as S,V as R,S as $,O as X,a as _,W as N,b as H,c as Y,d as h,P as U,M as V}from"./vendor-three-Cr-WoGA0.js";let w=null,l=null,i=null,s=null,b=null,D=null,d=new R(0,0,0),x=0,c=new h(.5,.5),p=new h(.5,.5),P=performance.now(),y=0,G=0;const u=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),T=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),M=u||navigator.hardwareConcurrency<=4,B=Math.min(window.devicePixelRatio||1,u?1:1.5),j={holographic:{sphereCount:u?3:5,ambientIntensity:.12,diffuseIntensity:1.2,specularIntensity:2.5,specularPower:3,fresnelPower:.8,backgroundColor:new S(657941),sphereColor:new S(328976),lightColor:new S(8956671),lightPosition:new R(.9,.9,1.2),smoothness:.8,contrast:1.6,fogDensity:.06,cursorGlowIntensity:.8,cursorGlowRadius:2.2,cursorGlowColor:new S(3368652),targetFPS:u?30:60}},e={preset:"holographic",...j.holographic,fixedTopLeftRadius:.8,fixedBottomRightRadius:.9,smallTopLeftRadius:.3,smallBottomRightRadius:.35,cursorRadiusMin:.08,cursorRadiusMax:.15,animationSpeed:.6,movementScale:1.2,mouseSmoothness:.1,mergeDistance:1.5,mouseProximityEffect:!0,minMovementScale:.3,maxMovementScale:1};function q(o,t,r,a,n){return u?`vessel: (${o}, ${t})
field: ${r}u
merges: ${a}
flux: ${n}hz`:`our vessel drifts at coordinates (${o}, ${t})
gravitational field extends ${r} units into quantum foam
currently merging with ${a} other entities
temporal flux: ${n} cycles per second`}function v(o,t){const r=o*2-1,a=t*2-1,n=window.innerWidth/window.innerHeight;return new R(r*n*2,a*2,0)}function J(o,t,r,a,n){const f=document.getElementById("story-text");f&&(f.innerHTML=q(o,t,r,a,n).replace(/\n/g,"<br>"))}function g(o){c.x=o.clientX/window.innerWidth,c.y=1-o.clientY/window.innerHeight;const t=c.x,r=c.y,a=v(t,r);d.copy(a);let n=1e3;x=0,[v(.08,.92),v(.25,.72),v(.92,.08),v(.72,.25)].forEach(W=>{const I=d.distanceTo(W);n=Math.min(n,I),I<e.mergeDistance&&x++});const m=Math.max(0,1-n/e.mergeDistance),L=m*m*(3-2*m),C=e.cursorRadiusMin+(e.cursorRadiusMax-e.cursorRadiusMin)*L;s&&(s.uniforms.uCursorSphere.value.copy(d),s.uniforms.uCursorRadius.value=C),J(d.x,d.y,C,x,G)}const k=o=>{o.touches&&o.touches[0]&&g({clientX:o.touches[0].clientX,clientY:o.touches[0].clientY})},A=o=>{o.touches&&o.touches[0]&&g({clientX:o.touches[0].clientX,clientY:o.touches[0].clientY})};function K(){window.addEventListener("mousemove",g,{passive:!0}),window.addEventListener("touchstart",k,{passive:!1}),window.addEventListener("touchmove",A,{passive:!1}),window.addEventListener("resize",z,{passive:!0})}function Q(){window.removeEventListener("mousemove",g),window.removeEventListener("touchstart",k),window.removeEventListener("touchmove",A),window.removeEventListener("resize",z)}function z(){if(!l||!i||!s)return;const o=window.innerWidth,t=window.innerHeight,r=Math.min(B,u?1.5:2);l.updateProjectionMatrix(),i.setSize(o,t),i.setPixelRatio(r),s.uniforms.uResolution.value.set(o,t),s.uniforms.uActualResolution.value.set(o*r,t*r),s.uniforms.uPixelRatio.value=r}let F=0;const E=1e3/(u?24:45);function O(o){D=requestAnimationFrame(O);const t=o-F;t<E||(F=o-t%E,Z())}function Z(){if(!s||!i||!b)return;const o=performance.now();y++,o-P>=1e3&&(G=Math.round(y*1e3/(o-P)),y=0,P=o),p.x+=(c.x-p.x)*e.mouseSmoothness,p.y+=(c.y-p.y)*e.mouseSmoothness,s.uniforms.uTime.value=b.getElapsedTime(),s.uniforms.uMousePosition.value=p,i&&w&&l&&i.render(w,l)}function oe(){const o=document.getElementById("container");if(!o)return()=>{};w=new $,l=new X(-1,1,1,-1,.1,10),l.position.z=1,b=new _,i=new N({antialias:!u&&!M,alpha:!0,powerPreference:u?"default":"high-performance",preserveDrawingBuffer:!1,premultipliedAlpha:!1});const t=Math.min(B,u?1.5:2);i.setPixelRatio(t);const r=window.innerWidth,a=window.innerHeight;i.setSize(r,a),i.setClearColor(0,0),i.outputColorSpace=H;const n=i.domElement;n.style.cssText="position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; z-index: 0 !important; display: block !important;",o.appendChild(n),s=new Y({uniforms:{uTime:{value:0},uResolution:{value:new h(r,a)},uActualResolution:{value:new h(r*t,a*t)},uPixelRatio:{value:t},uMousePosition:{value:new h(.5,.5)},uCursorSphere:{value:new R(0,0,0)},uCursorRadius:{value:e.cursorRadiusMin},uSphereCount:{value:e.sphereCount},uFixedTopLeftRadius:{value:e.fixedTopLeftRadius},uFixedBottomRightRadius:{value:e.fixedBottomRightRadius},uSmallTopLeftRadius:{value:e.smallTopLeftRadius},uSmallBottomRightRadius:{value:e.smallBottomRightRadius},uMergeDistance:{value:e.mergeDistance},uSmoothness:{value:e.smoothness},uAmbientIntensity:{value:e.ambientIntensity},uDiffuseIntensity:{value:e.diffuseIntensity},uSpecularIntensity:{value:e.specularIntensity},uSpecularPower:{value:e.specularPower},uFresnelPower:{value:e.fresnelPower},uBackgroundColor:{value:e.backgroundColor},uSphereColor:{value:e.sphereColor},uLightColor:{value:e.lightColor},uLightPosition:{value:e.lightPosition},uContrast:{value:e.contrast},uFogDensity:{value:e.fogDensity},uAnimationSpeed:{value:e.animationSpeed},uMovementScale:{value:e.movementScale},uMouseProximityEffect:{value:e.mouseProximityEffect},uMinMovementScale:{value:e.minMovementScale},uMaxMovementScale:{value:e.maxMovementScale},uCursorGlowIntensity:{value:e.cursorGlowIntensity},uCursorGlowRadius:{value:e.cursorGlowRadius},uCursorGlowColor:{value:e.cursorGlowColor},uIsSafari:{value:T?1:0},uIsMobile:{value:u?1:0},uIsLowPower:{value:M?1:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} ",fragmentShader:`
      ${u||T||M?"precision mediump float;":"precision highp float;"}
      
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
    `,transparent:!0});const f=new U(2,2),m=new V(f,s);return w.add(m),K(),g({clientX:window.innerWidth/2,clientY:window.innerHeight/2}),O(),function(){if(D&&cancelAnimationFrame(D),Q(),i){try{i.dispose()}catch{}i.domElement&&i.domElement.parentNode&&i.domElement.parentNode.removeChild(i.domElement)}w=null,l=null,i=null,s=null}}export{oe as default,oe as startBackground};
