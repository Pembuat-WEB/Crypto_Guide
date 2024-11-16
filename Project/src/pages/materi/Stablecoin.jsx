import React, { useState, useEffect } from 'react';
import { defi, mainstream, stableCoin } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { db, ref, push, onValue } from '../../firebase';

const Stablecoin = () => {
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
        tanggal :new Date().toISOString(),
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
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900 flex flex-col items-center justify-center p-4 md:p-8">
      {/* Title Section */}
      <div className="flex justify-center items-center h-[15vh]">
        <div className="h-[80px] w-[90%] md:w-[500px] bg-slate-50 text-center rounded-2xl shadow-xl border-2 border-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-indigo-500/50 transform hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-black text-3xl md:text-5xl font-extrabold gradient-judul tracking-wide">STABLECOIN</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center h-auto w-full md:w-[1150px] bg-slate-100 mt-6 md:mt-12 mb-12 p-4 md:p-6 rounded-xl shadow-lg">
        <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-4 text-center">Apa itu Stablecoin ?</h2>
        <p className="text-gray-600 text-base md:text-lg text-center mb-6 px-4">
        Sektor Stablecoin dalam Cryptocurrency adalah bagian dari ekosistem cryptocurrency yang berfokus pada penciptaan dan penggunaan aset digital yang memiliki nilai yang relatif stabil. Stablecoin dirancang untuk mengatasi masalah volatilitas yang sering kali terjadi pada cryptocurrency seperti Bitcoin, yang harga pasar dapat berfluktuasi sangat tajam dalam waktu singkat. Stablecoin memiliki mekanisme untuk menjaga nilai yang konsisten, sehingga lebih cocok untuk digunakan sebagai alat tukar, penyimpanan nilai, atau bahkan sebagai instrumen investasi dalam ekosistem blockchain.
        </p>

        {/* Image Section */}
        <div className="w-[90%] max-w-[450px] h-[300px] md:h-[450px] rounded-lg flex items-center justify-center mb-8 overflow-hidden">
          <img src={stableCoin} alt="DEFI" className="w-full h-full object-contain" />
        </div>

         {/* Additional Information Section */}
         <div className="flex flex-wrap justify-around w-full gap-4 mb-6">
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Alat Tukar Stabil untuk Transaksi Harian</h3>
            <p className="text-gray-700 text-sm md:text-base">
            Stablecoin dirancang dengan nilai yang stabil, biasanya dipatok ke mata uang seperti dolar AS. Ini membuat stablecoin cocok digunakan untuk transaksi harian tanpa risiko fluktuasi harga yang tinggi seperti pada cryptocurrency lain. Orang bisa menggunakan stablecoin untuk membeli barang atau jasa secara online dan di berbagai platform yang mendukung pembayaran dengan aset digital.
             </p>
          </div>
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Menyimpan Nilai dan Mengurangi Risiko Volatilitas</h3>
            <p className="text-gray-700 text-sm md:text-base">
            Stablecoin berfungsi sebagai penyimpan nilai yang aman di ekosistem cryptocurrency. Ketika pasar cryptocurrency sangat fluktuatif, investor dapat mengonversi aset mereka ke stablecoin untuk menghindari kerugian besar, sambil tetap berada dalam lingkungan aset digital. Stablecoin memungkinkan pengguna untuk menyimpan aset secara stabil tanpa harus menarik dana mereka ke mata uang tradisional.
            </p>
          </div>
        </div>

        {/* Long Content Reading Section */}
        <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-md overflow-auto h-[300px] md:h-[400px]">
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3">1. Pengertian Stablecoin</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Stablecoin adalah jenis cryptocurrency yang nilai tukarnya dipatok atau "terikat" pada aset atau sekumpulan aset lain, seperti mata uang fiat (misalnya, dolar AS, euro), komoditas (misalnya, emas), atau bahkan nilai algoritmik yang dikendalikan oleh kode dan sistem pasar. Tujuan utama dari stablecoin adalah untuk mengurangi volatilitas harga yang tinggi yang sering terjadi pada cryptocurrency lainnya seperti Bitcoin atau Ethereum.
          <ul className='list-disc  pl-6'>
            <li className='mt-2'>
            Tether (USDT): Dipatok 1:1 dengan dolar AS.
            </li>
            <li className='mt-2'>
            USD Coin (USDC): Stablecoin lain yang juga dipatok dengan dolar AS dan digunakan secara luas dalam transaksi digital.
            </li>
            <li className='mt-2'>
            Dai (DAI): Stablecoin yang dijamin oleh aset kripto dan dikelola oleh protokol DeFi (Decentralized Finance) seperti MakerDAO.
            </li>
          </ul>
          </p>

          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">2. Jenis jenis Stablecoin</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          ada 3 kategori utama Stablecoin yang digunakan dalam cryptocurrency : 
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-3">
          a.<span className='text-xl font-semibold'> Fiat-Collateralized Stablecoins (Dijamin dengan Fiat)</span> <br />
          Stablecoin jenis ini dijamin oleh cadangan mata uang fiat yang disimpan dalam bank atau lembaga keuangan terpercaya. Setiap unit stablecoin yang diterbitkan memiliki cadangan dalam bentuk uang fiat, sehingga nilai stablecoin tetap stabil dan setara dengan nilai mata uang fiat yang mendasarinya (misalnya, 1 stablecoin = 1 USD). <br />
          Contoh : 
          <ul className='list-disc  pl-6'>
            <li className='mt-2'>
            Tether (USDT): Merupakan salah satu stablecoin yang paling populer, di mana satu USDT setara dengan satu dolar AS, dan cadangan uang fiat disimpan untuk memastikan nilai tersebut.
            </li>
            <li className='mt-2'>
            USD Coin (USDC): Sama seperti Tether, USDC dipatok dengan dolar AS dan diterbitkan oleh perusahaan Circle. USDC memiliki audit reguler untuk memastikan cadangannya terjaga dengan baik.
            </li>
          </ul>
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-3">
          b.<span className='text-xl font-semibold'>  Crypto-Collateralized Stablecoins (Dijamin dengan Cryptocurrency)</span> <br />
          Stablecoin ini didukung oleh aset kripto lain seperti Bitcoin atau Ethereum, tetapi dengan sistem yang lebih rumit untuk memastikan nilai tetap stabil. Biasanya, lebih banyak aset kripto disimpan sebagai cadangan untuk mengimbangi volatilitas yang terjadi pada nilai cryptocurrency yang mendasarinya. Protokol ini sering menggunakan sistem smart contract untuk menjaga nilai stabil. <br />
          Contoh :
          <ul className='list-disc  pl-6'>
            <li className='mt-2'>
            Dai (DAI): DAI adalah stablecoin yang dikelola oleh protokol MakerDAO. DAI dipatok dengan dolar AS dan dijamin dengan aset Ethereum serta cryptocurrency lainnya. Ketika nilai Ethereum atau aset yang dijaminkan turun, sistem MakerDAO secara otomatis akan menambah jumlah cadangan untuk menjaga nilai stabil DAI.
            </li>
          </ul>
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-3">
          c.<span className='text-xl font-semibold'> Algorithmic Stablecoins (Stablecoin Algoritmik)</span> <br />
          Stablecoin jenis ini tidak dijamin oleh fiat atau cryptocurrency lain, melainkan mengandalkan algoritma untuk mengatur pasokan dan permintaan stablecoin tersebut. Jika nilai stablecoin ini mulai naik atau turun, algoritma akan menyesuaikan jumlah pasokan stablecoin yang beredar untuk menstabilkan harga. Keuntungan dari stablecoin algoritmik adalah mereka tidak memerlukan cadangan fisik atau aset lainnya, tetapi mereka juga lebih berisiko jika algoritma gagal. <br />
          Contoh :
          <ul className='list-disc  pl-6'>
            <li className='mt-2'>
            Terra (LUNA): Dulu Terra menggunakan model algoritmik yang menciptakan stablecoin bernama UST (TerraUSD), yang dijaga nilainya terhadap dolar AS melalui algoritma pasokan yang otomatis. Namun, sistem ini mengalami kegagalan besar pada tahun 2022 ketika algoritma tidak dapat menjaga nilai UST, menyebabkan kejatuhan besar di pasar.</li>
          </ul>
          </p>
          
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">3. Manfaat dan Kegunaan Stablecoin</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-4">
            a. <span className='font-semibold text-xl'>Stabilitas Harga</span> <br />
            Salah satu alasan utama stablecoin diciptakan adalah untuk memberikan stabilitas harga dalam dunia cryptocurrency. Harga Bitcoin atau Ethereum sering kali berfluktuasi tajam, membuatnya sulit untuk digunakan dalam transaksi sehari-hari. Stablecoin, dengan nilai yang lebih stabil, memungkinkan orang untuk melakukan transaksi tanpa khawatir nilai aset mereka akan berubah secara drastis.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            b. <span className='font-semibold text-xl'>Alat Pembayaran yang Efisien</span> <br />
            Stablecoin dapat digunakan sebagai alat pembayaran digital untuk pembelian barang dan jasa, mirip dengan mata uang fiat. Karena nilai stablecoin lebih stabil, penggunaannya lebih praktis untuk transaksi komersial atau pembayaran internasional, menghindari biaya konversi atau fluktuasi harga yang tinggi.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            c. <span className='font-semibold text-xl'>Penyimpanan nilai</span> <br />
            Stablecoin menawarkan cara yang lebih aman untuk menyimpan nilai dalam dunia cryptocurrency tanpa harus beralih ke mata uang fiat. Misalnya, pengguna dapat mengonversi aset kripto yang lebih volatil ke dalam stablecoin untuk melindungi nilai mereka dari fluktuasi harga.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            d. <span className='font-semibold text-xl'>Mengurangi Biaya Transaksi Internasional</span> <br />
            Transaksi internasional menggunakan stablecoin dapat lebih cepat dan lebih murah dibandingkan dengan sistem pembayaran tradisional yang melibatkan bank atau layanan pengiriman uang. Dengan stablecoin, pengguna dapat menghindari biaya konversi mata uang dan biaya transaksi internasional lainnya yang biasanya dikenakan oleh bank.
           </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">4. Penggunaan Stablecoin dalam Ekosistem DeFi</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          Salah satu penggunaan paling signifikan dari stablecoin adalah dalam DeFi (Decentralized Finance). Dalam DeFi, stablecoin digunakan untuk memberikan likuiditas, meminjamkan aset, dan melakukan berbagai aktivitas keuangan tanpa perantara tradisional. Pengguna dapat mendapatkan bunga dari stablecoin yang mereka simpan dalam protokol DeFi, atau meminjam stablecoin sebagai bagian dari strategi investasi atau trading. <br /> <br />
            Contoh DeFi yang menggunakan stablecoin adalah Compound dan Aave, dua platform pinjaman yang memungkinkan pengguna meminjam atau meminjamkan stablecoin dengan bunga yang kompetitif.
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">5. Risiko dan Tantangan pada Stablecoin</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          Meskipun stablecoin menawarkan banyak keuntungan, ada beberapa tantangan dan risiko yang perlu diperhatikan:
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Risiko Regulasi: Pemerintah dan lembaga regulasi di berbagai negara dapat memberlakukan peraturan yang ketat terhadap stablecoin. Peraturan ini bisa mencakup audit cadangan, pencatatan transaksi, atau pembatasan penggunaan stablecoin dalam ekonomi digital.
            </li>
            <li className='mt-2'>
              Keterbatasan pada Cadangan: Untuk stablecoin yang dijamin oleh fiat, ada risiko bahwa cadangan yang disimpan tidak cukup atau tidak transparan. Hal ini dapat mempengaruhi stabilitas harga stablecoin jika terjadi masalah dengan cadangan tersebut.
            </li>
            <li className='mt-2'>
            Risiko Sistem Algoritmik: Untuk stablecoin yang bergantung pada algoritma, ada potensi kegagalan dalam menjaga nilai stabil jika algoritma atau model pasar tidak berfungsi dengan baik, seperti yang terjadi pada Terra (LUNA) dan UST.
            </li>
          </ul>
           </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">6. Kesimpulan</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          Stablecoin adalah elemen penting dalam dunia cryptocurrency karena mereka menyediakan solusi untuk masalah volatilitas yang sering dialami oleh cryptocurrency lainnya. Dengan nilai yang stabil, stablecoin memudahkan transaksi digital, investasi, dan aplikasi dalam dunia keuangan terdesentralisasi (DeFi). Meskipun ada beberapa risiko terkait dengan regulasi dan ketergantungan pada cadangan, stablecoin tetap menjadi alat yang sangat berguna untuk mendorong adopsi lebih luas dari teknologi blockchain dan cryptocurrency.
          </p>
        </div>

       {/* User Question and Answer Section */}
       <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-md mt-8">
          <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-4">kirim pesan </h3>
          <label htmlFor="user-answer" className="text-gray-700 text-sm md:text-base mb-2 block">
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
        <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-md mt-8">
          <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-4">Respon admin </h3>
          {messages.map(({ id, message, response, repliedAt, tanggal }) => (
            <div key={id} className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <p className="text-gray-700 text-sm md:text-base"><strong>Pesan User :</strong> <span className='ml-4'> {message} </span></p>
              {tanggal && <p className="text-gray-500 text-xs mt-2">terkirim: {new Date(tanggal).toLocaleString()}</p>}
              {response ? (
                <div className="mt-2">
                  <p className="text-gray-800 text-sm md:text-base"><strong>Respon Admin :</strong> <span className=' ml-4'> {response} </span></p>
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

export default Stablecoin;
