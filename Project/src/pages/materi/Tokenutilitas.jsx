import React, { useState, useEffect } from 'react';
import { defi, mainstream, tokenutilitas } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { db, ref, push, onValue } from '../../firebase';

const Tokenutilitas = () => {
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
        tanggal: new Date().toISOString(),
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
          <h1 className="text-black text-3xl md:text-5xl font-extrabold gradient-judul tracking-wide">TOKEN UTILITAS</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center h-auto w-full md:w-[1150px] bg-slate-100 mt-6 md:mt-12 mb-12 p-4 md:p-6 rounded-xl shadow-lg">
        <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-4 text-center">Apa itu Token Utilitas ?</h2>
        <p className="text-gray-600 text-base md:text-lg text-center mb-6 px-4">
        Sektor Token Utilitas dalam cryptocurrency merujuk pada token yang berfungsi sebagai alat untuk mengakses, menggunakan, atau berinteraksi dengan fitur-fitur dalam platform blockchain atau proyek tertentu. Berbeda dengan token yang mewakili kepemilikan atau investasi, token utilitas (utility token) didesain untuk memberi pengguna hak-hak spesifik dalam ekosistem proyek tersebut. Sektor ini sangat penting karena mendorong penggunaan platform blockchain dengan memberi nilai dan kegunaan nyata bagi penggunanya.
        </p>

        {/* Image Section */}
        <div className="w-[90%] max-w-[450px] h-[300px] md:h-[450px] rounded-lg flex items-center justify-center mb-8 overflow-hidden">
  <img src={tokenutilitas} alt="DEFI" className="w-full h-full object-contain" />
</div>


         {/* Additional Information Section */}
         <div className="flex flex-wrap justify-around w-full gap-4 mb-6">
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Akses ke Layanan atau Produk di Platform Blockchain</h3>
            <p className="text-gray-700 text-sm md:text-base">
            Token utilitas sering digunakan sebagai "kunci" untuk mengakses layanan atau fitur khusus pada platform berbasis blockchain. Misalnya, pada platform penyimpanan terdesentralisasi seperti Filecoin (FIL), pengguna perlu menggunakan token FIL untuk membayar penyimpanan data di jaringan. Dengan demikian, token utilitas berfungsi sebagai alat pembayaran internal yang memungkinkan pengguna mengakses layanan tertentu yang disediakan oleh platform tersebut.
            </p>
          </div>
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Partisipasi dalam Ekosistem atau Tata Kelola Platform</h3>
            <p className="text-gray-700 text-sm md:text-base">
            Beberapa token utilitas memberikan hak bagi pemegangnya untuk berpartisipasi dalam proses tata kelola platform. Misalnya, pada platform Uniswap (UNI), pemegang token UNI dapat memberikan suara pada proposal untuk mengembangkan atau mengubah kebijakan platform. Ini memberi pengguna peran aktif dalam pengembangan platform dan memungkinkan pengambilan keputusan yang lebih terdesentralisasi.
            </p>
          </div>
        </div>

        {/* Long Content Reading Section */}
        <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-md overflow-auto h-[300px] md:h-[400px]">
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3">1. Pengertian Token Utilitas</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Token utilitas adalah jenis token kripto yang diciptakan untuk memberi akses ke layanan atau fitur dalam suatu platform blockchain. Berbeda dengan token sekuritas, yang mewakili kepemilikan atau investasi dalam proyek, token utilitas berfungsi sebagai alat pembayaran atau hak akses ke layanan tertentu. Token ini dirancang untuk digunakan, bukan untuk disimpan sebagai aset investasi meskipun dalam praktiknya token ini juga bisa mengalami kenaikan nilai dan diperdagangkan. <br /> <br />
         <span className='font-semibold'> Contoh Sederhana:</span> Anggaplah ada platform berbasis blockchain untuk berbagi konten musik, dan platform ini mengeluarkan token utilitas yang disebut MusicToken. Pengguna perlu membeli MusicToken untuk mengakses fitur-fitur premium, seperti streaming lagu tanpa iklan atau mengunduh lagu. MusicToken ini bukan investasi dalam platform, melainkan alat yang memungkinkan pengguna berinteraksi dengan platform tersebut.
          </p>

          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">2. Karakteristik Utama Token Utilitas</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Bukan Instrumen Investasi: Token utilitas pada dasarnya tidak dimaksudkan sebagai aset investasi atau representasi saham. Pemilik token tidak memiliki hak kepemilikan atau klaim atas laba proyek.
            </li>
            <li className='mt-2'>
            Hak Akses: Token ini biasanya memberi hak kepada pemegangnya untuk mengakses atau menggunakan fitur khusus dalam platform. Misalnya, untuk menggunakan aplikasi tertentu di blockchain, pengguna perlu membayar biaya menggunakan token utilitas platform tersebut.
             </li>
            <li className='mt-2'>
            Mendorong Aktivitas dalam Ekosistem: Token utilitas mendorong pengguna untuk berpartisipasi aktif dalam ekosistem. Misalnya, token dapat diberikan kepada pengguna yang membantu menjalankan dan mengamankan jaringan.
            </li>
            <li className='mt-2'>
            Transaksi dalam Ekosistem Tertentu: Utility token umumnya digunakan dalam transaksi dalam satu ekosistem tertentu saja, yang berarti fungsinya hanya berlaku di dalam platform atau jaringan tempat token tersebut diterbitkan.
            </li>
          </ul>
           </p>

           <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">3. Contoh Penggunaan Token Utilitas di Berbagai Industri</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-4">
            a. <span className='font-semibold text-xl'> Platform DeFi (Keuangan Terdesentralisasi)</span> <br />
            Dalam ekosistem DeFi, utility token digunakan sebagai alat pembayaran untuk biaya transaksi atau akses layanan. Misalnya, Chainlink (LINK) adalah token utilitas yang digunakan untuk membayar layanan oracle, yang menyediakan data eksternal bagi kontrak pintar.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            b. <span className='font-semibold text-xl'> latform Aplikasi Terdesentralisasi (DApps)</span> <br />
            Banyak platform DApps menggunakan token utilitas untuk memberi pengguna akses ke fitur-fitur tertentu. Contohnya, Basic Attention Token (BAT) yang digunakan dalam browser Brave sebagai insentif bagi pengguna dan kreator konten. Pengguna yang menonton iklan dapat menerima BAT sebagai hadiah, yang kemudian dapat digunakan untuk memberi tip kepada kreator atau sebagai alat transaksi dalam ekosistem Brave.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            c. <span className='font-semibold text-xl'> Game dan Hiburan</span> <br />
            Dalam platform game berbasis blockchain, utility token digunakan untuk membeli item dalam game, skin karakter, atau hak akses tertentu. Contohnya adalah Axie Infinity (AXS) yang memungkinkan pengguna membeli Axies (karakter dalam game) dan barang-barang virtual lainnya.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            d. <span className='font-semibold text-xl'> Jaringan Penyimpanan Terdesentralisasi</span> <br />
            Platform penyimpanan data berbasis blockchain, seperti Filecoin (FIL) dan Storj, menggunakan token utilitas untuk membayar layanan penyimpanan atau bandwidth. Token ini memungkinkan pengguna menyimpan data di jaringan terdesentralisasi dengan aman, di mana biaya disesuaikan dengan kapasitas yang mereka gunakan.
            </p>
            
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">4. Cara Kerja Token Utilitas</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          Utility token diterbitkan melalui proses yang disebut ICO (Initial Coin Offering) atau IEO (Initial Exchange Offering). Pada saat diluncurkan, token ini dibeli oleh pengguna yang ingin berpartisipasi dalam proyek tersebut atau mengakses layanan tertentu di masa depan. Setelah proyek diluncurkan, utility token biasanya dapat diperdagangkan di bursa cryptocurrency atau digunakan di platform sesuai fungsinya.
            <br />
            <br />
            <span className='font-semibold text-xl'> Langkah-langkah pertama pengguna Token Utilitas :</span> 
          <ul className='list-decimal pl-6'>
            <li className='mt-2'>
            Pembelian: Pengguna membeli token utilitas melalui ICO atau bursa kripto.
            </li>
            <li className='mt-2'>
            Penyimpanan: Token disimpan di dompet digital yang kompatibel.
             </li>
            <li className='mt-2'>
            Penggunaan: Pemegang token dapat menggunakannya untuk mengakses layanan atau fitur khusus dalam ekosistem platform.
             </li>
            <li className='mt-2'>
            Pertukaran: Beberapa utility token juga dapat ditukar atau diperdagangkan di bursa kripto.
            </li>
          </ul>
           </p>
    
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">5. Keuntungan dari Token Utilitas</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Meningkatkan Keterlibatan Pengguna: Utility token mendorong pengguna untuk terlibat dalam platform karena adanya insentif berupa akses fitur, reward, atau diskon.
            </li>
            <li className='mt-2'>
            Ekosistem yang Mandiri: Utility token memungkinkan ekosistem yang berfungsi secara mandiri, di mana pengguna dapat bertransaksi dan berinteraksi tanpa perlu pihak ketiga.
            </li>
            <li className='mt-2'>
            Transparansi dan Otomatisasi: Dengan menggunakan smart contract, utility token dapat diprogram untuk memberikan akses otomatis atau reward kepada pengguna berdasarkan aturan tertentu.
            </li>
            <li className='mt-2'>
            Potensi Pertumbuhan Nilai: Meskipun bukan tujuan utama, beberapa utility token mengalami peningkatan nilai seiring dengan pertumbuhan platform dan permintaan pengguna yang lebih tinggi.
            </li>
          </ul>
           </p>
    
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">6. Tantangan dalam penggunaan Token Utilitas</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Fluktuasi Harga: Karena beberapa utility token diperdagangkan di bursa, nilai token dapat berfluktuasi, yang membuat biaya layanan di platform menjadi tidak stabil.
             </li>
            <li className='mt-2'>
            Regulasi: Sebagian token utilitas terkadang menghadapi tantangan regulasi, terutama jika dianggap menyerupai instrumen keuangan yang harus tunduk pada peraturan tertentu.
            </li>
            <li className='mt-2'>
            Risiko Keamanan: Keamanan token utilitas sangat bergantung pada blockchain yang mendasarinya. Jika ada bug atau kerentanan, hal ini bisa memengaruhi seluruh ekosistem.
            </li>
          </ul>
           </p>
    
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">7. Contoh Platform yang Mendukung Token Utilitas</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Ethereum (ETH): Meski awalnya lebih berfungsi sebagai mata uang, Ether juga berfungsi sebagai utility token untuk biaya transaksi di jaringan Ethereum.
            </li>
            <li className='mt-2'>
            Uniswap (UNI): UNI digunakan dalam tata kelola platform dan juga sebagai token untuk membayar biaya tertentu dalam platform.
            </li>
            <li className='mt-2'>
            Filecoin (FIL): Digunakan untuk membayar penyimpanan data di jaringan Filecoin.
            </li>
            <li className='mt-2'>
            Chainlink (LINK): Digunakan untuk membayar layanan oracle yang disediakan Chainlink kepada kontrak pintar.
            </li>
          </ul>
           </p>
    
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">8. Contoh Penggunaan Nyata Token Utilitas</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Basic Attention Token (BAT): Digunakan di dalam browser Brave, di mana pengguna bisa mendapatkan BAT dengan menonton iklan dan memberi tip kepada pembuat konten.
             </li>
            <li className='mt-2'>
            Axie Infinity (AXS dan SLP): AXS digunakan untuk mengelola tata kelola game, sedangkan Smooth Love Potion (SLP) digunakan untuk melakukan berbagai aktivitas dalam game, seperti membiakkan karakter.
            </li>
            <li className='mt-2'>
            Golem (GNT): Digunakan untuk mengakses daya komputasi di jaringan Golem, yang memungkinkan pengguna meminjamkan kapasitas komputasi mereka.
            </li>
          </ul>
           </p>
    
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">9. Kesimpulan</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
          Sektor token utilitas dalam cryptocurrency membuka berbagai peluang untuk menciptakan ekosistem terdesentralisasi yang aktif dan produktif. Token utilitas memberi pengguna cara untuk berinteraksi dengan platform dan mendapatkan manfaat langsung dari fitur yang disediakan, menciptakan nilai tambah di dalam jaringan. Meski ada tantangan regulasi dan volatilitas harga, token utilitas tetap memainkan peran penting dalam inovasi berbasis blockchain dan menghubungkan berbagai sektor mulai dari keuangan hingga hiburan.
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

export default Tokenutilitas;
