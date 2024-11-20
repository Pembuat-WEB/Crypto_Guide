import React from 'react';
import { StarsCanvas, ViewBitcoin } from "../components/canvas";
import Button2 from '../components/Button2';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
      <StarsCanvas />
      <div className="dekstop:mt-20 laptop:mt-12 tablet:mt-12  mt-12 flex dekstop:flex-row laptop:flex-row tablet:flex-row gap-1 overflow-visible w-full justify-center items-center h-[530px]">
        
        {/* Teks Kiri (hilang di layar kecil) */}
        <div className="hidden tablet:block text-center dekstop:text-7xl laptop:text-6xl tablet:text-6xl text-white -mt-10 opacity-10 filter blur-sm animate-blink">
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
        <div className="relative flex-shrink-0 h-[500px] w-full flex flex-col dekstop:w-[900px] laptop:w-[700px] tablet:w-[500px] items-center justify-center text-center z-2">
          <h1 className="text-4xl tablet:text-4xl laptop:text-5xl dekstop:text-6xl font-grotesk gradient-text1 mb-4 tablet:mb-12 tablet:-mt-8 laptop:mb-4 laptop:mt-0 dekstop:mb-4 dekstop:mt-0">
            C R Y P T O C U R R E N C Y
          </h1>
          <div className="h-[200px] w-[350px] tablet:w-[450px] tablet:h-[250px] laptop:h-[250px] laptop:w-[450px] dekstop:h-[350px] dekstop:w-[650px]">
            <ViewBitcoin />
          </div>
          <Button2 className="block tablet:hidden">
            <Link
                to="/Crypto"
                className={`hover:text-purple-500 transition-colors duration-100 delay-50 text-sm`}
              >
            Mari Mulai !
            </Link>
          </Button2>
        </div>

        {/* Teks Kanan (hilang di layar kecil) */}
        <div className="hidden tablet:block dekstop:text-6xl laptop:text-5xl tablet:text-5xl text-center text-white mt-1 opacity-10 filter blur-sm animate-blink">
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
