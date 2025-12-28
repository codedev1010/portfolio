import React from 'react';

const CircularProgress = ({ percentage }) => {
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{
      width: "clamp(90px, 22vw, 150px)",        // 📌 Auto-resize for mobile
      height: "clamp(120px, 28vw, 200px)",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>

      <svg 
        width="100%" height="100%" viewBox="0 0 100 100" 
        style={{ transform:"rotate(-90deg)", overflow:"visible"}}
      >
        {/* Background ring */}
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
          style={{ transition:"stroke-dashoffset .7s ease" }}
        />

        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stopColor="#ff6b6b"/>
            <stop offset="50%" stopColor="#ffb347"/>
            <stop offset="100%" stopColor="#00d29b"/>
          </linearGradient>
        </defs>
      </svg>

      {/* Center % text */}
      <div style={{
        position:"absolute",
        inset:"0",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize:"clamp(.8rem, 3vw, 1.2rem)",   // 📌 Auto-scale text
        fontWeight:"700",
        color:"#ffb347",
        textShadow:"0 0 6px rgba(255,179,71,.6)"
      }}>
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default CircularProgress;
