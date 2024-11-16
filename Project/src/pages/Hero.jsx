import React from 'react';
import { StarsCanvas, ViewBitcoin } from "../components/canvas";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center mt-20">
      <StarsCanvas />
      <div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-20 overflow-visible w-full justify-center items-center h-[530px]">
        
        {/* Teks Kiri (hilang di layar kecil) */}
        <div className="hidden md:block text-center text-7xl text-white -mt-10 opacity-10 filter blur-sm animate-blink">
          <div className="gradient-text2">
            C <br />
            R <br />
            Y <br />
            P <br />
            T <br />
            O <br />
          </div>
        </div>

        {/* Kontainer Gambar 3D dan Judul */}
        <div className="relative flex-shrink-0 h-[500px] w-full md:w-[900px] flex flex-col items-center justify-center text-center z-2">
          <h1 className="text-3xl md:text-6xl font-grotesk gradient-text1 mb-4 md:mb-8">
            C R Y P T O C U R R E N C Y
          </h1>
          <div className="w-[450px] h-[250px] md:w-[700px] md:h-[500px]">
            <ViewBitcoin />
          </div>
          <p className="text-white text-4xl mt-4 gradient-text1 md:hidden">
            Selamat datang dan selamat belajar 
          </p>
        </div>

        {/* Teks Kanan (hilang di layar kecil) */}
        <div className="hidden md:block text-center text-6xl text-white mt-1 opacity-10 filter blur-sm animate-blink">
          <div className="gradient-text2">
            C <br />
            U <br />
            R <br />
            R <br />
            E <br />
            N <br />
            C <br />
            Y <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
