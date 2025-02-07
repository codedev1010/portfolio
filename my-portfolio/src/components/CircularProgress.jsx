import React from 'react';

const CircularProgress = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-24 h-24">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100"
        style={{ transform: 'rotate(-90deg)' }}
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#f0f0f0"
          strokeWidth="8"
        />
        
        {/* Progress circle with gradient */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
        
        {/* Gradient definition */}
        <defs>
          <linearGradient id="progressGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#ef4743" />      {/* Red */}
            <stop offset="50%" stopColor="#ffc01e" />     {/* Yellow */}
            <stop offset="100%" stopColor="#00b8a3" />    {/* Green */}
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center text with variable color */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span 
          className="text-lg font-bold"
          style={{ color: 'var(--text-color, #333333)' }}
        >
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};

export default CircularProgress;