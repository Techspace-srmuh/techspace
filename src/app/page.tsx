import HeroSection from "@/components/sections/hero/HeroSection";

import DomainsSection from "@/components/sections/domains/DomainsSection";
import WhyJoinSection from "@/components/sections/why-join/WhyJoinSection";
import TeamSection from "@/components/sections/team/TeamSection";
import EventsSection from "@/components/sections/events/EventsSection";

import GallerySection from "@/components/sections/gallery/GallerySection";
import JourneySection from "@/components/sections/journey/JourneySection";
import JoinSection from "@/components/sections/join/JoinSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import SplashScreen from "@/components/splash/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <HeroSection />
      {/* <WhatWeDoSection /> */}
      <DomainsSection />
      <WhyJoinSection />
      <TeamSection />
      <EventsSection />
      {/* <UpcomingSection /> */}
      <GallerySection />
      <JourneySection />
      <JoinSection />
      <Footer />
    </>
  );
}
