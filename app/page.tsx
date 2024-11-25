"use client";

import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Home from '../components/Home';
import Interests from '../components/Interests';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Interests />
      <Contact />
    </main>
  );
}
