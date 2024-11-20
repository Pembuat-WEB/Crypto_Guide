import React from 'react'

const Keamanan = () => {
  return (
    <div className='mt-24 relatife h-full w-full '>
      <div className="relative h-[500px] w-full bg-CaraKerja2-pattern bg-cover bg-no-repeat bg-center flex flex-col dekstop:flex-row laptop:flex-row tablet:flex-row">
  <div className="relative h-[100px] w-full dekstop:w-[650px] laptop:w-[600px] tablet:w-[500px] ml-4 dekstop:ml-8 mt-4 dekstop:mt-8">
    <h1 className="font-bold text-4xl dekstop:text-7xl laptop:text-6xl tablet:text-5xl tablet:mt-4 tablet:ml-20 gradient-text7">Keamanan</h1>
    <h1 className="font-bold mt-2 ml-32 dekstop:mt-4 text-3xl dekstop:text-6xl laptop:text-5xl tablet:text-4xl gradient-text7 dekstop:ml-40 laptop:ml-40 tablet:ml-52 ">
      Cryptocurrency
    </h1>
    <p className=" text-sm tablet:text-[15px] laptop:text-[17px] mt-52 dekstop:mt-48 laptop:mt-48 text-center w-full dekstop:w-[850px] laptop:w-[700px] tablet:w-[600px] tablet:mt-52  ">
      Keamanan cryptocurrency adalah aspek yang sangat penting karena aset digital ini beroperasi di
      lingkungan yang terdesentralisasi dan tanpa perantara seperti bank atau institusi finansial.
      Beberapa elemen utama keamanan dalam cryptocurrency meliputi kriptografi, mekanisme konsensus,
      dan teknologi blockchain. Berikut adalah beberapa informasi kunci tentang keamanan cryptocurrency:
    </p>
  </div>

  <div className="text-center text-white mt-4 dekstop:mt-0 dekstop:ml-72 opacity-10 filter blur-sm animate-blink w-full dekstop:w-auto flex justify-center dekstop:block laptop:ml-32 laptop:-mt-2  ">
    <div className="hidden laptop:block h-[200px] w-[50px] dekstop:w-[140px] laptop:w-[100px] tablet:w-[80px] mt-2 ">
      <p className=" font-bold text-3xl tablet:text-3xl laptop:text-4xl dekstop:text-5xl">
        K <br />
        E <br />
        A <br />
        M <br />
        A <br />
        N <br />
        A <br />
        N
      </p>
    </div>

    <div className="hidden laptop:block h-[200px] w-[50px] tablet:w-[80px] laptop:w-[100px] dekstop:w-[140px] ml-4 tablet:ml-8 laptop:-ml-8 dekstop:ml-24 dekstop:mt-1 -mt-4 tablet:-mt-6 laptop:mt-48">
      <p className="font-bold text-3xl tablet:text-3xl laptop:text-4xl dekstop:text-5xl ">
        C <br />
        R <br />
        Y <br />
        P <br />
        T <br />
        O <br />
      </p>
    </div>
  </div>
</div>


      <div className='relative h-[500px] w-auto bg-Keamanan-pattern bg-cover bg-no-repeat  bg-center '>
        < div className='h-[500px] w-auto p-14'>
          <h1 className='pt-20 pl-12 text-4xl gradient-text7 '>Keamanan Crypto : </h1>
        </div>
      </div>
      <div className='h-auto w-auto relative -mt-80 p-8 '>
      <p className='text-[#dfd9ff] sm: text-[18px] mt-6 p-6'>
          1. <span className='font-bold '>Kriptografi Asimetris (Public Key dan Private Key)</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Seperti dijelaskan sebelumnya, kriptografi asimetris adalah fondasi dari keamanan cryptocurrency. Public key digunakan sebagai alamat untuk menerima dana, sementara private key digunakan untuk menandatangani transaksi.</li>

            <li className='mt-3'>
            Jika private key diretas atau hilang, siapa pun yang memilikinya dapat mengambil alih dana di dompet tersebut. Oleh karena itu, penyimpanan private key dengan aman sangatlah penting.</li>
          </ul>
          </p>
          <p className='text-[#dfd9ff] sm: text-[18px] p-6'>
          2. <span className='font-bold '> Blockchain dan Sistem Ledger Terdesentralisasi</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Transaksi cryptocurrency dicatat di blockchain, sebuah sistem ledger (buku besar) yang terdistribusi dan terdesentralisasi. Ini berarti bahwa setiap transaksi harus diverifikasi oleh node-node yang tersebar di seluruh dunia.</li>
            <li className='mt-3'>
            Karena data blockchain tidak tersimpan di satu tempat melainkan di seluruh jaringan, sangat sulit bagi pihak jahat untuk mengubah informasi di dalamnya. Setiap blok baru di blockchain memiliki hash dari blok sebelumnya, membuat setiap upaya untuk memodifikasi transaksi sebelumnya menjadi hampir mustahil tanpa menguasai mayoritas node.
            </li>
          </ul>
          </p>
          <p className='text-[#dfd9ff] sm: text-[18px] p-6'>
          3. <span className='font-bold '>Mekanisme Konsensus: Proof of Work (PoW) dan Proof of Stake (PoS)</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Proof of Work (PoW): Dalam sistem PoW, transaksi dikonfirmasi melalui proses yang disebut mining, di mana komputer-komputer dalam jaringan harus memecahkan teka-teki kriptografi untuk menambahkan blok baru ke blockchain. Sistem ini digunakan oleh Bitcoin dan beberapa cryptocurrency lain. Meski kuat, PoW memerlukan konsumsi energi yang tinggi.</li>
            <li className='mt-3'>
            Proof of Stake (PoS): PoS memilih validator blok berdasarkan kepemilikan atau jumlah koin yang mereka “taruhkan” (stake). Validator yang memiliki lebih banyak aset biasanya memiliki peluang lebih besar untuk dipilih. PoS lebih hemat energi dibandingkan PoW dan digunakan oleh beberapa cryptocurrency modern seperti Ethereum.</li>
          </ul>
          </p>
          <p className='text-[#dfd9ff] sm: text-[18px] p-6'>
          4. <span className='font-bold '>Dompet Cryptocurrency dan Penyimpanan Aman</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Cold Wallet: Dompet offline (seperti perangkat keras atau dompet kertas) yang tidak terhubung ke internet sehingga aman dari serangan online.</li>
            <li className='mt-3'>
            Hot Wallet: Dompet online yang terhubung ke internet, seperti dompet aplikasi atau dompet berbasis web. Hot wallet lebih praktis untuk transaksi harian tetapi lebih rentan terhadap serangan siber.</li>
            <li className='mt-3'>
            Multi-Signature Wallets: Beberapa dompet menggunakan mekanisme multi-tanda tangan yang membutuhkan lebih dari satu kunci untuk melakukan transaksi. Ini menambahkan lapisan keamanan ekstra.
            </li>
          </ul>
          </p>
          <p className='text-[#dfd9ff] sm: text-[18px] p-6'>
          5. <span className='font-bold '>Risiko Keamanan dan Serangan</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Serangan Phishing: Hacker dapat menipu pengguna agar memberikan informasi sensitif seperti kata sandi atau private key melalui situs web palsu atau email phishing.</li>
            <li className='mt-3'>
            Serangan Ransomware dan Malware: Beberapa peretas menggunakan malware untuk mengakses perangkat pengguna dan mencuri private key atau informasi dompet.</li>
            <li className='mt-3'>
            Serangan Ransomware dan Malware: Beberapa peretas menggunakan malware untuk mengakses perangkat pengguna dan mencuri private key atau informasi dompet.
            </li>
          </ul>
          </p>
          <p className='text-[#dfd9ff] sm: text-[18px] p-6'>
          6. <span className='font-bold '>Regulasi dan Perlindungan Konsumen</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Meskipun cryptocurrency bersifat desentralisasi, beberapa negara telah mulai membuat regulasi untuk mencegah pencucian uang, penipuan, dan kejahatan lainnya. Regulasi ini juga memberikan perlindungan konsumen dalam kasus pencurian atau penipuan.</li>
            <li className='mt-3'>
            Beberapa negara memaksa penyedia layanan cryptocurrency, seperti bursa, untuk mengikuti standar keamanan dan kepatuhan yang ketat.</li>
          </ul>
          </p>
          <p className='text-[#dfd9ff] sm: text-[18px] p-6'>
          7. <span className='font-bold '>Keamanan dari Pengguna</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'>
            Pengguna cryptocurrency juga memiliki peran penting dalam keamanan aset mereka sendiri. Menggunakan autentikasi dua faktor (2FA) di akun bursa, menyimpan private key secara offline, dan menghindari situs yang mencurigakan adalah langkah penting untuk melindungi aset cryptocurrency.
            </li>
          </ul>
          </p>
          <p className='text-[#dfd9ff] sm: text-[18px] p-6'>
          8. <span className='font-bold '>Pengembangan Teknologi Keamanan Baru</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Teknologi blockchain terus berkembang untuk meningkatkan keamanannya, misalnya melalui teknik baru seperti zk-SNARKs (zero-knowledge proofs) yang memungkinkan verifikasi transaksi tanpa membocorkan detailnya.</li>
            <li className='mt-3'>
            Konsep quantum resistance juga menjadi perhatian karena ancaman komputer kuantum yang dapat memecahkan algoritma kriptografi tradisional. Penelitian untuk mengembangkan algoritma yang tahan terhadap komputer kuantum sedang berlangsung.
            </li>
          </ul>
          </p>
          <p className='text-[#dfd9ff] sm: text-[18px] text-center p-6'>Dengan adanya berbagai lapisan keamanan ini, cryptocurrency menawarkan keamanan yang relatif tinggi, meskipun pengguna tetap perlu berhati-hati dan waspada terhadap risiko dan ancaman yang terus berkembang.</p>
      </div>
    </div>
  )
}
{/* <p className=' ml-24 mt-4 text-[#dfd9ff] sm: text-[18px] w-[1000px] '>Keamanan cryptocurrency adalah aspek yang sangat penting karena aset digital ini beroperasi di lingkungan yang terdesentralisasi dan tanpa perantara seperti bank atau institusi finansial. Beberapa elemen utama keamanan dalam cryptocurrency meliputi kriptografi, mekanisme konsensus, dan teknologi blockchain. </p> */}

export default Keamanan