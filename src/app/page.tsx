"use client";

import Section from "@/components/section";
import Navbar from "@/components/shared/navbar";
import HeroSection from "@/components/hero";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <main className="bg-secondary min-h-screen" data-scroll-container>
      <div
        className="h-[120vh] bg-home-page bg-cover bg-bottom bg-no-repeat"
        data-scroll-section
      >
        <Navbar />
        <HeroSection />
      </div>

      <Section
        count="01"
        headline="Get started"
        title="What level of hiker are you?"
        content="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you - novice, moderate, advanced moderate, expert or expert backpacker?"
        readMoreLink="/"
        image="/images/01.jpg"
      />
      <Section
        count="02"
        headline="Hiking essentials"
        title="Picking the right Hiking Gear!"
        content="The nice thing about beginning hiking is that you don't really need any special gear. You can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe and will get sweaty or wet."
        readMoreLink="/"
        image="/images/02.jpg"
        reverse
      />
      <Section
        count="03"
        headline="Where you go is the key"
        title="Understand your map & timing"
        content="To start, print out the hiking guide and map. If it's raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that say, in a mile, I make a right turn at the junction..."
        readMoreLink="/"
        image="/images/03.jpg"
      />

      <Footer />
    </main>
  );
}
