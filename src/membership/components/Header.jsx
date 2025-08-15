import React from "react";

const Header = () => {
  return (
    <div className="relative py-10">
      <div className="font-bebas-neue px-2 md:px-0 text-5xl md:text-6xl xl:text-7xl">
        Membership
      </div>
      <div 
        className="hidden md:block relative text-right font-outline-4 font-bebas-neue -top-0 right-0 text-[14rem] text-blue-50 whitespace-nowrap">
        Membership
      </div>
    </div>
  );
};

export default Header;
