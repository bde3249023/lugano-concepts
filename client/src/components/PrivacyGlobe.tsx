import { useEffect, useRef } from "react";

export default function PrivacyGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    const particles: { x: number; y: number; z: number; size: number }[] = [];
    const connections: { p1: number; p2: number; active: number }[] = [];
    const numParticles = 80;
    const radius = Math.min(width, height) * 0.35;

    // Initialize particles on a sphere
    for (let i = 0; i < numParticles; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        size: Math.random() * 1.5 + 0.5
      });
    }

    // Create random connections
    for (let i = 0; i < numParticles; i++) {
      for (let j = i + 1; j < numParticles; j++) {
        const d = Math.sqrt(
          Math.pow(particles[i].x - particles[j].x, 2) +
          Math.pow(particles[i].y - particles[j].y, 2) +
          Math.pow(particles[i].z - particles[j].z, 2)
        );
        if (d < radius * 0.5 && Math.random() > 0.85) {
          connections.push({ p1: i, p2: j, active: 0 });
        }
      }
    }

    let rotation = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      const cx = width / 2;
      const cy = height / 2;
      
      rotation += 0.002;

      // Sort particles by Z depth for correct rendering order
      const projectedParticles = particles.map((p, i) => {
        // Rotate around Y axis
        const x = p.x * Math.cos(rotation) - p.z * Math.sin(rotation);
        const z = p.x * Math.sin(rotation) + p.z * Math.cos(rotation);
        const y = p.y;

        // Simple perspective projection
        const scale = 400 / (400 + z);
        return {
          x: cx + x * scale,
          y: cy + y * scale,
          z: z,
          scale: scale,
          originalIndex: i
        };
      }).sort((a, b) => b.z - a.z);

      // Draw connections (only if both points are somewhat visible)
      ctx.lineWidth = 0.5;
      connections.forEach(conn => {
        const p1 = projectedParticles.find(p => p.originalIndex === conn.p1);
        const p2 = projectedParticles.find(p => p.originalIndex === conn.p2);

        if (p1 && p2 && p1.z < 100 && p2.z < 100) {
          const alpha = Math.min(p1.scale, p2.scale) * 0.15;
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();

          // Animate pulses
          if (Math.random() > 0.99) conn.active = 1;
          if (conn.active > 0) {
            const t = 1 - conn.active;
            const px = p1.x + (p2.x - p1.x) * t;
            const py = p1.y + (p2.y - p1.y) * t;
            
            ctx.fillStyle = `rgba(168, 85, 247, ${conn.active})`; // Purple pulse
            ctx.beginPath();
            ctx.arc(px, py, 2 * p1.scale, 0, Math.PI * 2);
            ctx.fill();
            
            conn.active -= 0.02;
          }
        }
      });

      // Draw particles
      projectedParticles.forEach(p => {
        const alpha = (p.z + radius) / (2 * radius); // Fade out back particles
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, alpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.scale * 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full opacity-60" />;
}
