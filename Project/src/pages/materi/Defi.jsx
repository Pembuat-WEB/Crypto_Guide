import React, { useState, useEffect } from 'react';
import { defi } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { db, ref, push, onValue } from '../../firebase';

const Defi = () => {
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
    <div className="min-h-screen w-full bg-gradient-to-r from-gray-900 via-purple-800 to-indigo-900 flex flex-col items-center justify-center p-4 md:p-8">
      {/* Title Section */}
      <div className="flex justify-center items-center h-[15vh]">
        <div className="h-[80px] w-[90%] md:w-[500px] bg-slate-50 text-center rounded-2xl shadow-xl border-2 border-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-indigo-500/50 transform hover:scale-105 transition duration-300 ease-in-out">
          <h1 className="text-black text-3xl md:text-5xl font-extrabold gradient-judul tracking-wide">DeFi</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center h-auto w-full md:w-[1150px] bg-slate-100 mt-6 md:mt-12 mb-12 p-4 md:p-6 rounded-xl shadow-lg">
        <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-4 text-center">Apa itu DeFi ?</h2>
        <p className="text-gray-600 text-base md:text-lg text-center mb-6 px-4">
        Sektor DeFi (Decentralized Finance) atau Keuangan Terdesentralisasi pada cryptocurrency adalah ekosistem yang memungkinkan layanan keuangan dilakukan secara langsung antara pengguna tanpa perlu perantara seperti bank, perusahaan investasi, atau lembaga keuangan lainnya. DeFi memanfaatkan teknologi blockchain dan smart contract untuk menyediakan berbagai layanan keuangan, seperti peminjaman, perdagangan, investasi, dan asuransi, secara lebih cepat, transparan, dan terdesentralisasi. DeFi menggunakan protokol dan aplikasi berbasis blockchain (terutama Ethereum) yang dirancang untuk menggantikan layanan keuangan tradisional dengan sistem yang sepenuhnya otomatis dan berbasis kode.
        </p>

        {/* Image Section */}
        <div className="w-[90%] max-w-[450px] h-[300px] md:h-[450px] rounded-lg flex items-center justify-center mb-8 overflow-hidden">
          <img src={defi} alt="DEFI" className="w-full h-full object-contain" />
        </div>

         {/* Additional Information Section */}
         <div className="flex flex-wrap justify-around w-full gap-4 mb-6">
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Peminjaman dan Pinjaman (Lending and Borrowing)</h3>
            <p className="text-gray-700 text-sm md:text-base">
            DeFi memungkinkan pengguna untuk meminjamkan atau meminjam aset kripto secara langsung tanpa perantara seperti bank. Platform seperti Compound dan Aave memungkinkan pengguna untuk menyetor kripto mereka ke dalam smart contract dan memperoleh bunga. Di sisi lain, pengguna yang ingin meminjam dapat mengakses dana dengan memberikan aset kripto sebagai jaminan. Ini menghilangkan kebutuhan akan lembaga keuangan tradisional dan memungkinkan transaksi yang lebih cepat dan biaya yang lebih rendah.
             </p>
          </div>
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Pertukaran Terdesentralisasi (Decentralized Exchange atau DEX)</h3>
            <p className="text-gray-700 text-sm md:text-base">
            DeFi memungkinkan pengguna untuk menukar satu cryptocurrency dengan yang lain tanpa melalui bursa terpusat (centralized exchange). Platform seperti Uniswap dan SushiSwap memungkinkan perdagangan peer-to-peer yang dijalankan oleh smart contract. Ini memberikan pengguna lebih banyak kendali atas dana mereka, meningkatkan privasi, dan mengurangi risiko peretasan yang sering terjadi pada bursa terpusat.
             </p>
          </div>
        </div>

        {/* Long Content Reading Section */}
        <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-md overflow-auto h-[300px] md:h-[400px]">
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3">1. Pengertian DeFi dalam Cryptocurrency</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          DeFi adalah singkatan dari Decentralized Finance, yang berarti keuangan terdesentralisasi. Dalam sektor keuangan tradisional, semua layanan dikendalikan oleh institusi terpusat yang memiliki otoritas penuh atas keputusan keuangan. Namun, dalam DeFi, layanan keuangan dijalankan oleh smart contract di blockchain, yang menghilangkan kebutuhan akan perantara. Dengan kata lain, semua transaksi di DeFi dijalankan oleh kode komputer yang otomatis dan tidak memerlukan campur tangan pihak ketiga.
          <br />
          <br />
          Contoh sederhana DeFi adalah ketika seseorang ingin meminjam uang tanpa bank sebagai perantara. Di ekosistem DeFi, pengguna bisa mendapatkan pinjaman dengan menyimpan aset kripto sebagai jaminan dalam smart contract. Proses ini berlangsung sepenuhnya secara otomatis berdasarkan aturan yang telah ditentukan dalam kode, tanpa intervensi manusia.
          </p>
          
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">2. Karakteristik Utama DeFi</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Desentralisasi: DeFi beroperasi di atas jaringan blockchain yang terdesentralisasi, yang berarti tidak ada entitas tunggal yang mengendalikan jaringan atau mengawasi proses transaksi.
             </li>
            <li className='mt-2'>
            Transparansi: Semua transaksi di DeFi terekam di blockchain, yang dapat dilihat oleh siapa pun. Ini membuat proses menjadi transparan dan sulit dimanipulasi.
            </li>
            <li className='mt-2'>
            Smart Contract: Layanan DeFi umumnya berjalan melalui smart contract, yaitu kontrak yang dieksekusi secara otomatis berdasarkan kode yang telah diprogram. Ini menghilangkan kebutuhan akan kepercayaan terhadap pihak ketiga.
             </li>
            <li className='mt-2'>
            Aksesibilitas Global: DeFi memungkinkan siapa saja yang memiliki koneksi internet dan dompet kripto untuk berpartisipasi tanpa batasan geografis atau persyaratan perbankan tradisional.
             </li>
            <li className='mt-2'>
            Interoperabilitas: Banyak protokol dan aplikasi DeFi dirancang untuk bisa saling berinteraksi, sehingga pengguna bisa menghubungkan berbagai layanan dengan mudah.
            </li>
          </ul>
           </p>

           <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">3. Jenis Layanan DeFi</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-4">
          Sektor DeFi mencakup berbagai layanan keuangan yang biasanya disediakan oleh lembaga keuangan tradisional. Berikut adalah beberapa layanan utama dalam DeFi:
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-4">
            a. <span className='font-semibold text-xl'> Peminjaman dan Pinjaman (Lending and Borrowing)</span> <br />
            Pengguna dapat meminjam atau meminjamkan aset kripto melalui platform DeFi seperti Aave dan Compound. Pengguna yang meminjamkan aset mereka menerima bunga, sedangkan pengguna yang meminjam dapat memperoleh dana dengan memberikan aset kripto sebagai jaminan. Proses ini sepenuhnya otomatis melalui smart contract yang menangani pencairan, jaminan, dan suku bunga berdasarkan permintaan pasar.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            b. <span className='font-semibold text-xl'> Pertukaran Terdesentralisasi (DEX)</span> <br />
            Pertukaran Terdesentralisasi seperti Uniswap, SushiSwap, dan PancakeSwap memungkinkan pengguna untuk menukar cryptocurrency secara langsung antara satu sama lain tanpa perantara. Transaksi dilakukan secara peer-to-peer menggunakan smart contract yang menjalankan perdagangan secara otomatis dan transparan.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            c. <span className='font-semibold text-xl'> Stablecoin</span> <br />
            Stablecoin adalah cryptocurrency yang nilainya dipatok ke mata uang fiat atau aset lainnya. Stablecoin dalam DeFi, seperti DAI yang dikelola oleh MakerDAO, memungkinkan pengguna untuk menyimpan dan meminjam dengan nilai yang stabil, yang sangat berguna di pasar kripto yang volatile.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            d. <span className='font-semibold text-xl'> Perdagangan Derivatif dan Prediksi Pasar</span> <br />
            DeFi juga memungkinkan perdagangan derivatif dan pasar prediksi tanpa perantara. Platform seperti Synthetix memungkinkan pengguna membuat dan memperdagangkan aset sintetik yang merepresentasikan harga aset dunia nyata seperti saham atau komoditas. Sementara itu, pasar prediksi seperti Augur memungkinkan pengguna untuk bertaruh pada hasil dari berbagai peristiwa, dengan pembayaran otomatis berdasarkan hasil yang aktual.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            e. <span className='font-semibold text-xl'> Manajemen Aset dan Yield Farming</span> <br />
            Manajemen aset dan yield farming (atau "liquidity mining") adalah cara di mana pengguna dapat memaksimalkan keuntungan dari aset mereka di DeFi. Platform seperti Yearn.Finance mengelola aset pengguna dengan cara menempatkannya di berbagai protokol untuk mendapatkan bunga atau reward. Yield farming sering melibatkan penguncian aset dalam protokol untuk menerima reward dalam bentuk token tambahan.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            f. <span className='font-semibold text-xl'>  Asuransi Terdesentralisasi</span> <br />
            Beberapa platform DeFi seperti Nexus Mutual menawarkan asuransi berbasis smart contract, yang memberikan perlindungan kepada pengguna dari risiko tertentu seperti kerugian akibat bug dalam kode smart contract atau serangan peretasan.
            </p>

          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">4. Cara Kerja DeFi</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          DeFi bekerja dengan memanfaatkan smart contract yang berjalan di jaringan blockchain (umumnya Ethereum). Smart contract adalah program yang dieksekusi otomatis saat kondisi tertentu terpenuhi. Proses ini dilakukan tanpa perantara, yang berarti seluruh proses dikelola oleh kode, mulai dari verifikasi, pengelolaan, hingga eksekusi transaksi. <br /> <br />
          Misalnya, pada platform pinjam-meminjam:
          <ul className='list-decimal pl-6'>
            <li className='mt-2'>
            Pengguna yang ingin meminjamkan aset kripto menyimpan dana mereka dalam smart contract DeFi.
            </li>
            <li className='mt-2'>
            Pengguna yang ingin meminjam bisa mengajukan pinjaman dengan memberikan aset kripto sebagai jaminan.
            </li>
            <li className='mt-2'>
            Smart contract secara otomatis menetapkan bunga dan jumlah pinjaman, serta melindungi aset jaminan dari fluktuasi harga.
            </li>
            <li className='mt-2'>
            Jika peminjam gagal membayar, smart contract dapat otomatis mengeksekusi jaminan, menjualnya untuk mengembalikan dana pinjaman.
            </li>
          </ul>
           </p>
         
           <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">5. Keuntungan DeFi</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Penghapusan Perantara: DeFi memungkinkan transaksi langsung antara pengguna tanpa bank atau lembaga keuangan, yang mengurangi biaya dan waktu yang diperlukan.
            </li>
            <li className='mt-2'>
            Transparansi Tinggi: Semua transaksi dicatat di blockchain dan bisa diaudit oleh siapa saja, membuat transaksi lebih aman dan transparan.
             </li>
            <li className='mt-2'>
            Akses Tanpa Batas: DeFi memberikan kesempatan kepada orang-orang yang tidak memiliki akses ke layanan perbankan untuk mendapatkan layanan keuangan hanya dengan dompet digital.
            </li>
            <li className='mt-2'>
            Kecepatan dan Efisiensi: Karena berbasis kode dan blockchain, transaksi di DeFi berlangsung lebih cepat dibandingkan proses di lembaga keuangan tradisional.
            </li>
            <li className='mt-2'>
            Inovasi Produk Keuangan: Sektor DeFi mendorong munculnya berbagai inovasi seperti yield farming, staking, dan liquidity pools, yang memberikan pengguna kesempatan untuk mendapatkan keuntungan dari aset kripto mereka.
            </li>
          </ul>
           </p>
         
           <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">6. Risiko dalam DeFi</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          Meskipun DeFi menawarkan banyak keuntungan, ada juga sejumlah risiko yang perlu dipertimbangkan:
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Risiko Smart Contract: Jika ada bug atau kerentanan dalam smart contract, dana pengguna bisa terancam hilang akibat peretasan atau kesalahan sistem.
            </li>
            <li className='mt-2'>
            Volatilitas Harga: Aset kripto umumnya sangat volatil, sehingga risiko pasar bisa menjadi ancaman besar bagi pengguna yang tidak berhati-hati.
             </li>
            <li className='mt-2'>
            Tidak Ada Otoritas Pengawas: Karena tidak ada otoritas terpusat, kehilangan dana dalam DeFi sulit dipulihkan, dan pengguna bertanggung jawab penuh atas keamanan aset mereka.
            </li>
            <li className='mt-2'>
            Risiko Likuiditas: Beberapa platform DeFi memiliki likuiditas yang rendah, yang bisa menyebabkan kesulitan saat pengguna ingin menarik aset atau menjualnya.
            </li>
          </ul>
           </p>
          
           <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">7.  Contoh Platform DeFi Populer</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Compound: Platform peminjaman dan pinjaman aset kripto yang memungkinkan pengguna memperoleh bunga dari aset yang disimpan.
             </li>
            <li className='mt-2'>
            Uniswap: Pertukaran terdesentralisasi yang menggunakan liquidity pools untuk memfasilitasi perdagangan antar pengguna tanpa perantara.
            </li>
            <li className='mt-2'>
            Aave: Platform pinjaman DeFi yang menawarkan layanan seperti pinjaman tanpa jaminan dan flash loans.
            </li>
            <li className='mt-2'>
            MakerDAO: Platform yang mengelola stablecoin DAI, yang nilainya dipatok terhadap dolar AS dan didukung oleh jaminan dalam bentuk aset kripto.
             </li>
          </ul>
           </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">8. Kesimpulan</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          DeFi adalah sektor yang merevolusi industri keuangan dengan menawarkan layanan keuangan yang terbuka, terdesentralisasi, dan dapat diakses oleh siapa saja. Dengan memanfaatkan teknologi blockchain dan smart contract, DeFi menghadirkan solusi baru bagi masalah keuangan tradisional, seperti biaya tinggi, waktu pemrosesan yang lama, dan batasan akses. Meskipun sektor ini masih baru dan memiliki beberapa risiko, DeFi terus berkembang dan menawarkan berbagai layanan mulai dari pinjam-meminjam, pertukaran, hingga asuransi terdesentralisasi.
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

export default Defi;
