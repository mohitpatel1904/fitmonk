import React, { useState } from 'react';
import { FaDumbbell } from 'react-icons/fa';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  withText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', withText = true, className = '' }) => {
  const [imageError, setImageError] = useState(true); // Start with true to default to fallback
  
  // Size mapping
  const sizeMap = {
    small: {
      image: 30,
      icon: 18,
      text: 'fs-6'
    },
    medium: {
      image: 40,
      icon: 24,
      text: 'fs-4'
    },
    large: {
      image: 60,
      icon: 36,
      text: 'fs-2'
    }
  };

  return (
    <div className={`d-flex align-items-center ${className}`}>
      {!imageError ? (
        // Use the image if available
        <div className="me-2">
          <img 
            src="/images/fitmonk-logo.png" 
            alt="FitMonk Logo" 
            style={{ 
              width: sizeMap[size].image, 
              height: sizeMap[size].image,
              objectFit: 'contain'
            }}
            onError={() => setImageError(true)}
          />
        </div>
      ) : (
        // Fallback to styled background with monk silhouette or dumbbell
        <div 
          className="me-2 d-flex align-items-center justify-content-center rounded-circle" 
          style={{ 
            backgroundColor: '#f1c459', // Gold background like in the logo
            width: sizeMap[size].image, 
            height: sizeMap[size].image,
            border: '2px solid #000'
          }}
        >
          <FaDumbbell size={sizeMap[size].icon} className="text-dark" />
        </div>
      )}
      
      {withText && (
        <span className={`fw-bold ${sizeMap[size].text} text-primary`}>
          Fit<span className="text-primary">Monk</span>
        </span>
      )}
    </div>
  );
};

export default Logo; 