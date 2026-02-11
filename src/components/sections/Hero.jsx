import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
// Register the plugin once (can be here or in a top-level file)
gsap.registerPlugin(SplitText);
const Hero = () => {
  useGSAP(() => {
    let split = SplitText.create(".hero-title", { type: "chars," });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
    });
    tl.to(".hero-text-scroll", {
      duration: 2,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  });
  return (
    <section className="w-full h-screen bg-main-bg ">
      <div className="hero-container ">
        <img className="hero-img" src="/images/static-img.png" alt="" />
        <div
          className="
         hero-content opacity-0
         "
        >
          <div>
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%" }}
            className="hero-text-scroll "
          >
            <div className="hero-subtitle">
              <h1 className="">Protein + Cuffin</h1>
            </div>
          </div>
          <h2 className="">
            Live life to the Fullest with SPYLT: Shatter Boredom and Embrace
            your inner kid with every deliciously smooth chug
          </h2>
          <div className="hero-button">
            <p>Chug a SPLYT</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
