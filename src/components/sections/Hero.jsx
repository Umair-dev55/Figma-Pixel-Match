import { useGSAP } from "@gsap/react";
const Hero = () => {
  return (
    <section className="w-full h-screen bg-main-bg ">
      <div className="hero-container ">
        <img className="hero-img" src="/images/static-img.png" alt="" />
        <div
          className="
         hero-content 
         "
        >
          <div>
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            // style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }}
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
