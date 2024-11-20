import React, { useState, useEffect } from 'react';
import { defi, mainstream, smartcontract } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { db, ref, push, onValue } from '../../firebase';

const Smartcontract = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // Store messages and responses

  // Fetch messages and responses from Firebase
  useEffect(() => {
    const messagesRef = ref(db, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesList = [];
      for (let id in data) {
        messagesList.push({ id, ...data[id] });
      }
      setMessages(messagesList);
    });
  }, []);

  // Handle message submission
  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    try {
      console.log('Attempting to send message...');
      const messagesRef = ref(db, 'messages');
      await push(messagesRef, {
        message,
        response: '',
        repliedAt: null,
        tanggal:new Date().toISOString(),
      });

      alert('Message sent successfully!');
      setMessage('');
      console.log('Message sent to Firebase');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message');
    }
  };

  // Function to navigate back
  const handleBack = () => {
    navigate('/Sektor');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900 flex flex-col items-center justify-center p-4 dekstop:p-12 laptop:p-12">
      {/* Title Section */}
      <div className="flex justify-center items-center h-[15vh]">
        <div className="h-[60px] w-[200px] dekstop:w-[500px] laptop:w-[400px] tablet:w-[300px] bg-slate-50 text-center rounded-2xl shadow-xl border-2 border-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-indigo-500/50 transform hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-black text-2xl dekstop:text-6xl laptop:text-5xl tablet:text-4xl font-extrabold gradient-judul tracking-wide">Smart Contract</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center h-auto w-full dekstop:w-[1150px] laptop:w-[1000px] bg-slate-100 mt-6 dekstop:mt-12 laptop:mt-8 mb-12 p-4 dekstop:p-6 laptop:p-5 rounded-xl shadow-lg">
        <h2 className="text-gray-800 text-2xl dekstop:text-3xl laptop:text-2xl font-semibold mb-4 text-center">Apa itu Smart Contract ?</h2>
        <p className="text-gray-600 text-base dekstop:text-lg  laptop:text-base text-center mb-6 px-4">
        Sektor Smart Contract dalam Cryptocurrency adalah salah satu komponen paling revolusioner dalam dunia blockchain, di mana kontrak atau kesepakatan dapat dijalankan secara otomatis tanpa memerlukan pihak ketiga sebagai perantara. Smart contract adalah program komputer yang secara otomatis mengeksekusi perjanjian antara berbagai pihak ketika kondisi tertentu terpenuhi. Sektor ini memberikan banyak kegunaan yang mencakup berbagai bidang, seperti keuangan, real estate, logistik, dan layanan digital lainnya.
        </p>

        {/* Image Section */}
        <div className="w-[90%] max-w-[450px] h-[300px] dekstop:h-[450px] laptop:h-[350px] rounded-lg flex items-center justify-center mb-8 overflow-hidden">
          <img src={smartcontract} alt="DEFI" className="w-full h-full object-contain" />
        </div>

         {/* Additional Information Section */}
         <div className="flex flex-wrap justify-around w-full gap-4 mb-6">
          <div className="w-full dekstop:w-[48%] laptop:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 dekstop:p-6 laptop:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl dekstop:text-2xl laptop:text-2xl font-semibold mb-2">Otomatisasi dan Eksekusi Transaksi Tanpa Perantara</h3>
            <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base">
            Smart contract memungkinkan eksekusi transaksi secara otomatis berdasarkan kode yang telah diprogram, tanpa memerlukan perantara seperti bank atau notaris. Hal ini mempercepat proses transaksi dan mengurangi biaya operasional. Misalnya, dalam transaksi properti, smart contract bisa mengatur pengalihan kepemilikan secara otomatis setelah pembeli melakukan pembayaran yang disepakati, sehingga membuat transaksi lebih cepat dan aman.
             </p>
          </div>
          <div className="w-full dekstop:w-[48%] laptop:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 dekstop:p-6 laptop:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl dekstop:text-2xl laptop:text-2xl font-semibold mb-2"> Mendukung Aplikasi DeFi (Decentralized Finance)</h3>
            <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base">
            Smart contract menjadi pondasi bagi aplikasi DeFi, yang menyediakan layanan keuangan seperti pinjaman, staking, dan perdagangan aset kripto tanpa memerlukan lembaga keuangan tradisional. Dengan smart contract, pengguna dapat mengunci aset mereka untuk mendapatkan bunga atau menggunakan aset sebagai jaminan untuk pinjaman. Ini memungkinkan layanan keuangan yang lebih terbuka dan mudah diakses, karena semua aturan dan kondisi transaksi diatur dalam kode yang transparan.
             </p>
          </div>
        </div>

        {/* Long Content Reading Section */}
        <div className="w-full bg-white p-4 dekstop:p-6 laptop:p-4 rounded-lg shadow-md overflow-auto h-[300px] dekstop:h-[500px] laptop:h-[400px]">
          <h3 className="text-gray-800 text-lg dekstop:text-2xl laptop:text-2xl font-semibold mb-3">1. Pengertian Smart Contract</h3>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed">
          Smart contract adalah kode atau program komputer yang berjalan di atas blockchain. Kode ini dirancang untuk menjalankan berbagai tindakan tertentu secara otomatis ketika kondisi atau aturan yang ditetapkan sebelumnya dipenuhi. Karena kode smart contract tersimpan di blockchain, setiap eksekusi kontrak bersifat permanen, transparan, dan dapat diverifikasi oleh siapa pun. Dengan begitu, kontrak ini dapat dijalankan tanpa kepercayaan (trustless) antara pihak yang terlibat karena semua aturan dan prosesnya telah diatur dalam kode. <br /> <br />
          <span className='font-bold'>Contoh:</span> Misalkan seseorang ingin membeli properti dari orang lain. Smart contract dapat memfasilitasi transaksi dengan mengunci dana pembeli sampai dokumen properti dipindahkan ke kepemilikan pembeli. Setelah kondisi ini terpenuhi, smart contract akan secara otomatis merilis dana kepada penjual. Jika salah satu pihak tidak memenuhi syarat, dana dapat dikembalikan kepada pembeli tanpa perlu perantara seperti agen properti.
          </p>

          <h3 className="text-gray-800 text-lg dekstop:text-2xl laptop:text-2xlfont-semibold mb-3 mt-4">2. Karakteristik Utama Smart Contract</h3>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-4">
            a. <span className='font-semibold text-xl'> Autonomous (Otonom)</span> <br />
            Smart contract berjalan secara otomatis dan mandiri setelah diaktifkan. Tidak ada pihak yang perlu mengawasi atau menjalankan kontrak setelah kode tersebut diunggah ke blockchain. Ini menghilangkan kebutuhan untuk pengawasan manual dan mengurangi biaya operasional.
             </p>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
            b. <span className='font-semibold text-xl'>Decentralized (Terdesentralisasi)</span> <br />
            Karena smart contract berjalan di atas blockchain, eksekusi dan catatannya terdesentralisasi. Ini berarti bahwa data dan eksekusi kontrak tersebar di seluruh jaringan, sehingga lebih aman dan sulit dimanipulasi.
            </p>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
            c. <span className='font-semibold text-xl'>Immutable (Tidak Dapat Diubah)</span> <br />
            Setelah smart contract dideploy di blockchain, kode dan ketentuannya tidak dapat diubah. Ini mencegah pihak-pihak yang terlibat dari mengubah ketentuan atau hasil kontrak di tengah jalan, memberikan jaminan keamanan dan kepercayaan pada setiap pihak yang terlibat.
            </p>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
            d. <span className='font-semibold text-xl'> Transparent (Transparan)</span> <br />
            Setiap transaksi dan eksekusi smart contract dapat dilihat oleh siapa saja yang memiliki akses ke blockchain, sehingga memastikan transparansi yang tinggi dan memungkinkan audit yang mudah.
            </p>

          <h3 className="text-gray-800 text-lg dekstop:text-2xl laptop:text-2xl font-semibold mb-3 mt-4">3. Fungsi dan Kegunaan Smart Contract di Berbagai Industri</h3>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-4">
            a. <span className='font-semibold text-xl'> Keuangan Terdesentralisasi (DeFi)</span> <br />
            Dalam dunia keuangan terdesentralisasi (DeFi), smart contract berfungsi untuk mengotomatisasi transaksi, seperti pinjaman, peminjaman, dan pertukaran aset kripto, tanpa perlu lembaga keuangan tradisional. Contohnya, platform seperti Compound dan Aave menggunakan smart contract untuk memberikan pinjaman secara otomatis dengan jaminan kripto, di mana bunga pinjaman dihitung dan dibayarkan secara otomatis berdasarkan syarat yang diatur dalam smart contract.
            </p>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
            b. <span className='font-semibold text-xl'> Manajemen Rantai Pasokan (Supply Chain)</span> <br />
            Smart contract dapat digunakan untuk mencatat informasi tentang produk di sepanjang rantai pasokan. Setiap kali produk berpindah dari satu pihak ke pihak lain, smart contract dapat mencatat status, lokasi, dan kepemilikannya di blockchain. Ini memungkinkan setiap pihak dalam rantai pasokan untuk memverifikasi keaslian dan riwayat produk secara transparan.
            </p>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
            c. <span className='font-semibold text-xl'> Pembelian dan Penjualan Aset Digital</span> <br />
            Dalam pembelian aset digital, smart contract bisa digunakan untuk mengamankan transaksi. Misalnya, ketika seseorang membeli karya seni digital, smart contract dapat memastikan bahwa karya tersebut unik dan asli, dan hanya akan merilis pembayaran ketika kepemilikan karya tersebut diserahkan kepada pembeli.
             </p>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
            d. <span className='font-semibold text-xl'> Pemungutan Suara Elektronik (Voting)</span> <br />
            Smart contract juga digunakan dalam pemungutan suara elektronik karena transparansi dan keamanannya yang tinggi. Setiap suara yang diberikan dapat direkam di blockchain secara aman dan tidak dapat diubah, memastikan bahwa hasil pemilu atau pemungutan suara tidak bisa dimanipulasi.
            </p>

            <h3 className="text-gray-800 text-lg dekstop:text-2xl laptop:text-2xl font-semibold mb-3 mt-3">4. Cara Kerja Smart Contract</h3>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
          Smart contract bekerja dengan mendefinisikan kondisi tertentu yang harus dipenuhi sebelum suatu tindakan dieksekusi. Kode smart contract ini biasanya ditulis dalam bahasa pemrograman tertentu seperti Solidity (untuk Ethereum) dan diunggah ke blockchain, di mana kontrak tersebut akan dijalankan oleh jaringan. <br /> <br />
          <span className='font-semibold'>Tahapan Dasar Eksekusi Smart Contract : </span>
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Pembuatan Kontrak: Pengembang membuat smart contract yang mendefinisikan syarat dan ketentuan.
             </li>
            <li className='mt-2'>
            Pendaftaran di Blockchain: Smart contract diunggah ke blockchain. Proses ini disebut "deployment."
             </li>
            <li className='mt-2'>
            Pemenuhan Syarat: Ketika pengguna memenuhi syarat atau kondisi kontrak, kontrak akan secara otomatis dijalankan.
            </li>
            <li className='mt-2'>
            Eksekusi: Kontrak mengeksekusi tindakan yang telah ditetapkan, misalnya melepaskan dana atau mencatat transaksi di blockchain.
            </li>
          </ul>
           </p>
           
            <h3 className="text-gray-800 text-lg dekstop:text-2xl laptop:text-2xl font-semibold mb-3 mt-3">5. Keuntungan Smart Contract</h3>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Efisiensi dan Kecepatan: Smart contract menghilangkan kebutuhan untuk proses manual dan pihak ketiga, yang sering kali memperlambat transaksi.
            </li>
            <li className='mt-2'>
            Keamanan yang Tinggi: Karena kontrak berjalan di atas blockchain, sulit bagi siapa pun untuk meretas atau memanipulasi data di dalamnya.
            </li>
            <li className='mt-2'>
            Transparansi: Semua pengguna dalam jaringan dapat melihat dan memverifikasi smart contract dan transaksinya, sehingga memberikan kepercayaan.
             </li>
            <li className='mt-2'>
            Mengurangi Biaya Transaksi: Dengan menghilangkan perantara, smart contract dapat mengurangi biaya transaksi yang biasanya dikenakan oleh pihak ketiga.
            </li>
          </ul>
           </p>
           
            <h3 className="text-gray-800 text-lg dekstop:text-2xl laptop:text-2xl font-semibold mb-3 mt-3">6. Tantangan dan Risiko dalam Penggunaan Smart Contract</h3>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Kesalahan Kode dan Kerentanan: Smart contract yang memiliki bug atau kerentanan dalam kode bisa dieksploitasi oleh peretas, yang dapat menyebabkan kerugian besar. Contohnya adalah serangan DAO pada tahun 2016 yang menyebabkan kehilangan jutaan dolar karena bug dalam smart contract.
            </li>
            <li className='mt-2'>
            Regulasi dan Kepatuhan: Karena sifatnya yang otonom dan terdesentralisasi, smart contract sulit untuk diatur dalam kerangka hukum yang ada. Banyak negara masih merumuskan bagaimana mereka akan mengatur penggunaan smart contract.
            </li>
            <li className='mt-2'>
            Tidak Dapat Diubah (Immutability): Sekali kontrak diunggah, tidak ada cara untuk mengubahnya. Jika ada kesalahan dalam kode, kontrak mungkin tetap berjalan sesuai kesalahan tersebut.
            </li>
          </ul>
           </p>
           
            <h3 className="text-gray-800 text-lg dekstop:text-2xl laptop:text-2xl font-semibold mb-3 mt-3">7. Contoh Platform yang Mendukung Smart Contract</h3>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Ethereum (ETH): Platform pertama yang menyediakan fungsi smart contract dan masih menjadi platform utama untuk DApps dan DeFi.
            </li>
            <li className='mt-2'>
            Binance Smart Chain (BSC): Platform ini menawarkan smart contract yang kompatibel dengan Ethereum dengan biaya transaksi yang lebih rendah.
            </li>
            <li className='mt-2'>
            Solana (SOL): Solana adalah blockchain berkecepatan tinggi yang mendukung smart contract untuk aplikasi DeFi dan NFT.
            </li>
            <li className='mt-2'>
            Polkadot (DOT) dan Cardano (ADA): Dua platform lain yang mendukung pengembangan smart contract dengan teknologi dan keunggulan masing-masing.
            </li>
          </ul>
           </p>
           
            <h3 className="text-gray-800 text-lg dekstop:text-2xl laptop:text-2xl font-semibold mb-3 mt-3">8. Contoh Penggunaan Nyata Smart Contract</h3>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Aplikasi DeFi (Decentralized Finance) seperti Compound dan Aave memungkinkan pengguna untuk meminjam atau meminjamkan aset kripto tanpa perantara.
            </li>
            <li className='mt-2'>
            NFT Marketplace seperti OpenSea menggunakan smart contract untuk mencatat kepemilikan dan transaksi karya seni digital di blockchain.
            </li>
            <li className='mt-2'>
            Real Estate: Beberapa proyek blockchain memungkinkan pembelian properti melalui smart contract, mengotomatiskan proses transfer kepemilikan setelah pembayaran.
            </li>
            <li className='mt-2'>
            Asuransi: Beberapa perusahaan asuransi mulai bereksperimen dengan smart contract untuk mengotomatisasi klaim asuransi berdasarkan data tertentu, seperti cuaca atau data sensor.
             </li>
          </ul>
           </p>
           
            <h3 className="text-gray-800 text-lg dekstop:text-2xl laptop:text-2xl font-semibold mb-3 mt-3">9. Kesimpulan</h3>
          <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base leading-relaxed ml-6 mt-2">
          Sektor smart contract dalam cryptocurrency membawa inovasi besar dalam berbagai bidang. Dengan otomatisasi dan transparansi yang ditawarkan, smart contract mengurangi ketergantungan pada perantara, memungkinkan transaksi yang lebih cepat, aman, dan efisien. Meskipun memiliki tantangan, seperti risiko bug dan keterbatasan regulasi, smart contract tetap menjadi elemen penting dalam ekosistem blockchain dan berpotensi mengubah cara berbagai industri bekerja di masa depan.
           </p>
        </div>

        {/* User Question and Answer Section */}
        <div className="w-full bg-white p-4 dekstop:p-6 laptop:p-5 rounded-lg shadow-md mt-8">
          <h3 className="text-gray-800 text-xl dekstop:text-2xl laptop:text-2xl font-semibold mb-4">kirim pesan </h3>
          <label htmlFor="user-answer" className="text-gray-700 text-sm dekstop:text-base laptop:text-base mb-2 block">
            silahkan mengirim pertanyaan atau pendapat anda disini 
          </label>
          <textarea
            id="user-answer"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full p-3 bg-gray-100 text-gray-700 rounded-lg shadow-sm mb-4"
            placeholder=" . . . . . "
          ></textarea>
          <button
            onClick={handleSendMessage}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Kirim
          </button>
        </div>

        {/* Display Messages and Responses */}
        <div className="w-full bg-white p-4 dekstop:p-6 laptop:p-5 rounded-lg shadow-md mt-8">
          <h3 className="text-gray-800 text-xl dekstop:text-2xl laptop:text-2xl font-semibold mb-4">Respon admin </h3>
          {messages.map(({ id, message, response, repliedAt, tanggal }) => (
            <div key={id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-700 text-sm dekstop:text-base laptop:text-base"><strong>Pesan User :</strong> <span className='ml-4'> {message} </span></p>
              {tanggal && <p className="text-gray-500 text-xs mt-2">terkirim: {new Date(tanggal).toLocaleString()}</p>}
              {response ? (
                <div className="mt-2">
                  <p className="text-gray-800 text-sm dekstop:text-base laptop:text-base"><strong>Respon Admin :</strong> <span className=' ml-4'> {response} </span></p>
                  {repliedAt && <p className="text-gray-500 text-xs mt-2">membalas: {new Date(repliedAt).toLocaleString()}</p>}
                </div>
                
              ) : (
                <p className="text-gray-500 text-xs mt-4">No response from admin yet.</p>
              )}
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={handleBack}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ease-in-out"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Smartcontract;
