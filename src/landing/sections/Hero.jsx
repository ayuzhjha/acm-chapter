import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Assuming we have lucide-react, otherwise use text

import BlurText from "../../components/BlurText";
import NotificationCard from "../../components/NotificationCard";

const Hero = () => {
  const [showEvent, setShowEvent] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="relative z-0 h-[75vh] md:h-screen w-full overflow-hidden flex flex-col items-center justify-end pb-0 md:pb-20">

      {/* Notifications Wrapper */}
      <div className="notification-wrapper">
        <NotificationCard
          title="ACM Winter School"
          subtitle="Starts Tmr"
          description="Register now to attend live sessions!"
          image=""
          delay={0}
        />
        <NotificationCard
          title="New Weekly DDS Challenge"
          subtitle="12:00 P.M."
          description="Click to join and solve the challenge"
          image=""
          delay={0.2}
          onClick={() => console.log("Joined Challenge")}
        />

        {/* Mobile: Toggle Button */}
        <div className="md:hidden w-full flex justify-end">
          <button
            onClick={() => setShowEvent(!showEvent)}
            className="glass-card px-4 py-2 text-xs font-bold flex items-center gap-2"
            style={{ alignSelf: 'flex-end', width: 'auto' }}
          >
            {showEvent ? "Show Less" : "Show More"}
            {showEvent ? "▲" : "▼"}
          </button>
        </div>

        {/* Event Poster Card - Hidden on mobile unless toggled, always visible on desktop */}
        <div className={`${showEvent ? 'flex' : 'hidden'} md:flex`}>
          <NotificationCard
            type="event"
            title="Data Visualization"
            image="/dvevent.png"
            delay={0.4}
          />
        </div>
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-[75vh] md:h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/ximu2.mp4" type="video/mp4" />
      </video>

      {/* Gradient Blur Overlay - Hidden on mobile */}
      <div
        className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[5px] z-0 pointer-events-none hidden md:block"
        style={{
          maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)'
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-white -translate-y-32 md:translate-y-0">
        {/* Responsive Logo */}
        <img
          src="/acm-white.svg"
          alt="ACM Student Chapter"
          className="hidden md:block w-full max-w-3xl h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        />
        <img
          src="/acm.svg"
          alt="ACM Student Chapter"
          className="md:hidden w-full max-w-[85%] h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
        />

        <p className="mt-4 text-xl md:text-3xl font-bold tracking-wide font-inter">
          <span className="text-red-600">X</span>IM <span className="text-red-600">U</span>niversity
        </p>
      </div>
    </div>
  );
};

export default Hero;
