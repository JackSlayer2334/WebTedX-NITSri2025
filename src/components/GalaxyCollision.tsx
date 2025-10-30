import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
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

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles for two galaxies
    const particles: Particle[] = [];
    const particleCount = 200;
    
    // Galaxy 1 - starts from left
    const galaxy1CenterX = canvas.width * 0.25;
    const galaxy1CenterY = canvas.height * 0.5;
    
    // Galaxy 2 - starts from right
    const galaxy2CenterX = canvas.width * 0.75;
    const galaxy2CenterY = canvas.height * 0.5;

    const colors = [
      "rgba(230, 43, 30, ", // TEDx red
      "rgba(255, 100, 100, ", // light red
      "rgba(200, 30, 30, ", // dark red
      "rgba(255, 150, 150, ", // pink-red
      "rgba(180, 20, 20, ", // deep red
    ];

    // Create galaxy particles
    for (let i = 0; i < particleCount; i++) {
      const galaxy = i < particleCount / 2 ? 1 : 2;
      const centerX = galaxy === 1 ? galaxy1CenterX : galaxy2CenterX;
      const centerY = galaxy === 1 ? galaxy1CenterY : galaxy2CenterY;
      
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 200 + 50;
      const spiralAngle = distance * 0.02;
      
      const x = centerX + Math.cos(angle + spiralAngle) * distance;
      const y = centerY + Math.sin(angle + spiralAngle) * distance;
      
      // Velocity towards the other galaxy
      const targetX = galaxy === 1 ? galaxy2CenterX : galaxy1CenterX;
      const targetY = galaxy === 1 ? galaxy2CenterY : galaxy1CenterY;
      
      const dx = targetX - x;
      const dy = targetY - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      particles.push({
        x,
        y,
        vx: (dx / dist) * 0.3 + Math.random() * 0.2 - 0.1,
        vy: (dy / dist) * 0.3 + Math.random() * 0.2 - 0.1,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.5,
        galaxy,
      });
    }

    let animationFrame: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add spiral motion
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 50) {
          const angle = Math.atan2(dy, dx);
          const spiralForce = 0.05;
          particle.vx += Math.cos(angle + Math.PI / 2) * spiralForce;
          particle.vy += Math.sin(angle + Math.PI / 2) * spiralForce;
        }

        // Gravitational pull towards center
        const gravity = 0.001;
        particle.vx += dx * gravity;
        particle.vy += dy * gravity;

        // Velocity damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + particle.alpha + ")";
        ctx.fill();

        // Draw glow effect
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 3
        );
        gradient.addColorStop(0, particle.color + (particle.alpha * 0.5) + ")");
        gradient.addColorStop(1, particle.color + "0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
        ctx.fill();

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Connect nearby particles
        particles.forEach((other, otherIndex) => {
          if (index === otherIndex) return;
          
          const dx = other.x - particle.x;
          const dy = other.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            const alpha = (1 - distance / 100) * 0.2;
            ctx.strokeStyle = `rgba(230, 43, 30, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

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
