'use client'
import React, { useState } from "react";
import Login from "./src/components/Login";
import MagicProvider from '@/app/src/hooks/MagicProvider';
import { BubblesArray } from "./src/components/FloatingBubble/FloatingBubble";
import FloatingBubble from "./src/components/FloatingBubble/FloatingBubble";
import NavBar from "./src/components/LandingPage/NavBar";
import Body from "./src/components/LandingPage/Body";
import Footer from "./src/components/LandingPage/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);



const toggleModal = () => {
  setIsModalOpen(!isModalOpen);
};

  return (
    <MagicProvider>
    <main className="relative min-h-screen text-black overflow-hidden bg-[#ADBCEC] z-0">
      {/* Floating Bubbles */}
        {BubblesArray.map((BubblesArray, index) => (
          <FloatingBubble key={index} {...BubblesArray} />
        ))}
        <NavBar/>
        <Body/>
        <Footer/>
    </main>
    </MagicProvider>
  );
}

