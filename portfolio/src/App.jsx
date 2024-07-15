import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      <Navbar />
      <div className="container mx-auto px-8">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
