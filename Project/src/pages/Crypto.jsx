import React from 'react';
import { ViewBitcoin2, ViewBitcoin3, ViewEthereum } from '../components/canvas';
import { styles } from '../style';

const Crypto = () => {
  return (
    <>
      <div className="relative bg-Crypto-pattern bg-cover bg-no-repeat w-full h-auto opacity-95 p-4 md:p-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center md:h-[500px] w-full gap-8">
          {/* Gambar 3D */}
          <div className="h-[300px] w-[300px] md:h-[500px] md:w-[400px] mt-6 -ml-0 md:-ml-12">
            <ViewBitcoin2 />
          </div>

          {/* Teks di sebelah kanan untuk layar besar, bawah gambar di layar kecil */}
          <div className="md:w-[1200px] mt-2 md:mt-52">
            <h1 className={`${styles.heroHeadText} gradient-text3 italic text-center md:text-left`}>Apa itu Cryptocurrency?</h1>
            <div className="p-2 md:p-6">
                 <p className="text-center text-white sm:text-[18px] mt-4">Cryptocurrency adalah bentuk mata uang digital atau virtual yang menggunakan teknologi kriptografi untuk mengamankan transaksi. Tidak seperti mata uang tradisional yang dikelola oleh bank sentral atau pemerintah, cryptocurrency biasanya beroperasi di jaringan yang terdesentralisasi, seperti blockchain. Blockchain adalah sistem pencatatan transaksi yang terbuka, transparan, dan terdistribusi di banyak komputer dalam jaringan, yang membuatnya lebih sulit untuk dimanipulasi.</p>
                 <p className="text-center text-white sm:text-[18px] mt-4">Salah satu contoh cryptocurrency yang paling terkenal adalah Bitcoin, yang pertama kali diciptakan pada tahun 2009 oleh seseorang dengan nama samaran Satoshi Nakamoto. Selain Bitcoin, ada banyak cryptocurrency lain seperti Ethereum, Ripple (XRP), dan Litecoin, masing-masing dengan tujuan dan fitur yang berbeda.</p>
              {/* Tambahan konten teks */}
              <p className="text-white text-[16px] sm:text-[18px] mt-4 md:ml-12">
                Keunggulan cryptocurrency antara lain:
                <br /><br />
                <ul className='list-decimal'>
                  <li className='mt-2'>
                  Desentralisasi : Tidak ada pihak tunggal yang mengendalikan mata uang ( bank ).
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

        <div className="relative mt-8 md:mt-60">
          <h3 className="text-white text-3xl md:text-4xl  gradient-text3 ml-4">Kenapa harus Cryptocurrency?</h3>
          <div className="bgtext">
           <p className='text-white text-[16px] sm:text-[18px] mt-4 md:ml-16 md:w-[1100px] text-center md:text-left'>Cryptocurrency adalah instrumen investasi baru yang bahkan belum berumur satu dekade, namun sudah melahirkan banyak orang kaya baru. Mengapa demikian? Karena aset crypto memiliki potensi kenaikan harga yang sangat tinggi dalam waktu singkat, dengan tingkat pertumbuhan yang bisa mencapai 1.000 kali lipat atau lebih. </p>
               <p className='text-white text-[16px] sm:text-[18px] mt-4 md:ml-16 md:w-[1100px] text-center md:text-left'>Dengan potensi keuntungan yang sangat inggi, tak heran banyak orang mendadak kaya melalui investasi di cryptocurrency. Namun, penting untuk memahami risikonya juga. Jika dibandingkan dengan investasi emas, perbedaannya cukup jelas. </p>
               <p className='text-white text-[16px] sm:text-[18px] mt-4 md:ml-16 md:w-[1100px] text-center md:text-left'>Emas adalah salah satu instrumen investasi yang stabil, di mana nilai aset ini cenderung meningkat secara bertahap. Rata-rata, harga emas naik sekitar 8,5% per tahun, dengan risiko penurunan yang relatif kecil. Stabilitas ini membuat emas menjadi pilihan menarik bagi banyak orang yang ingin menumbuhkan kekayaan tanpa risiko tinggi.</p>
               <p className='text-white text-[16px] sm:text-[18px] mt-4 md:ml-16 md:w-[1100px] text-center md:text-left'>Sebaliknya, cryptocurrency menawarkan peluang yang jauh lebih besar, dengan beberapa aset kripto yang memiliki potensi kenaikan hingga 1.000 kali lipat atau lebih. Namun, volatilitas crypto juga berarti risiko yang jauh lebih tinggi, di mana nilai aset Anda bisa berkurang secara drastis, bahkan hingga kehilangan seluruh nilainya (penurunan 100%). </p>
               <p className='text-white text-[16px] sm:text-[18px] mt-4 md:ml-16 md:w-[1100px] text-center md:text-left'>Oleh karena itu, bagi investor yang tertarik pada keuntungan besar dalam waktu singkat, crypto bisa menjadi pilihan yang menarik, namun perlu disertai dengan pemahaman risiko yang matang dan strategi yang hati-hati. </p>
     </div>
        </div>

        <div className="relative mt-8 md:mt-20 text-center md:text-left">
          <h1 className="text-white text-center text-3xl md:text-4xl gradient-text3">Aset paling aman di Cryptocurrency</h1>
          <p className="text-white text-[16px] sm:text-[18px] mt-4 md:ml-52 md:w-[800px] text-center">
          Karena tingkat fluktuasi yang tinggi, penting untuk memilih cryptocurrency yang relatif aman namun tetap memiliki potensi keuntungan yang menarik. Dalam dunia crypto, aset yang dianggap lebih aman sering disebut sebagai "blue-chip coins" atau "koin besar", Yaitu 
          </p>
        </div>

        {/* Kontainer untuk Bitcoin dan Ethereum */}
        <div className="relative flex md:flex-row items-center justify-around mt-8 md:mt-20 gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl md:text-6xl gradient-text3">Bitcoin</h1>
            <div className="h-[150px] w-[150px] md:h-[400px] md:w-[400px]">
              <ViewBitcoin3 />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-center text-3xl md:text-6xl gradient-text3">Ethereum</h1>
            <div className="h-[150px] w-[150px] md:h-[400px] md:w-[400px]">
              <ViewEthereum />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crypto;
