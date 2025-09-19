import React from "react";
// import motion from 'motion/react'
import DesktopComponent from "../../components/newsletter/NLDesktop";
import MobileDesktop from "../../components/newsletter/NLMobile";

const Newsletter = () => {
  return (
    <div className="h-full w-full">
      <div className="hidden md:block">
        <DesktopComponent />
      </div>
      <div className="block md:hidden">
        <MobileDesktop />
      </div>
    </div>
  );
};

export default Newsletter;
