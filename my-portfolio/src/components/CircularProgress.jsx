import React from 'react';

const CircularProgress = ({ percentage }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{
      width: "150px",
      height: "200px",
      position: "relative",
    }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform:"rotate(-90deg)" }}>
        
        {/* Dark ring background */}
        <circle
          cx="50" cy="50" r={radius}
          stroke="#222"
          strokeWidth="10"
          fill="none"
        />

        {/* Progress arc */}
        <circle
          cx="50" cy="50" r={radius}
          stroke="url(#grad)"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
          style={{ transition:"0.6s ease" }}
        />

        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stopColor="#ff6b6b" />      {/* red */}
            <stop offset="50%" stopColor="#ffb347" />     {/* yellow */}
            <stop offset="100%" stopColor="#00d29b" />    {/* green */}
          </linearGradient>
        </defs>
      </svg>

      {/* Animated glowing % */}
      <div style={{
        position:"absolute", inset:"0",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"1rem",
        fontWeight:"600",
        color:"#ffb347"
      }}>
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default CircularProgress;
