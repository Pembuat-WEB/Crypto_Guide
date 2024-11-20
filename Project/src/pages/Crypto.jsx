import React from 'react';
import { ViewBitcoin2, ViewBitcoin3, ViewEthereum } from '../components/canvas';
import { styles } from '../style';

const Crypto = () => {
  return (
    <>
      <div className="relative bg-Crypto-pattern bg-cover bg-no-repeat w-full h-auto opacity-95 p-4 dekstop:p-8 laptop:p-8">
        <div className="relative flex flex-col  dekstop:flex-row laptop:flex-row items-center justify-center dekstop:h-[500px] laptop:h-[400px] w-full gap-8">
          {/* Gambar 3D */}
          <div className="h-[300px] w-[300px] dekstop:h-[500px] dekstop:w-[400px] laptop:h-[500px] laptop:w-[300px] mt-6 -ml-0 dekstop:-ml-12 laptop:-ml-16">
            <ViewBitcoin2 />
          </div>

          {/* Teks di sebelah kanan untuk layar besar, bawah gambar di layar kecil */}
          <div className="dekstop:w-[1200px] laptop:w-[1000px] mt-2 dekstop:mt-52 laptop:mt-96">
            <h1 className={`gradient-text3 italic text-center dekstop:text-left dekstop:text-5xl laptop:text-left laptop:text-4xl`}>Apa itu Cryptocurrency?</h1>
            <div className="p-2 dekstop:p-6 laptop:p-4">
                 <p className="text-center text-white tablet:text-[18px] mt-4">Cryptocurrency adalah bentuk mata uang digital atau virtual yang menggunakan teknologi kriptografi untuk mengamankan transaksi. Tidak seperti mata uang tradisional yang dikelola oleh bank sentral atau pemerintah, cryptocurrency biasanya beroperasi di jaringan yang terdesentralisasi, seperti blockchain. Blockchain adalah sistem pencatatan transaksi yang terbuka, transparan, dan terdistribusi di banyak komputer dalam jaringan, yang membuatnya lebih sulit untuk dimanipulasi.</p>
                 <p className="text-center text-white tablet:text-[18px] mt-4">Salah satu contoh cryptocurrency yang paling terkenal adalah Bitcoin, yang pertama kali diciptakan pada tahun 2009 oleh seseorang dengan nama samaran Satoshi Nakamoto. Selain Bitcoin, ada banyak cryptocurrency lain seperti Ethereum, Ripple (XRP), dan Litecoin, masing-masing dengan tujuan dan fitur yang berbeda.</p>
              {/* Tambahan konten teks */}
              <p className="text-white text-[16px] tablet:text-[18px] mt-4 dekstop:ml-12 laptop:ml-8">
                Keunggulan cryptocurrency antara lain:
                <br /><br />
                <ul className='list-decimal'>
                  <li className='mt-2'>
                  Desentralisasi : Tidak ada pihak tunggal yang mengendalikan mata uang (bank).
                  </li>
                  <li className='mt-2'>
                  Keamanan       : Menggunakan kriptografi untuk memastikan transaksi yang aman.
                  </li>
                  <li className='mt-2'>
                  Transparansi   : Semua transaksi tercatat di blockchain yang dapat dilihat oleh siapa saja.
                  </li>
                  <li className='mt-2'>
                  Anonimitas      : Beberapa cryptocurrency menawarkan tingkat privasi yang tinggi. 
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 dekstop:mt-60 laptop:mt-96">
          <h3 className="text-white text-3xl dekstop:text-4xl laptop:text-3xl  gradient-text3 ml-4">Kenapa harus Cryptocurrency?</h3>
          <div className="bgtext">
           <p className='text-white text-[16px] tablet:text-[18px] mt-4 dekstop:ml-16 dekstop:w-[1100px] laptop:ml-12 laptop:w-[900px] text-center dekstop:text-left laptop:text-left '>Cryptocurrency adalah instrumen investasi baru yang bahkan belum berumur satu dekade, namun sudah melahirkan banyak orang kaya baru. Mengapa demikian? Karena aset crypto memiliki potensi kenaikan harga yang sangat tinggi dalam waktu singkat, dengan tingkat pertumbuhan yang bisa mencapai 1.000 kali lipat atau lebih. <br /> <br />
               Dengan potensi keuntungan yang sangat inggi, tak heran banyak orang mendadak kaya melalui investasi di cryptocurrency. Namun, penting untuk memahami risikonya juga. Jika dibandingkan dengan investasi emas, perbedaannya cukup jelas. <br /><br />
               Emas adalah salah satu instrumen investasi yang stabil, di mana nilai aset ini cenderung meningkat secara bertahap. Rata-rata, harga emas naik sekitar 8,5% per tahun, dengan risiko penurunan yang relatif kecil. Stabilitas ini membuat emas menjadi pilihan menarik bagi banyak orang yang ingin menumbuhkan kekayaan tanpa risiko tinggi. <br /><br />
               Sebaliknya, cryptocurrency menawarkan peluang yang jauh lebih besar, dengan beberapa aset kripto yang memiliki potensi kenaikan hingga 1.000 kali lipat atau lebih. Namun, volatilitas crypto juga berarti risiko yang jauh lebih tinggi, di mana nilai aset Anda bisa berkurang secara drastis, bahkan hingga kehilangan seluruh nilainya (penurunan 100%). <br /><br />
               Oleh karena itu, bagi investor yang tertarik pada keuntungan besar dalam waktu singkat, crypto bisa menjadi pilihan yang menarik, namun perlu disertai dengan pemahaman risiko yang matang dan strategi yang hati-hati. 
            </p>
     </div>
        </div>

        <div className="relative mt-8 dekstop:mt-20 laptop:mt-16 text-center dekstop:text-left laptop:text-left">
          <h1 className="text-white text-center text-3xl dekstop:text-4xl laptop:text-3xl gradient-text3">Aset paling aman di Cryptocurrency</h1>
          <p className="text-white text-[16px] tablet:text-[18px] mt-4 dekstop:ml-52 laptop:ml-44 dekstop:w-[800px] laptop:w-[600px] text-center">
          Karena tingkat fluktuasi yang tinggi, penting untuk memilih cryptocurrency yang relatif aman namun tetap memiliki potensi keuntungan yang menarik. Dalam dunia crypto, aset yang dianggap lebih aman sering disebut sebagai "blue-chip coins" atau "koin besar", Yaitu 
          </p>
        </div>

        {/* Kontainer untuk Bitcoin dan Ethereum */}
        <div className="relative flex dekstop:flex-row laptop:flex-row items-center justify-around mt-8 dekstop:mt-20 laptop:mt-16 gap-8 dekstop:gap-16 laptop:gap-12">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl dekstop:text-6xl laptop:text-5xl gradient-text3">Bitcoin</h1>
            <div className="h-[150px] w-[150px] dekstop:h-[400px] dekstop:w-[400px] laptop:h-[300px] laptop:w-[300px]">
              <ViewBitcoin3 />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl dekstop:text-6xl laptop:text-5xl gradient-text3">Ethereum</h1>
            <div className="h-[150px] w-[150px] dekstop:h-[400px] dekstop:w-[400px] laptop:h-[300px] laptop:w-[300px]">
              <ViewEthereum />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crypto;
