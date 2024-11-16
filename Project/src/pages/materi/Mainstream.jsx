import React, { useState, useEffect } from 'react';
import { defi, mainstream } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { db, ref, push, onValue } from '../../firebase';

const Mainstream = () => {
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
          <h1 className="text-black text-3xl md:text-5xl font-extrabold gradient-judul tracking-wide">MAINSTREAM</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center h-auto w-full md:w-[1150px] bg-slate-100 mt-6 md:mt-12 mb-12 p-4 md:p-6 rounded-xl shadow-lg">
        <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-4 text-center">Apa itu Mainstream ?</h2>
        <p className="text-gray-600 text-base md:text-lg text-center mb-6 px-4">
        Berikut ini adalah penjelasan tentang sektor cryptocurrency mainstream mencakup berbagai aspek yang mempengaruhi bagaimana cryptocurrency diterima, digunakan, dan diintegrasikan dalam ekonomi global.
        </p>

        {/* Image Section */}
        <div className="w-[90%] max-w-[450px] h-[300px] md:h-[450px] rounded-lg flex items-center justify-center mb-8 overflow-hidden">
          <img src={mainstream} alt="DEFI" className="w-full h-full object-contain" />
        </div>

         {/* Additional Information Section */}
         <div className="flex flex-wrap justify-around w-full gap-4 mb-6">
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Investasi Aset Digital</h3>
            <p className="text-gray-700 text-sm md:text-base">
            Cryptocurrency menawarkan kesempatan baru untuk investasi, mirip seperti emas atau saham. Karena semakin banyak perusahaan besar dan lembaga keuangan yang berinvestasi di cryptocurrency, masyarakat umum juga dapat menggunakannya sebagai cara untuk diversifikasi investasi. Hal ini memungkinkan orang untuk membeli aset digital seperti Bitcoin dan Ethereum sebagai bagian dari portofolio investasi mereka.
            </p>
          </div>
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Pembayaran Digital yang Lebih Mudah dan Cepat</h3>
            <p className="text-gray-700 text-sm md:text-base">
            Cryptocurrency semakin sering diterima sebagai alat pembayaran, baik oleh perusahaan besar seperti PayPal maupun beberapa toko online. Dengan adanya cryptocurrency, transaksi bisa dilakukan lebih cepat dan dengan biaya yang lebih rendah, terutama dalam transaksi lintas negara yang biasanya mahal dan lambat.
            </p>
          </div>
        </div>

        {/* Long Content Reading Section */}
        <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-md overflow-auto h-[300px] md:h-[400px]">
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3">1. Bank dan Lembaga Keuangan Mulai Menggunakan Cryptocurrency</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Dulu, cryptocurrency dianggap mengancam bank karena sistemnya tidak membutuhkan perantara seperti bank. Namun, sekarang bank besar mulai menggunakan teknologi cryptocurrency (blockchain) untuk memberikan layanan baru. Beberapa bank bahkan menawarkan produk investasi berbasis kripto, seperti Bitcoin, kepada nasabah mereka. Ini berarti, orang bisa membeli dan menyimpan cryptocurrency melalui layanan bank, yang membantu cryptocurrency semakin dipercaya oleh masyarakat.
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">2. Minat Investasi dari Individu dan Perusahaan</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Cryptocurrency sudah menarik perhatian banyak investor, baik dari perusahaan besar maupun individu. Orang-orang mulai membeli cryptocurrency sebagai aset investasi, seperti membeli emas atau saham. Beberapa perusahaan besar bahkan membeli Bitcoin sebagai cadangan aset mereka, misalnya Tesla dan MicroStrategy. Hal ini membuat cryptocurrency menjadi lebih dikenal dan dianggap serius sebagai aset investasi.</p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">3. Perusahaan Besar Mulai Menerima dan Mendukung Cryptocurrency</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Perusahaan seperti PayPal, Visa, dan Mastercard sudah mulai mendukung transaksi cryptocurrency. PayPal, misalnya, memungkinkan penggunanya untuk membeli, menjual, dan menyimpan cryptocurrency di akun mereka. Visa dan Mastercard juga mulai mendukung kartu yang memungkinkan orang menggunakan cryptocurrency untuk pembayaran. Dengan dukungan perusahaan besar ini, cryptocurrency menjadi lebih mudah diakses dan lebih diterima dalam transaksi sehari-hari.
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">4. Cryptocurrency untuk Belanja Online (E-commerce)</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Saat ini, beberapa toko online sudah menerima cryptocurrency sebagai metode pembayaran. Misalnya, Overstock, sebuah toko online di Amerika Serikat, menerima Bitcoin sebagai alat pembayaran. Kemudahan ini membuat cryptocurrency menjadi lebih berguna dan semakin dikenal sebagai alat tukar yang nyata dalam kehidupan sehari-hari.
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">5. Dukungan Regulasi dan Aturan Pemerintah</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Agar cryptocurrency lebih aman dan dapat dipercaya, banyak pemerintah mulai membuat aturan tentang cara cryptocurrency harus digunakan. Regulasi ini dibuat untuk melindungi konsumen, mencegah penipuan, dan memastikan transaksi aman. Contohnya, beberapa negara di Eropa dan Amerika mulai merancang peraturan agar cryptocurrency bisa digunakan secara legal dan aman. Ada juga negara seperti El Salvador yang sudah mengakui Bitcoin sebagai alat pembayaran resmi, yang membantu cryptocurrency terlihat lebih sah di mata dunia.
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">6. Blockchain Digunakan di Banyak Bidang</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Teknologi blockchain yang menjadi dasar cryptocurrency juga bermanfaat di berbagai bidang lain, seperti pelacakan produk di supply chain, mencatat data kesehatan, dan sistem keuangan. Teknologi ini memungkinkan semua transaksi tercatat dengan aman dan transparan. Penerapan blockchain di berbagai industri membuat teknologi ini semakin dipercaya dan menunjukkan bahwa blockchain memiliki nilai lebih luas selain untuk cryptocurrency. </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">7. Keamanan untuk Menyimpan Aset Kripto</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Menyimpan cryptocurrency dengan aman adalah hal yang sangat penting. Karena itu, banyak layanan yang menyediakan tempat penyimpanan aset kripto dengan tingkat keamanan tinggi. Layanan ini membantu pengguna menyimpan aset mereka dengan aman dan memberikan rasa percaya bahwa cryptocurrency bisa dilindungi dari pencurian atau peretasan.
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">8. Edukasi dan Kesadaran Masyarakat yang Meningkat</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Karena cryptocurrency dan blockchain adalah konsep baru, banyak orang belum memahaminya dengan baik. Oleh karena itu, edukasi sangat penting untuk meningkatkan pemahaman masyarakat. Sekarang, ada banyak informasi dan kursus yang dapat membantu orang belajar tentang cryptocurrency, dari dasar hingga tingkat lanjutan. Dengan lebih banyak orang yang memahami cryptocurrency, potensi penggunaannya bisa semakin meluas.
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">9. NFT dan Karya Digital</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          NFT (Non-Fungible Token) adalah bentuk baru dari aset digital yang memungkinkan orang memiliki karya seni, musik, atau item digital lainnya yang unik. NFT menjadi sangat populer karena membantu kreator digital menjual karyanya secara langsung dan memberi kesempatan bagi penggemar untuk memiliki karya asli dalam bentuk digital. Keberadaan NFT juga memperkenalkan masyarakat pada konsep kepemilikan aset digital yang tercatat di blockchain.
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-3">10. DeFi (Keuangan Terdesentralisasi) yang Menghilangkan Peran Bank</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          DeFi (Decentralized Finance) adalah sistem keuangan yang berjalan di atas blockchain tanpa membutuhkan perantara seperti bank. Dalam DeFi, orang bisa meminjam, menabung, atau berinvestasi dengan bantuan smart contract (kontrak pintar) tanpa harus melewati proses bank tradisional. Dengan cara ini, layanan keuangan menjadi lebih terbuka dan bisa diakses oleh siapa saja, di mana saja, dengan menggunakan cryptocurrency. DeFi menawarkan fleksibilitas dan transparansi yang membuatnya menarik, terutama bagi mereka yang belum memiliki akses ke layanan perbankan.
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

export default Mainstream;
