import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MessageSection from "./components/sections/MessageSection";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <MessageSection />
    </main>
  );
};

export default App;
