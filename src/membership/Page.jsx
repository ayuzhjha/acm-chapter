import React from "react";
import FooterNavigation from "./components/FooterNavigation";
import Header from "./components/Header";
import Main from "./components/Main";

const Page = () => {
  return (
    <div className="h-full bg-gradient-to-b from-blue-50 to-neutral-50 mx-auto px-max text-2xl w-full relative">
      <div className="max-w-[100rem] mx-auto">
        <Header />
        <Main />
      </div>

      <FooterNavigation />
    </div>
  );
};

export default Page;
