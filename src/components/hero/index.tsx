"use client";

import TimelineButtons from "./timeline";
import Social from "./social";
import Content from "./content";

const HeroSection = () => {
  return (
    <div className="px-10 pt-40 md:px-20">
      <div className="flex flex-row items-center justify-between">
        {/* Social section */}
        <Social />

        {/* Main Text */}
        <Content />

        {/* Buttons */}
        <TimelineButtons />
      </div>
    </div>
  );
};

export default HeroSection;
