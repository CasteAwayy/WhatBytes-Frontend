import React from "react";

const StarRating = ({
  rating = 0,
  maxStars = 5,
  starSize = 24,
  activeColor = "#365A84",
  inactiveColor = "#d1d5db",
  className = "",
}) => {
  const clampedRating = Math.min(Math.max(rating, 0), maxStars);

  // We'll create two overlapping stars - one for outline, one for partial fill
  const StarIcon = ({ fillPercent = 100 }) => (
    <div className="relative" style={{ width: starSize, height: starSize }}>
      {/* Outline star (always visible) */}
      <svg
        width={starSize}
        height={starSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke={inactiveColor}
        strokeWidth="1.5"
        className="absolute top-0 left-0"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>

      {/* Filled portion (clipped to percentage) */}
      {fillPercent > 0 && (
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{
            width: `${fillPercent}%`,
            height: starSize,
          }}
        >
          <svg
            width={starSize}
            height={starSize}
            viewBox="0 0 24 24"
            fill={activeColor}
            stroke={activeColor}
            strokeWidth="1.5"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      )}
    </div>
  );

  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex">
        {Array.from({ length: maxStars }).map((_, index) => {
          const starValue = index + 1;
          let fillPercent = 0;

          if (clampedRating >= starValue) {
            fillPercent = 100; // Fully filled star
          } else if (clampedRating > index) {
            fillPercent = (clampedRating - index) * 100; // Partial fill
          }

          return (
            <span key={index} className="mr-1">
              <StarIcon fillPercent={fillPercent} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
