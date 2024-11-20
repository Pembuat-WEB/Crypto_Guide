import React from 'react'
import { ComputersCanvas } from '../components/canvas'


const CaraKerja = () => {
  return (
    <div className="relative bg-CaraKerja-pattern bg-cover bg-no-repeat bg-center w-full p-4 dekstop:mt-20 dekstop:p-6">
      {/* Header Section */}
      <div className="relative flex flex-col dekstop:flex-row laptop:flex-row dekstop:h-[500px] laptop:h-[400px] w-full">
        <div className="ml-4 dekstop:ml-12 laptop:ml-8 mt-4 dekstop:mt-1 laptop:mt-20 dekstop:w-[100px] laptop:w-[100px]">
        <p className="hidden dekstop:block laptop:block text-3xl dekstop:text-5xl laptop:text-4xl font-bold gradient-text tracking-wider">
  C<br />A<br />R<br />A<br /><br />K<br />E<br />R<br />J<br />A
</p>

        </div>

        <div className="dekstop:h-[500px] dekstop:w-[1000px] laptop:h-[400px] laptop:w-[800px] mt-4 dekstop:ml-96 laptop:ml-36 text-slate-200 dekstop:mt-4 laptop:mt-12 text-center dekstop:text-left laptop:text-left">
          <div className="flex justify-center dekstop:justify-start laptop:justify-start mt-12 dekstop:mt-1 laptop:mt-1 laptop:ml-24">
            <ComputersCanvas className="relative z-0" style={{ transform: "translateY(120px)" }}/>
          </div>
          <p className="text-3xl dekstop:text-6xl laptop:text-4xl  font-semibold gradient-text4 italic mt-8 dekstop:-mt-32 dekstop:-ml-80 laptop:-mt-28 laptop:-ml-12">Blockchain</p>
          <p className="text-3xl dekstop:text-6xl laptop:text-4xl  font-semibold mt-4 text-slate-200 dekstop:-ml-28 laptop:ml-24">Dan</p>
          <p className="text-3xl dekstop:text-6xl laptop:text-4xl  font-semibold mt-4 gradient-text5 italic dekstop:-ml-32 laptop:ml-28 ">System Uang Peer-To-Peer</p>

          <p className="text-sm dekstop:text-lg dekstop:text-center laptop:text-base laptop:text-center mt-6 dekstop:mt-20 laptop:mt-16 px-4 dekstop:px-2 dekstop:-ml-32 laptop:px-2 laptop:-ml-20">
          Kali ini kita akan belajar tentang cara kerja Blockchain dan Sistem Peer-to-Peer! Teknologi ini memungkinkan jaringan yang aman, terbuka, dan tanpa perantara. Blockchain mencatat data di banyak tempat, membuatnya sulit diretas. Sementara itu, Sistem Peer-to-Peer memungkinkan pengguna terhubung langsung tanpa server .
           </p>
        </div>
      </div>

      {/* Blockchain Section */}
      <div className="mt-10 dekstop:mt-36 laptop:mt-36 p-4 dekstop:p-16 laptop:p-12">
        <h1 className="text-4xl dekstop:text-5xl laptop:4xl font-bold gradient-text4 mb-4 dekstop:mb-8 laptop:mb-6">Blockchain</h1>
        <h3 className="text-xl dekstop:text-2xl laptop:text-2xl font-bold mt-4 dekstop:mt-7 laptop:mt-6">Cara kerja blockchain</h3>
        <p className="text-sm dekstop:text-lg laptop:text-base text-white mt-2 leading-relaxed">
        Cara kerja blockchain dapat dijelaskan dengan mudah melalui beberapa langkah yang saling terhubung dan memungkinkan transaksi dan data untuk disimpan secara aman, transparan, dan tanpa memerlukan pihak ketiga. <br /> Berikut adalah penjelasan langkah demi langkah tentang bagaimana blockchain bekerja:

        </p>

        {/* Blockchain Steps */}
        <div className="mt-4 dekstop:mt-8 laptop:mt-6 space-y-6 dekstop:space-y-8 laptop:space-y-6">
          <div>
            <p className="text-sm dekstop:text-lg laptop:text-base">
              <span className="font-bold">1. Transaksi atau Data Dibuat:</span> 
              <ul className='list-disc  pl-6'>
             <li className='mt-3'> 
           Proses dimulai ketika seseorang melakukan transaksi atau membuat data baru. Contohnya, dalam dunia cryptocurrency seperti Bitcoin, transaksi bisa berupa transfer sejumlah Bitcoin dari satu pengguna ke pengguna lain. Data transaksi ini mencakup informasi seperti pengirim, penerima, jumlah, dan waktu transaksi.
             </li>

             <li className='mt-3'>
             Data transaksi ini mencakup informasi seperti pengirim, penerima, jumlah, dan waktu transaksi.
             </li>
          </ul></p>
          </div>
          <div>
            <p className="text-sm dekstop:text-lg laptop:text-base">
              <span className="font-bold">2. Validasi Jaringan:</span> 
              <ul className='list-disc  pl-6'>
             <li className='mt-3'> 
             Transaksi yang dibuat akan dikirim ke jaringan node (komputer) yang ada dalam sistem blockchain. Di dalam blockchain, semua node ini adalah salinan dari sistem yang menyimpan data yang sama.
             </li>

             <li className='mt-3'>
             Jaringan ini memverifikasi transaksi tersebut untuk memastikan bahwa transaksi tersebut valid dan sah. Misalnya, apakah pengirim memiliki cukup saldo untuk mengirimkan Bitcoin, atau apakah data lainnya valid.
            </li>
           </ul>
            </p>
          </div>
          <div>
            <p className="text-sm dekstop:text-lg laptop:text-base">
              <span className="font-bold">3. Pengelompokan dalam Blok:</span> <br />
            Setelah transaksi diverifikasi, transaksi tersebut akan digabungkan dengan transaksi lainnya dalam sebuah blok. <br /> 
            Setiap blok berisi informasi seperti :
              <ul className='list-disc  pl-6'>
            <li className='ml-5 mt-2'>
            Data transaksi yang baru diverifikasi.
            </li>           
            <li className='ml-5 mt-1'>
            Hash (nilai unik) dari blok sebelumnya, yang memastikan bahwa blok-blok tersebut terhubung satu sama lain dalam urutan tertentu.
            </li>           
            <li className='ml-5 mt-1'>
            Nonce, yang digunakan dalam proses penambangan (mining).
            </li>            
          </ul>
            </p>
          </div>
          <div>
            <p className="text-sm dekstop:text-lg laptop:text-base">
              <span className="font-bold">4. Penambangan:</span> 
              <ul className='list-disc pl-6'>
               <li className='mt-3'>
                 Penambang (miner) kemudian bersaing untuk menyelesaikan teka-teki matematis yang kompleks (dikenal dengan proof-of-work) yang membuktikan bahwa mereka telah meluangkan waktu dan usaha untuk memverifikasi transaksi dan menambah blok baru ke dalam blockchain.
                 </li>
               <li className='mt-2'>
                 Penambang yang pertama kali menyelesaikan teka-teki ini akan mendapatkan hak untuk menambahkan blok ke dalam rantai blockchain dan memperoleh hadiah berupa koin atau token (misalnya, Bitcoin untuk blockchain Bitcoin).
                 </li>
              </ul>
            </p>
          </div>
          <div>
            <p className="text-sm dekstop:text-lg laptop:text-base">
              <span className="font-bold">5. Penambahan Blok:</span>
              <ul className='list-disc pl-6'>
              <li className='mt-3'>
              Setelah penambang menyelesaikan proses tersebut, blok yang berisi transaksi akan ditambahkan ke rantai blok yang sudah ada.
               </li>
              <li className='mt-2'>
              Setiap blok baru yang ditambahkan mengandung hash dari blok sebelumnya, yang menciptakan rantai yang saling terhubung. Ini membuatnya hampir mustahil untuk mengubah data yang sudah ada, karena jika seseorang mencoba mengubah data pada salah satu blok, seluruh rantai akan rusak.
                </li>
            </ul>
            </p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-10">
          <h3 className="text-2xl dekstop:text-3xl laptop:text-2xl font-bold">Tambahan</h3>
          <p className="text-sm dekstop:text-lg laptop:text-base mt-3 text-white">
          Blockchain digunakan tidak hanya dalam cryptocurrency seperti Bitcoin dan Ethereum, tetapi juga dalam berbagai aplikasi lain, seperti smart contracts, supply chain management, voting systems, dan digital identity verification.
          </p>
        </div>
      </div>

      {/* Peer-To-Peer Section */}
      <div className="mt-10 dekstop:mt-36 laptop:mt-32 p-4 dekstop:p-16 laptop:p-14">
        <h1 className="text-4xl dekstop:text-5xl laptop:text-4xl font-bold gradient-text5 mb-4 dekstop:mb-8 laptop:mb-6">System Peer-To-Peer</h1>
        <h3 className="text-xl dekstop:text-2xl laptop:text-1xl font-bold mt-4 dekstop:mt-7 laptop:mt-6">Cara kerja sistem Peer-to-Peer</h3>
        <p className="text-sm dekstop:text-lg laptop:text-base text-white mt-2 leading-relaxed">
        Sistem peer-to-peer (P2P) adalah model jaringan di mana setiap komputer atau perangkat dalam jaringan dapat berperan sebagai klien sekaligus server. Tidak ada server pusat yang mengendalikan jaringan; sebaliknya, setiap perangkat berinteraksi secara langsung dengan perangkat lainnya. <br /> Berikut adalah cara kerja sistem peer-to-peer:
        </p>

        {/* P2P Steps */}
        <div className="mt-4 dekstop:mt-8 laptop:mt-6 space-y-6 dekstop:space-y-8 laptop:space-y-6">
          
            <p className="text-sm dekstop:text-lg laptop:text-base">
              <span className="font-bold">1. Koneksi Langsung Antar-Peer:</span>
              <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Dalam sistem P2P, setiap perangkat yang terhubung disebut sebagai peer. Semua peer memiliki hak dan peran yang sama dalam jaringan, tidak ada perangkat khusus yang bertindak sebagai pusat.
           </li>

            <li className='mt-3'>
            Ketika sebuah peer ingin berbagi file atau data, perangkat tersebut dapat langsung mengirim atau menerima data dari peer lainnya tanpa perlu melalui server pusat.
            </li>
          </ul>
            </p>
          
            <p className="text-sm dekstop:text-lg laptop:text-base">
              <span className="font-bold">2. Penyimpanan Data Terdistribusi:</span>
              <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Data yang ada di jaringan P2P dapat disimpan secara terdistribusi. Misalnya, dalam jaringan berbagi file P2P, file yang besar bisa dibagi menjadi beberapa bagian kecil. Setiap peer yang mengunduh bagian dari file ini juga dapat menyediakan bagian yang sudah diunduh kepada peer lainnya.
            </li>

            <li className='mt-3'>
            Cara ini memungkinkan setiap perangkat dalam jaringan untuk menyimpan sebagian data, mengurangi kebutuhan penyimpanan di satu tempat dan meningkatkan efisiensi.
           </li>
          </ul>
            </p>

            <p className='text-sm dekstop:text-lg laptop:text-base'>
          3. <span className='font-bold '>Proses Pengunduhan dan Pengunggahan</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Ketika seorang pengguna ingin mengunduh file, sistem P2P akan mencari peer lain yang memiliki file tersebut atau bagian-bagiannya.
             </li>

            <li className='mt-3'>
            Setelah menemukan peer yang memiliki file tersebut, pengunduhan dimulai dengan mengunduh berbagai bagian dari beberapa peer secara bersamaan, sehingga meningkatkan kecepatan pengunduhan.
           </li>

            <li className='mt-3'>
            Saat seorang peer sudah menyelesaikan pengunduhan file, ia dapat berfungsi sebagai sumber tambahan untuk peer lain yang ingin mengunduh file tersebut, menjadi seeder yang membantu memperbanyak sumber data.
           </li>
          </ul>
          </p> 

          
          <p className='text-sm dekstop:text-lg laptop:text-base'>
          4. <span className='font-bold '>Pemeliharaan Koneksi dan Peer</span><br />
          <ul className='list-disc  pl-6'>            
            <li className='mt-3'> 
            Setiap peer dalam jaringan memelihara koneksi dengan peer lain melalui protokol P2P (seperti BitTorrent, Gnutella, atau Kademlia).
            </li>

            <li className='mt-3'>
            Ketika peer baru bergabung, ia akan terhubung ke jaringan dan mulai berkomunikasi dengan peer lainnya. Biasanya, peer dapat menemukan perangkat lain melalui daftar node yang ada atau melalui metode peer discovery yang otomatis.
           </li>
          </ul>
          </p>

          <p className='text-sm dekstop:text-lg laptop:text-base'>
          5. <span className='font-bold '>Desentralisasi dan Torleransi Terhadap Gangguan</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Karena setiap perangkat di jaringan bertindak sebagai server dan klien, jaringan P2P tahan terhadap gangguan. Jika satu peer berhenti bekerja, peer lainnya tetap dapat beroperasi dan melanjutkan pengiriman data.
            </li>

            <li className='mt-3'>
            Desentralisasi ini membuat sistem P2P lebih tahan terhadap serangan atau kegagalan, karena tidak ada satu titik pusat yang dapat menjadi target utama.
           </li>
          </ul>
          </p> 

              <p className='text-sm dekstop:text-lg laptop:text-base'>
          6. <span className='font-bold '>Keamanan dan Enkripsi</span><br />
          <ul className='list-disc  pl-6'>
            <li className='mt-3'> 
            Dalam banyak sistem P2P, data dikirim dalam bentuk yang dienkripsi untuk menjaga privasi pengguna. Selain itu, sebagian besar jaringan P2P memiliki mekanisme verifikasi yang memastikan data yang dibagikan tidak rusak atau tercemar oleh malware.
            </li>
          </ul>
          </p>        
        </div>

          <div>

        <h3 className='text-3xl font-bold ml-16 mt-6 text-slate-200 dekstop:mt-20 laptop:mt-16'>Contoh Penggunaan system Peer-To-Peer : </h3>
            <ul className='list-disc pl-12 dekstop:text-[18px]  laptop:text-[16px] '>
              <li className='mt-4'>Berbagi File: Aplikasi seperti BitTorrent memungkinkan pengguna untuk berbagi file dengan efisien. File yang besar dibagi menjadi bagian-bagian kecil yang dapat diunduh dari beberapa sumber sekaligus.</li>
              <li className='mt-4'>Cryptocurrency: Jaringan Bitcoin dan blockchain lain adalah contoh dari jaringan P2P, di mana setiap node menyimpan salinan transaksi dan saling terhubung tanpa server pusat.</li>
              <li className='mt-4'>Voice over IP (VoIP): Aplikasi seperti Skype pada dasarnya menggunakan jaringan P2P untuk mengirimkan data suara dan video secara langsung antar pengguna.              </li>
              <li className='mt-4'>Streaming Data Terdistribusi: Sistem P2P dapat digunakan untuk streaming konten, di mana setiap pengguna yang menonton juga berbagi konten dengan pengguna lainnya, mengurangi beban pada server pusat.</li>
            </ul>

        <h3 className='text-3xl font-bold ml-16 mt-6 text-slate-200 dekstop:mt-16 laptop:mt-12'>Keunggulan System Peer-To-Peer : </h3>
            <ul className='list-disc pl-12 dekstop:text-[18px] laptop:text-[16px] '>
              <li className='mt-4'>Desentralisasi: Tidak tergantung pada server pusat, sehingga jaringan lebih tahan terhadap gangguan atau serangan.</li>
              <li className='mt-4'>Efisiensi: Pengguna dapat berbagi sumber daya dan bandwidth, meningkatkan efisiensi penggunaan jaringan.</li>
              <li className='mt-4'>Skalabilitas: Jaringan dapat tumbuh dengan mudah karena setiap peer baru yang bergabung juga menambah kapasitas jaringan.</li>
            </ul>

            <h3 className='text-3xl font-bold ml-12 mt-10'>Tambahan !</h3>
            <p className=' dekstop:text-[18px] laptop:text-[15px]  mt-3'>sistem P2P memungkinkan berbagi data yang lebih cepat, aman, dan tidak bergantung pada satu titik pusat, membuatnya ideal untuk berbagai aplikasi yang membutuhkan jaringan yang tahan gangguan dan scalable.</p>

          </div>
        {/* Summary */}
        <div className="mt-10 text-center dekstop:text-left laptop:text-left">
          <h3 className="text-2xl dekstop:text-3xl dekstop:text-center laptop:text-2xl laptop:text-center text-center font-bold gradient-text6">Kesimpulan</h3>
          <p className='dekstop:text-[18px] laptop:text-[16px] mt-6 text-center'>Blockchain adalah teknologi penyimpanan data yang terdesentralisasi, di mana data disimpan dalam blok-blok yang terhubung secara berurutan dan aman melalui enkripsi. Sistem peer-to-peer (P2P), yang mendasari blockchain, memungkinkan setiap perangkat dalam jaringan untuk berfungsi sebagai node yang saling berbagi dan memverifikasi data tanpa perantara pusat.</p>
            <p className='dekstop:text-[18px] laptop:text-[16px] mt-6 text-center'>Dalam blockchain, setiap transaksi atau data baru harus diverifikasi oleh mayoritas node, lalu ditambahkan ke dalam blok baru. Blok ini kemudian dihubungkan ke rantai blok sebelumnya melalui hash yang unik. Struktur ini membuat data yang tercatat dalam blockchain tidak dapat diubah atau dihapus, meningkatkan keamanan dan transparansi.</p>
            <p className='dekstop:text-[18px] laptop:text-[16px] mt-6 text-center'>Keunggulan dari kombinasi blockchain dan sistem P2P adalah desentralisasi, di mana tidak ada otoritas pusat yang mengendalikan data. Semua node berkontribusi pada pemeliharaan dan keamanan jaringan, membuat sistem ini lebih tahan terhadap serangan dan gangguan. Dengan desentralisasi, transparansi, dan keamanan tinggi, teknologi ini cocok untuk aplikasi keuangan (seperti cryptocurrency), kontrak pintar, dan berbagai bidang yang membutuhkan integritas data yang kuat.</p>
        
        </div>
      </div>
    </div>
  )
}

export default CaraKerja
