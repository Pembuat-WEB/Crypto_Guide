import { defi, mainstream, memecoin, nft, smartcontract, stableCoin, tokenutilitas } from "../assets";

  const projects = [
    {
      name: "Mainstream",
      description:
        "Kripto yang berfungsi sebagai alat transaksi atau penyimpanan nilai. Contoh: Bitcoin (BTC), Litecoin (LTC).",
      tags: [
        {
          name: "alat tukar digital",
          color: "blue-text-gradient",
        },
        {
          name: "penyimpan nilai",
          color: "green-text-gradient",
        },
      ],
      image: mainstream,
      link: "/Mainstream",
    },
    {
      name: "Stablecoin",
      description:
        "Kripto yang nilainya dipatok pada aset stabil seperti dolar AS untuk mengurangi volatilitas. Contoh: Tether (USDT), USD Coin (USDC), DAI.",
      tags: [
        {
          name: "aset stabil",
          color: "blue-text-gradient",
        },
        {
          name: "mengurangi volatilitas",
          color: "green-text-gradient",
        },
      ],
      image: stableCoin,
      link: "/Stablecoin",
    },
    {
      name: "Meme Coin",
      description:
        "Kripto yang muncul dari komunitas dan sering kali didasarkan pada meme atau tren internet. Contoh: Dogecoin (DOGE), Shiba Inu (SHIB).",
      tags: [
        {
          name: "tren internet",
          color: "blue-text-gradient",
        },
        {
          name: "keuntungan tinggi",
          color: "green-text-gradient",
        },
        {
          name: "resiko tinggi",
          color: "pink-text-gradient",
        },
      ],
      image: memecoin,
      link: "/Memecoin",
    },
     {
      name: "Smart Contract ",
      description:
        "Blockchain yang mendukung pengembangan aplikasi terdesentralisasi dan kontrak pintar. Contoh: Ethereum (ETH), Binance Smart Chain (BSC), Cardano (ADA).",
      tags: [
        {
          name: "desentralisasi",
          color: "blue-text-gradient",
        },
        {
          name: "kontrak pintar",
          color: "green-text-gradient",
        },
      ],
      image: smartcontract,
      link: "/Smartcontract",
    },
    {
      name: "Token Utilitas",
      description:
        "Token yang digunakan dalam platform atau ekosistem untuk membeli layanan atau barang. Contoh: Chainlink (LINK), Basic Attention Token (BAT).",
      tags: [
        {
          name: "untuk membeli barang",
          color: "blue-text-gradient",
        },
      ],
      image: tokenutilitas,
      link: "/Tokenutilitas",
    },
    {
      name: "DEFI",
      description:
        "Kripto yang mendukung layanan keuangan terdesentralisasi seperti peminjaman, dan perdagangan tanpa perantara. Contoh: Uniswap (UNI), Aave (AAVE), Compound (COMP).",
      tags: [
        {
          name: "desentralisasi",
          color: "blue-text-gradient",
        },
        {
          name: "perdagangan",
          color: "green-text-gradient",
        },
      ],
      image: defi,
      link: "/Defi",
    },
    
  ];

  export {projects};