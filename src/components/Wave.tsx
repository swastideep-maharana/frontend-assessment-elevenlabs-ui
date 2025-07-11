import React from "react";
import Wavify from "react-wavify";

export default function Wave() {
  return (
    <div
      className="pointer-events-none select-none fixed left-0 right-0 bottom-0 w-full z-[-1]"
      style={{ lineHeight: 0, height: 220, minWidth: "100vw" }}
      aria-hidden="true"
    >
      <Wavify
        fill="url(#blueGradient)"
        paused={false}
        options={{
          height: 180,
          amplitude: 40,
          speed: 0.18,
          points: 6,
        }}
        style={{
          width: "100vw",
          height: 220,
          minWidth: "100vw",
          display: "block",
        }}
      >
        <defs>
          <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#a5b4fc" />
          </linearGradient>
        </defs>
      </Wavify>
    </div>
  );
}
