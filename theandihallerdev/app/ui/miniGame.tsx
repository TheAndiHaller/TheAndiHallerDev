'use client';
import React, { useEffect, useRef } from "react";

const CityGame: React.FC = () => {
  const gameContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!gameContainerRef.current) return;

    // Include your plain JavaScript game setup here
    const script = document.createElement("script");
    script.src = "/miniGame/script.js"; // Path to your plain JS game file
    script.async = true;
    gameContainerRef.current.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      if (gameContainerRef.current) {
        gameContainerRef.current.removeChild(script);
      }
    };
  }, []);

  return <div ref={gameContainerRef} style={{ width: "100%", height: "100%" }} > 
    <canvas id="canvas1"></canvas>
  </div>;
};

export default CityGame;



/*
import "@/app/ui/miniGame.css";


export default function MiniGame() {
  return (
    <iframe
      src="/miniGame/index.html"
      title="City Platformer"
    />
  );
}
*/

/*
import { useEffect, useRef } from "react";
import Matter, { Engine, Render, World, Bodies } from "matter-js";

export default function CoffeeScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create an engine
    const engine: Engine = Engine.create();
    const world = engine.world;

    // Create a renderer
    const render: Render = Render.create({
      element: sceneRef.current as HTMLElement,
      engine: engine,
      options: {
        width: 800,
        height: 400,
        background: "#f5f5f5",
        wireframes: false, // Use non-wireframe rendering
      },
    });

    // Add a ground
    const ground = Bodies.rectangle(400, 360, 810, 100, {
      isStatic: true,
      render: {
        fillStyle: "#888",
      },
    });

    // Add the coffee cup
    const coffeeCup = Bodies.rectangle(400, 260, 64, 64, {
      render: {
        sprite: {
          texture: "/assets/miniGame/coffee.gif", // Path to your coffee sprite
          xScale: 4, // Scale the sprite (4x in this case)
          yScale: 4,
        },
      },
    });

    // Add the bodies to the world
    World.add(world, [ground, coffeeCup]);

    // Run the engine and renderer
    //Engine.run(engine);
    Matter.Runner.run(engine);
    Render.run(render);

    // Cleanup on component unmount
    return () => {
      Render.stop(render);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef}></div>;
}
*/