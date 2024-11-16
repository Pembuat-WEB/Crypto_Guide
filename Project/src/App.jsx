import { BrowserRouter as Router , Route , Routes , useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Crypto from "./pages/Crypto";
import Keamanan from "./pages/Keamanan";
import CaraKerja from "./pages/CaraKerja";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Sektor from "./pages/Sektor";
import Register from "./pages/Register";
import PrivateRoute from "./PrivateRoute";
import Alert from "./pages/Alert";
import Mainstream from "./pages/materi/Mainstream";
import Defi from "./pages/materi/Defi";
import Memecoin from "./pages/materi/Memecoin";
import Smartcontract from "./pages/materi/Smartcontract";
import Stablecoin from "./pages/materi/Stablecoin";
import Tokenutilitas from "./pages/materi/Tokenutilitas";
import Admin from "./pages/Admin";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/Login' || location.pathname === '/Register' || location.pathname === '/Alert' || location.pathname === '/Mainstream' || location.pathname === '/Stablecoin' || location.pathname === '/Memecoin' || location.pathname === '/Smartcontract' || location.pathname === '/Tokenutilitas' || location.pathname === '/Defi'  || location.pathname === '/Admin' ;

  return (
    <>
      {!isAuthPage && <Navbar />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );

};

function App(){
  return(
      
    <Router>
        {/* <Navbar/>   */}
      <Layout>
        <main>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/Crypto" element={<Crypto/>}/>
          <Route path="/Keamanan" element={<Keamanan/>}/>
          <Route path="/CaraKerja" element={<CaraKerja/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Sektor" element={<PrivateRoute><Sektor/></PrivateRoute>}/>
          <Route path="/Alert" element={<Alert/>}/>
          <Route path="/Mainstream" element={<Mainstream/>}/>
          <Route path="/Defi" element={<Defi/>}/>
          <Route path="/Memecoin" element={<Memecoin/>}/>
          <Route path="/Smartcontract" element={<Smartcontract/>}/>
          <Route path="/Stablecoin" element={<Stablecoin/>}/>
          <Route path="/Tokenutilitas" element={<Tokenutilitas/>}/>
          <Route path="/Admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
        </Routes>
        </main>
      </Layout>
        {/* <Footer/> */}
    </Router>
          
  )
}

export default App
