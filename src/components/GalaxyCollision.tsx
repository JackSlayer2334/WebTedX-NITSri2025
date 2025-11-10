import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  galaxy: number;
}

const GalaxyCollision = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    const isDesktop = window.innerWidth >= 1024;

    const getCollisionCenter = () => ({
      x: canvas.width / 2,
      y: isMobile ? canvas.height * 0.4 : canvas.height * 0.45,
    });

    // ⚙️ Configuration
    const config = {
      particleCount: isDesktop ? 230 : isTablet ? 150 : 110,
      bgFade: isDesktop ? 0.05 : 0.1,
      connectionRange: isDesktop ? 100 : isTablet ? 80 : 60,
      connectionAlpha: isDesktop ? 0.2 : isTablet ? 0.15 : 0.1,
      color: "rgba(230,43,30,", // TEDx Red
    };

    const particles: Particle[] = [];
    const collisionCenter = getCollisionCenter();
    const galaxy1CenterX = canvas.width * 0.2;
    const galaxy2CenterX = canvas.width * 0.8;
    const galaxyY = collisionCenter.y;

    // 🌠 Create particles
    for (let i = 0; i < config.particleCount; i++) {
      const galaxy = i < config.particleCount / 2 ? 1 : 2;
      const centerX = galaxy === 1 ? galaxy1CenterX : galaxy2CenterX;
      const centerY = galaxyY;

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (isDesktop ? 200 : 150) + 50;
      const spiral = distance * 0.02;

      const x = centerX + Math.cos(angle + spiral) * distance;
      const y = centerY + Math.sin(angle + spiral) * distance;

      const dx = collisionCenter.x - x;
      const dy = collisionCenter.y - y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      particles.push({
        x,
        y,
        vx: (dx / dist) * 0.3 + (Math.random() - 0.5) * 0.1,
        vy: (dy / dist) * 0.3 + (Math.random() - 0.5) * 0.1,
        radius: Math.random() * (isDesktop ? 2 : 1.8) + 0.5,
        alpha: Math.random() * 0.5 + 0.5,
        galaxy,
      });
    }

    let animationFrame: number;

    const animate = () => {
      ctx.fillStyle = `rgba(0, 0, 0, ${config.bgFade})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const center = getCollisionCenter();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        const dx = center.x - p.x;
        const dy = center.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Spiral + gravity
        if (dist > 40) {
          const angle = Math.atan2(dy, dx);
          const spiralForce = isDesktop ? 0.05 : 0.03;
          p.vx += Math.cos(angle + Math.PI / 2) * spiralForce;
          p.vy += Math.sin(angle + Math.PI / 2) * spiralForce;
        }

        const gravity = 0.001;
        p.vx += dx * gravity;
        p.vy += dy * gravity;
        p.vx *= 0.99;
        p.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = config.color + p.alpha + ")";
        ctx.fill();

        // Glow (softer for smaller screens)
        if (isDesktop || i % 3 === 0) {
          const g = ctx.createRadialGradient(
            p.x,
            p.y,
            0,
            p.x,
            p.y,
            p.radius * 3
          );
          g.addColorStop(0, config.color + p.alpha * 0.5 + ")");
          g.addColorStop(1, config.color + "0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Wrap around screen edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // 🔗 Connection lines (all screens, adjusted intensity)
        for (let j = i + 1; j < particles.length; j++) {
          const o = particles[j];
          const dx2 = o.x - p.x;
          const dy2 = o.y - p.y;
          const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (d < config.connectionRange) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(o.x, o.y);
            const alpha =
              (1 - d / config.connectionRange) * config.connectionAlpha;
            ctx.strokeStyle = `rgba(230,43,30,${alpha})`;
            ctx.lineWidth = isDesktop ? 0.5 : 0.3;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: "linear-gradient(to bottom, #000000, #0a0000)" }}
    />
  );
};

export default GalaxyCollision;
