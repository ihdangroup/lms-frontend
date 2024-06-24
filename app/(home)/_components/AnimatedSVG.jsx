// components/AnimatedSVG.js
import React from "react";

const AnimatedSVG = () => {
  return (
    <div className="flex items-center z-10 justify-center w-screen h-screen">
      <svg className="w-24 h-36 overflow-visible">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#FF56A1", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#FF9350", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <g className="animate-slide">
          <path
            d="M 50,100 A 1,1 0 0 1 50,0"
            className="stroke-current stroke-20 fill-none stroke-round animate-escalade"
          />
        </g>
        <g className="animate-slide animation-delay-500">
          <path
            d="M 50,75 A 1,1 0 0 0 50,-25"
            className="stroke-current stroke-20 fill-none stroke-round animate-escalade animation-delay-500"
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSVG;
