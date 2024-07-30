import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import Navbar from "@/components/Navbar";

export default function Home() {
  const words = ["faster", "better", "easier"];
  return (
    <><Navbar /><div className="relative min-h-screen flex flex-col bg-[#0C0C0C]">

      <div className="flex-grow flex justify-center items-center px-4">
        <div className="text-96 font-normal text-white dark:text-white">
          We Design
          <FlipWords words={words} /> <br />
        </div>
      </div>
      <div className="w-[1007px] relative text-[48px]  font-poppins text-white text-left inline-block">Precision 3D Printing Services in Hyderabad</div>
    </div></>





  );
}
