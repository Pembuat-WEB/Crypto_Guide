import { Link, useNavigate } from "react-router-dom";
import { profil } from "../assets";
import Button from "./Button";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { auth } from "../firebase";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 border-b border-n-6 laptop:bg-n-8/90 laptop:backdrop-blur-sm bg-n-8">
      <div className="flex items-center justify-between px-5 laptop:px-7.5 dekstop:px-10 py-1">
        <a className="block w-[12rem] dekstop:mr-8" href="#hero">
          <img src={profil} width={190} height={40} alt="Logo" />
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="laptop:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col items-center fixed top-0 left-0 right-0 bottom-0 bg-n-8 z-40 laptop:z-auto laptop:static laptop:flex laptop:flex-row laptop:bg-transparent laptop:mr-16 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full laptop:translate-y-0"
          }`}
        >
          <div className="flex flex-col items-center mt-10 laptop:mt-0 laptop:flex-row space-y-4 laptop:space-y-0 laptop:space-x-6">
            {[{ path: "/", label: "Beranda", key: "beranda" },
              { path: "/Crypto", label: "Apa itu Cryptocurrency", key: "crypto" },
              { path: "/CaraKerja", label: "Cara Kerja", key: "cara-kerja" },
              { path: "/Keamanan", label: "Keamanan", key: "keamanan" },
              { path: "/Sektor", label: "Materi", key: "sektor" }].map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`${
                    selectedLink === item.key ? "text-white" : "text-purple-500"
                  } hover:text-white transition-colors duration-100 delay-50 text-sm`}
                  onClick={() => handleLinkClick(item.key)}
                >
                  {item.label}
                </Link>
              ))}
          </div>

          {/* Auth Button for Mobile */}
          <div className="laptop:hidden mt-5">
            {user == null ? (
              <Link
                to="/Login"
                className={`${
                  selectedLink === "Login" ? "text-purple-500" : "text-white"
                } hover:text-purple-500 transition-colors duration-100 delay-50 text-sm`}
                onClick={() => handleLinkClick("Login")}
              >
                Login
              </Link>
            ) : (
              <button
                className="text-white hover:text-purple-500 transition-colors duration-100 delay-50 text-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>
          <button
          className="laptop:hidden text-white text-4xl mt-12"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           <FiX />
        </button>
        </nav>

        {/* Auth Button for Desktop */}
        <div className="hidden laptop:block">
          {user == null ? (
            <Button>
              <Link
                to="/Login"
                className={`${
                  selectedLink === "Login" ? "text-purple-500" : "text-white"
                } hover:text-purple-500 transition-colors duration-100 delay-50 text-sm`}
                onClick={() => handleLinkClick("Login")}
              >
                Login
              </Link>
            </Button>
          ) : (
            <Button>
              <button
                className="text-white hover:text-purple-500 transition-colors duration-100 delay-50 text-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
