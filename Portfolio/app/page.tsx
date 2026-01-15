"use client";

import { useState, useEffect } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero";
import { HeroSection04 } from "@/components/ui/hero-04";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const scrollHeight = 1500;
  const { scrollY } = useScroll();
  const [showHero, setShowHero] = useState(false);
  
  // Show hero content when scroll reaches the point where image is full screen
  const heroOpacity = useTransform(
    scrollY,
    [scrollHeight - 300, scrollHeight],
    [0, 1]
  );
  
  // Fade out scroll message as user scrolls
  const scrollMessageOpacity = useTransform(
    scrollY,
    [0, scrollHeight * 0.5],
    [1, 0]
  );
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest >= scrollHeight - 300) {
      setShowHero(true);
    } else {
      setShowHero(false);
    }
  });

  return (
    <div className="relative min-h-screen bg-black">
      {/* Smooth scroll hero section - forest path background */}
      <SmoothScrollHero
        scrollHeight={scrollHeight}
        desktopImage="/m1.jpeg"
        mobileImage="/m1.jpeg"
        initialClipPercentage={25}
        finalClipPercentage={75}
      />
      
      {/* Scroll message - appears above background image */}
      <motion.div
        className="fixed bottom-[77%] left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
        style={{
          opacity: scrollMessageOpacity,
        }}
      >
        <p className="font-mono text-center text-sm font-medium tracking-wide md:text-base text-white">
          scroll :)
        </p>
      </motion.div>
      
      {/* Hero section 04 - only shows when forest image is at full screen */}
      <AnimatePresence>
        {showHero && (
          <motion.div 
            className="fixed inset-0 z-10 pointer-events-none"
            style={{
              opacity: heroOpacity,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pointer-events-auto">
              <HeroSection04 />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
