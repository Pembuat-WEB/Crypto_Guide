import React, { useState, useEffect } from 'react';
import { defi, mainstream, memecoin } from '../../assets';
import { useNavigate } from 'react-router-dom';
import { db, ref, push, onValue } from '../../firebase';

const Memecoin = () => {
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
          <h1 className="text-black text-3xl md:text-5xl font-extrabold gradient-judul tracking-wide">MEME COIN</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center h-auto w-full md:w-[1150px] bg-slate-100 mt-6 md:mt-12 mb-12 p-4 md:p-6 rounded-xl shadow-lg">
        <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold mb-4 text-center">Apa itu Meme Coin ?</h2>
        <p className="text-gray-600 text-base md:text-lg text-center mb-6 px-4">
        Sektor Meme Coin dalam Cryptocurrency adalah kategori aset digital yang berbasis pada cryptocurrency yang awalnya dibuat sebagai lelucon atau bentuk hiburan. Meme coin dikenal dengan basis komunitasnya yang kuat, konsep yang sering kali unik atau menghibur, dan nilai yang fluktuatif yang sangat dipengaruhi oleh tren media sosial. Meme coin umumnya tidak memiliki tujuan atau proyek teknologi serius seperti cryptocurrency besar lainnya (misalnya, Bitcoin atau Ethereum), namun beberapa di antaranya telah menarik perhatian besar dan mencapai nilai pasar yang signifikan.
        </p>

        {/* Image Section */}
        <div className="w-[90%] max-w-[450px] h-[300px] md:h-[450px] rounded-lg flex items-center justify-center mb-8 overflow-hidden">
          <img src={memecoin} alt="DEFI" className="w-full h-full object-contain" />
        </div>

         {/* Additional Information Section */}
         <div className="flex flex-wrap justify-around w-full gap-4 mb-6">
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Alat Spekulasi dan Investasi Jangka Pendek</h3>
            <p className="text-gray-700 text-sm md:text-base">
            Meme coin sering kali dimanfaatkan sebagai aset spekulatif oleh para trader yang mencari keuntungan cepat. Karena harga meme coin sangat volatil dan dapat dipengaruhi oleh tren media sosial serta dukungan komunitas, banyak investor membeli meme coin dengan harapan bisa menjualnya kembali ketika harga melonjak. Misalnya, Dogecoin dan Shiba Inu pernah mengalami kenaikan tajam karena hype komunitas dan dukungan tokoh publik.
             </p>
          </div>
          <div className="w-full md:w-[48%] bg-gradient-to-r from-slate-50 via-gray-200 to-slate-50 p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-gray-800 text-xl md:text-2xl font-semibold mb-2">Membangun Komunitas dan Hiburan Sosial</h3>
            <p className="text-gray-700 text-sm md:text-base">
            Meme coin berfungsi sebagai alat untuk membangun komunitas online yang solid dan sering kali menghibur. Komunitas meme coin, seperti "Shiba Army" atau "Doge Army," berkumpul di media sosial untuk berbagi konten, mempromosikan koin, dan meningkatkan keterikatan. Hal ini juga menciptakan fenomena sosial dan hiburan digital, di mana para pengguna merasa menjadi bagian dari gerakan atau tren global yang menyenangkan.
            </p>
          </div>
        </div>

        {/* Long Content Reading Section */}
        <div className="w-full bg-white p-4 md:p-6 rounded-lg shadow-md overflow-auto h-[300px] md:h-[400px]">
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3">1. Pengertian Meme Coin</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Meme coin adalah cryptocurrency yang sering kali dibuat tanpa rencana teknologi atau tujuan proyek yang jelas, dan lebih ditujukan untuk menciptakan tren atau fenomena sosial di komunitas digital. Meme coin biasanya terinspirasi oleh meme internet, budaya populer, atau parodi terhadap cryptocurrency besar. Nilai meme coin umumnya sangat bergantung pada popularitas dan dukungan komunitas, terutama melalui media sosial seperti Twitter dan Reddit. <br />
          Contoh : 
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Dogecoin (DOGE): Meme coin pertama dan paling terkenal yang awalnya dibuat sebagai lelucon tetapi kemudian mendapatkan popularitas besar dengan dukungan dari komunitas dan tokoh publik seperti Elon Musk.
            </li>
            <li className='mt-2'>
            Shiba Inu (SHIB): Dikenal sebagai "Dogecoin Killer," SHIB adalah meme coin lain yang meroket popularitasnya karena dipromosikan sebagai pesaing Dogecoin.
            </li>
            <li className='mt-2'>
            Pepe (PEPE): Meme coin yang terinspirasi oleh karakter meme populer "Pepe the Frog" dan menjadi tren karena dukungan komunitasnya.
            </li>
          </ul>
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">2. Karakteristik Utama Meme Coin</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Meme coin memiliki beberapa karakteristik yang membedakannya dari cryptocurrency lain yang lebih konvensional:
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            a. <span className='font-semibold text-xl'> Volatilitas Tinggi</span> <br />
            Meme coin memiliki volatilitas harga yang sangat tinggi dan mudah dipengaruhi oleh tren media sosial dan opini tokoh publik. Nilainya dapat naik atau turun drastis dalam waktu singkat hanya karena popularitasnya di kalangan pengguna internet, tanpa dasar yang kuat dalam proyek atau produk.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            b. <span className='font-semibold text-xl'>Dukungan Komunitas yang Kuat</span> <br />
            Meme coin sering kali sangat bergantung pada komunitas mereka. Komunitas ini tidak hanya berfungsi sebagai pendukung tetapi juga sebagai agen promosi yang sering kali mempromosikan koin melalui media sosial. Komunitas yang kuat dapat memberikan dukungan yang signifikan pada harga meme coin, dan seringkali pengguna aktif terlibat dalam menciptakan konten meme atau berbagi postingan untuk meningkatkan popularitas koin.
             </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            c. <span className='font-semibold text-xl'> Tanpa Fundamental atau Teknologi yang Kuat</span> <br />
            Sebagian besar meme coin tidak memiliki proyek teknologi yang serius atau utilitas yang jelas seperti halnya cryptocurrency konvensional. Biasanya, mereka tidak memiliki kasus penggunaan yang nyata atau pengembangan teknologi blockchain yang kuat, dan nilai mereka lebih didasarkan pada tren sosial dan dukungan komunitas.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            d. <span className='font-semibold text-xl'> Jumlah Pasokan yang Sangat Besar</span> <br />
            Banyak meme coin diciptakan dengan jumlah pasokan yang sangat besar, sering kali mencapai triliunan token. Ini adalah salah satu alasan mengapa harga satuan meme coin sangat rendah (seringkali di bawah satu sen) dan memungkinkan orang untuk membeli banyak token dengan dana kecil. Misalnya, pasokan maksimum Dogecoin tidak terbatas, dan Shiba Inu memiliki pasokan awal hingga ratusan triliun token.
            </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">3. Faktor-Faktor yang Mempengaruhi Harga Meme Coin</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            a. <span className='font-semibold text-xl'> Media Sosial dan Dukungan Tokoh Publik</span> <br />
            Harga meme coin sangat mudah dipengaruhi oleh tren media sosial dan dukungan dari tokoh terkenal. Misalnya, Dogecoin mengalami kenaikan harga besar setelah Elon Musk menyebutnya di Twitter. Ini menunjukkan bahwa harga meme coin sangat rentan terhadap "hype" yang diciptakan di media sosial, dan sedikit dukungan dari influencer dapat menyebabkan kenaikan harga signifikan.
             </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            b. <span className='font-semibold text-xl'> Peran Komunitas Online</span> <br />
            Komunitas di platform seperti Reddit, Twitter, dan Discord berperan besar dalam mendukung meme coin. Komunitas ini bisa menciptakan gerakan, seperti "meme army," yang aktif mempromosikan dan mempertahankan nilai koin di pasar. Dukungan komunitas ini sering kali menggerakkan nilai koin tanpa didasari oleh proyek teknologi nyata.
            </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-2">
            c. <span className='font-semibold text-xl'> Spekulasi dan Tren Pasar</span> <br />
            Investor sering kali membeli meme coin berdasarkan spekulasi bahwa nilai koin akan meningkat. Meme coin diperlakukan sebagai aset spekulatif di mana investor berharap mendapatkan keuntungan cepat dari lonjakan harga jangka pendek. Tren pasar dan siklus hype berpengaruh besar pada harga meme coin.
            </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">4. Kegunaan Meme Coin</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
          Walaupun meme coin umumnya tidak memiliki utilitas nyata, beberapa di antaranya telah menemukan penggunaan sebagai alat tukar atau bahkan untuk kegiatan amal yang disponsori komunitas. Beberapa perusahaan atau merchant mulai menerima meme coin seperti Dogecoin sebagai alat pembayaran. <br />
          Contoh kegunaan meme coin : 
          <ul className='list-disc pl-6'>
            <li className='mt-2'>
            Pembayaran Online: Dogecoin diterima oleh beberapa merchant sebagai metode pembayaran, meskipun ini masih terbatas.
            </li>
            <li className='mt-2'>
            Donasi dan Amal: Dogecoin telah digunakan oleh komunitas untuk mengumpulkan dana dalam berbagai kampanye amal.
            </li>
            <li className='mt-2'>
            Token Komunitas dan Hiburan: Meme coin sering kali digunakan sebagai token komunitas yang menyatukan pengguna di platform digital, seperti Reddit, dan memberikan pengalaman hiburan berbasis komunitas.
            </li>
          </ul>
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">5. Kelebihan dan Kekurangan Meme Coin</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
            <span className='text-xl font-semibold'>Kelebihan :</span>
            <ul className='list-disc pl-6'>
              <li className='mt-2'>
              Dukungan Komunitas yang Kuat: Meme coin sering kali mendapatkan dukungan luas dari komunitas, yang berperan besar dalam menjaga eksistensi dan popularitas koin tersebut.
              </li>
              <li className='mt-2'>
              Potensi Keuntungan Spekulatif: Karena harganya sangat volatil, meme coin kadang-kadang menawarkan potensi keuntungan besar dalam waktu singkat.
              </li>
              <li className='mt-2'>
              Fenomena Sosial dan Tren Hiburan: Meme coin membawa aspek hiburan dan tren budaya populer dalam ekosistem cryptocurrency.
              </li>
            </ul>
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-4">
            <span className='text-xl font-semibold'>Kekurangan :</span>
            <ul className='list-disc pl-6'>
              <li className='mt-2'>
              Ketiadaan Fundamental Teknologi yang Kuat: Meme coin umumnya tidak memiliki kasus penggunaan yang nyata atau proyek teknologi.
              </li>
              <li className='mt-2'>
              Volatilitas Ekstrem dan Risiko Tinggi: Harga meme coin sangat mudah berfluktuasi karena tren media sosial dan spekulasi.
              </li>
              <li className='mt-2'>
              Risiko Kehilangan Investasi: Banyak meme coin berpotensi kehilangan nilai secara drastis dalam waktu singkat, membuatnya sangat berisiko sebagai investasi jangka panjang.
              </li>
            </ul>
          </p>

          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">6. Contoh Meme Coin Populer dan Pengaruhnya</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6">
            <span className='text-xl font-semibold'>Dogecoin (DOGE)</span>
            <ul className='list-disc pl-6'>
              <li className='mt-2'>
              Diciptakan pada tahun 2013 oleh Billy Markus dan Jackson Palmer sebagai parodi dari Bitcoin.
              </li>
              <li className='mt-2'>
              Logo Dogecoin menggunakan gambar anjing Shiba Inu yang populer di meme internet.
              </li>
              <li className='mt-2'>
              Meski awalnya lelucon, Dogecoin mendapatkan dukungan besar, terutama dari Elon Musk, dan mencapai nilai pasar miliaran dolar.
              </li>
            </ul>
          </p> 
          <p className="text-gray-700 text-sm md:text-base leading-relaxed ml-6 mt-4">
            <span className='text-xl font-semibold'>Shiba Inu (SHIB)</span>
            <ul className='list-disc pl-6'>
              <li className='mt-2'>
              Shiba Inu diluncurkan sebagai pesaing Dogecoin dan menggunakan gambar anjing Shiba Inu yang sama.
              </li>
              <li className='mt-2'>
              Komunitas SHIB disebut "Shib Army," yang aktif mendukung dan mempromosikan koin ini.
              </li>
              <li className='mt-2'>
              Shiba Inu juga memperkenalkan platform DeFi dan "ShibaSwap" untuk meningkatkan fungsionalitas koin ini.
               </li>
            </ul>
          </p>
          <h3 className="text-gray-800 text-lg md:text-2xl font-semibold mb-3 mt-4">7. Kesimpulan</h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Sektor meme coin dalam cryptocurrency adalah fenomena yang menggabungkan hiburan, budaya internet, dan spekulasi pasar. Meme coin membawa pendekatan baru dalam dunia cryptocurrency, di mana nilai mereka lebih banyak dipengaruhi oleh tren sosial dan dukungan komunitas daripada oleh utilitas atau inovasi teknologi. Meskipun menawarkan peluang keuntungan spekulatif, meme coin juga sangat berisiko dan sering kali kehilangan nilai dengan cepat jika tren berakhir.
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

export default Memecoin;
