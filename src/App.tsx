import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/loading-screen';
import { Dashboard } from './components/dashboard';

const SlicedTransition = ({ children }: { children: React.ReactNode }) => {
  const totalStrips = 24;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`fixed inset-0 z-50 flex ${isMobile ? 'flex-col' : ''} overflow-hidden pointer-events-none w-full h-[100dvh]`}>
      {Array.from({ length: totalStrips }).map((_, i) => {
        // Left half (desktop) or Top half (mobile)
        const isFirstHalf = i < totalStrips / 2;
        // Smooth staggered delay moving across
        const delay = i * 0.045;

        return (
          <motion.div
            key={i}
            className="relative overflow-hidden pointer-events-auto"
            style={
              isMobile 
                ? { height: `${100 / totalStrips}%`, width: '100%' } 
                : { width: `${100 / totalStrips}%`, height: '100%' }
            }
            initial={
              isMobile
                ? { x: 0, filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))' }
                : { y: 0, filter: 'drop-shadow(0px 0px 0px rgba(0,0,0,0))' }
            }
            exit={
              isMobile
                ? {
                    x: isFirstHalf ? '-100vw' : '100vw',
                    filter: isFirstHalf ? 'drop-shadow(-20px 0px 30px rgba(0,0,0,0.6))' : 'drop-shadow(20px 0px 30px rgba(0,0,0,0.6))'
                  }
                : { 
                    y: isFirstHalf ? '100dvh' : '-100dvh',
                    filter: isFirstHalf ? 'drop-shadow(0px -20px 30px rgba(0,0,0,0.6))' : 'drop-shadow(0px 20px 30px rgba(0,0,0,0.6))'
                  }
            }
            transition={{
              duration: 1.4,
              ease: [0.76, 0, 0.24, 1], // Cinematic ease out
              delay: delay
            }}
          >
            <div
              className="absolute"
              style={
                isMobile
                  ? {
                      width: '100%',
                      height: `${totalStrips * 100}%`,
                      top: `-${i * 100}%`,
                      left: 0,
                    }
                  : {
                      height: '100%',
                      width: `${totalStrips * 100}%`,
                      left: `-${i * 100}%`,
                      top: 0,
                    }
              }
            >
              {i === 0 
                ? children 
                : React.cloneElement(children as React.ReactElement, { onComplete: undefined })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <SlicedTransition key="loading">
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </SlicedTransition>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          key="dashboard"
          className="relative z-0 w-full h-[100dvh] overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
        >
          <Dashboard />
        </motion.div>
      )}
    </>
  );
}
