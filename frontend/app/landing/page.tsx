"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import './LandingPage.css';
import logo from '../../assets/img/logo.svg';
import landinglogo from '../../assets/img/landinglogo.svg';
import greenflower from '../../assets/img/greenflower.svg';
import Image from 'next/image';



const LandingPage: React.FC = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startY, setStartY] = useState<number>(0);
  const [currentY, setCurrentY] = useState<number>(0);
  const hasMounted = useRef<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const navigateHome = () => {
    const deltaY: number = startY - currentY;
    if (deltaY > window.innerHeight * 0.45 && hasMounted.current) {
      router.push('/home');
    }
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent): void => {
        if (isDragging) {
          setCurrentY(e.clientY);
          navigateHome();
        }
      };

      const handleMouseUp = (): void => {
        setIsDragging(false);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startY, currentY, navigateHome]);

  const handleInteractionStart = (clientY: number): void => {
    setIsDragging(true);
    setStartY(clientY);
  };

  const containerStyle = isDragging ? { bottom: `${startY - currentY}px` } : {};

  return (
    <div className="landing-page">
      <div 
        className="indicators-container"
        onMouseDown={(e) => handleInteractionStart(e.clientY)}
        onTouchStart={(e) => handleInteractionStart(e.touches[0].clientY)}
        style={containerStyle}
      >
        <div className="rectangle-indicator"></div>
        <div className="landinglogo">
          <Image src={landinglogo}  id="landinglogo" alt="Logo"  />
        </div>
        <div className="flower">
          <p>Where education is for everyone.</p>
          <Image src={greenflower} id="flower" alt="Logo"  />
        </div>
        <div className="triangle-indicator"></div>
      </div>
      <div className="scroll-message">Scroll Up to Begin!</div>
    </div>
  );
}

export default LandingPage;
