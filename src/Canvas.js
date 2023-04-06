import { useRef, useEffect } from "react";

const Canvas = () => {
    const canvasRef = useRef(null);
    const ctx = useRef(null);
    const lerp = (start, end, time) => start + (end - start) * time;

    const cursor = { x: -100, y: -100 };
    const coordinates = [...Array(length)].map(() => ({
        x: cursor.x,
        y: cursor.y,
        radius: Math.random(),
    }));

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        ctx.current = canvas.getContext("2d");

        window.addEventListener("resize", () => {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
        });

        window.addEventListener("mousemove", (e) => {
            cursor.x = e.clientX;
            cursor.y = e.clientY;
        });

        const animate = (timestamp) => {
            ctx.current.clearRect(0, 0, canvas.width, canvas.height);
            const cos = Math.cos(timestamp * 0.005) * 2;
            const sin = Math.sin(timestamp * 0.005) * 2;

            for (let i = 0; i < length; i++) {
                const radius = i * coordinates[i].radius;
                const offset = length / 2 - i;
                const lerpX = lerp(
                    coordinates[i].x,
                    cursor.x + offset,
                    radius * 0.01
                );
                const lerpY = lerp(
                    coordinates[i].y,
                    cursor.y + offset,
                    radius * 0.01
                );
                ctx.current.beginPath();
                ctx.current.arc(
                    lerpX + cos,
                    lerpY + sin,
                    radius,
                    0,
                    Math.PI * 2
                );
                ctx.current.fill();
                coordinates[i].x = lerpX;
                coordinates[i].y = lerpY;
            }

            window.requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", null);
            window.removeEventListener("mousemove", null);
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default Canvas;