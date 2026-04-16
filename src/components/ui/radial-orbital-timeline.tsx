"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

const ORBIT_RADIUS = 280;
const ORBIT_SIZE = 560;
const ORBIT_CENTER = ORBIT_SIZE / 2;
const DEGREES_PER_SECOND = 6; // same speed as before: 0.3deg per 50ms

// Pure position calculation — no React state involved
function calcPosition(index: number, total: number, angle: number) {
  const nodeAngle = ((index / total) * 360 + angle) % 360;
  const radian = (nodeAngle * Math.PI) / 180;
  return {
    x: ORBIT_CENTER + ORBIT_RADIUS * Math.cos(radian),
    y: ORBIT_CENTER + ORBIT_RADIUS * Math.sin(radian),
    zIndex: Math.round(100 + 50 * Math.cos(radian)),
    opacity: Math.max(0.4, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))),
    angle: nodeAngle,
  };
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Refs used by the RAF loop to avoid stale closures
  const rotationAngleRef = useRef<number>(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const expandedItemsRef = useRef<Record<number, boolean>>({});

  // Keep expandedItemsRef in sync so RAF loop can read current state
  useEffect(() => {
    expandedItemsRef.current = expandedItems;
  }, [expandedItems]);

  // Responsive scale: shrink the orbit to fit the viewport on mobile.
  // Nodes extend ~20px outside the orbit container on every side, and labels
  // sit ~60px below bottom nodes — so the effective content area is larger
  // than ORBIT_SIZE. Using ORBIT_SIZE + 100 ensures nodes and labels stay
  // fully on screen after scaling.
  const EFFECTIVE_SIZE = ORBIT_SIZE + 120; // 48px nodes protrude 24px per side (48px) + labels ~72px
  const [scaleFactor, setScaleFactor] = useState(1);
  useEffect(() => {
    const computeScale = () => {
      const availableW = window.innerWidth * 0.95;
      const availableH = window.innerHeight * 0.85;
      const available = Math.min(availableW, availableH);
      setScaleFactor(Math.min(1, available / EFFECTIVE_SIZE));
    };
    computeScale();
    window.addEventListener("resize", computeScale, { passive: true });
    return () => window.removeEventListener("resize", computeScale);
  }, []);

  // RAF-based rotation: directly updates DOM transforms — zero React re-renders per frame
  useEffect(() => {
    if (!autoRotate) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      // Sync ref → state so React-controlled render uses the current angle
      setRotationAngle(rotationAngleRef.current);
      return;
    }

    const tick = (now: number) => {
      const delta = Math.min(now - lastTimeRef.current, 100); // cap to avoid jump after tab switch
      lastTimeRef.current = now;

      rotationAngleRef.current =
        (rotationAngleRef.current + (DEGREES_PER_SECOND / 1000) * delta) % 360;

      timelineData.forEach((item, index) => {
        const el = nodeRefs.current[item.id];
        if (!el || expandedItemsRef.current[item.id]) return;
        const { x, y, zIndex, opacity } = calcPosition(
          index,
          timelineData.length,
          rotationAngleRef.current
        );
        el.style.transform = `translate(${x - 24}px, ${y - 24}px)`;
        el.style.zIndex = String(zIndex);
        el.style.opacity = String(opacity);
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    lastTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [autoRotate, timelineData]);

  const calculateNodePosition = (index: number, total: number) =>
    calcPosition(index, total, rotationAngle);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    const newAngle = 270 - targetAngle;
    rotationAngleRef.current = newAngle;
    setRotationAngle(newAngle);
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true; });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed": return "text-white bg-black border-white";
      case "in-progress": return "text-black bg-white border-black";
      case "pending": return "text-white bg-black/40 border-white/50";
      default: return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-transparent overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Outer wrapper occupies the scaled size in layout so flex centering works */}
      <div style={{ width: ORBIT_SIZE * scaleFactor, height: ORBIT_SIZE * scaleFactor, flexShrink: 0 }}>
      <div
        ref={orbitRef}
        className="relative"
        style={{
          width: `${ORBIT_SIZE}px`,
          height: `${ORBIT_SIZE}px`,
          transform: `scale(${scaleFactor})`,
          transformOrigin: "top left",
        }}
      >
        {/* Center hub */}
        <div
          className="absolute left-1/2 top-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10"
          style={{ transform: "translate(-50%, -50%)", willChange: "opacity" }}
        >
          <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70" style={{ willChange: "transform, opacity" }} />
          <div
            className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
            style={{ animationDelay: "0.5s", willChange: "transform, opacity" }}
          />
          <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md" />
        </div>

        {/* Orbit guide circle */}
        <div
          className="absolute rounded-full border border-white/10"
          style={{ width: `${ORBIT_SIZE}px`, height: `${ORBIT_SIZE}px`, left: 0, top: 0 }}
        />

        {/* Orbit nodes */}
        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isRelated = isRelatedToActive(item.id);
          const isPulsing = pulseEffect[item.id];
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              ref={(el) => (nodeRefs.current[item.id] = el)}
              className={`absolute cursor-pointer ${autoRotate ? "" : "transition-all duration-700"}`}
              style={{
                transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
                transformOrigin: "center",
                zIndex: isExpanded ? 200 : position.zIndex,
                opacity: isExpanded ? 1 : position.opacity,
                willChange: "transform, opacity",
              }}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {isPulsing && (
                <div
                  className="absolute rounded-full animate-pulse"
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5) / 2}px`,
                    top: `-${(item.energy * 0.5) / 2}px`,
                    willChange: "opacity",
                  }}
                />
              )}

              <div
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${isExpanded ? "bg-white text-black" : isRelated ? "bg-white/50 text-black" : "bg-black text-white"}
                  border-2
                  ${isExpanded ? "border-white shadow-lg shadow-white/30" : isRelated ? "border-white animate-pulse" : "border-white/40"}
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-150" : ""}
                `}
              >
                <Icon size={18} />
              </div>

              <div
                className={`
                  absolute top-16 sm:top-12 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs font-semibold tracking-wider
                  ${autoRotate ? "" : "transition-all duration-300"}
                  ${isExpanded ? "text-white scale-125" : "text-white/70"}
                `}
              >
                {item.title}
              </div>

              {isExpanded && (
                <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-80 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible z-50">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-white/50" />
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <Badge className={`px-2 text-xs ${getStatusStyles(item.status)}`}>
                        {item.status === "completed" ? "COMPLETE" : item.status === "in-progress" ? "IN PROGRESS" : "PENDING"}
                      </Badge>
                      <span className="text-xs font-mono text-white/50">{item.date}</span>
                    </div>
                    <CardTitle className="text-sm mt-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs text-white/80">
                    <p>{item.content}</p>
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="flex items-center">
                          <Zap size={10} className="mr-1" /> Energy Level
                        </span>
                        <span className="font-mono">{item.energy}%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>
                    {item.relatedIds.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-white/10">
                        <div className="flex items-center mb-2">
                          <Link size={10} className="text-white/70 mr-1" />
                          <h4 className="text-xs uppercase tracking-wider font-medium text-white/70">
                            Connected Nodes
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find((i) => i.id === relatedId);
                            return (
                              <Button
                                key={relatedId}
                                variant="outline"
                                size="sm"
                                className="flex items-center h-6 px-2 py-0 text-xs rounded-none border-white/20 bg-transparent hover:bg-white/10 text-white/80 hover:text-white transition-all"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                              >
                                {relatedItem?.title}
                                <ArrowRight size={8} className="ml-1 text-white/60" />
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}
