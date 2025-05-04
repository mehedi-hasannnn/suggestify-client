import { FaFacebook, FaTwitter, FaWhatsapp, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import logo from '../assets/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-[#202124] dark:bg-slate-300 text-white dark:text-[#202124] px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start text-center md:text-left">
        {/* Logo and Description */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <div className="flex gap-2 items-center justify-center">
            <img className="w-12 h-12 rounded-full" src={logo} alt="QueryMate Logo" />
            <h2 className="text-3xl font-bold text-[#8C52FF]">Suggestify</h2>
          </div>
          <p className="md:max-w-[320px] text-sm leading-relaxed">
            Discover smart product choices with <span className="text-[#8C52FF] font-semibold">Suggestify</span>. Our AI-powered system recommends the best options tailored to your needs, helping you make informed decisions with confidence.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-[#8C52FF] transition">Home</Link>
            <Link to="/about" className="hover:text-[#8C52FF] transition">About Us</Link>
            <Link to="/auth/register" className="hover:text-[#8C52FF] transition">Contact</Link>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:scale-110 transition">
              <FaWhatsapp />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:scale-110 transition">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
              <FcGoogle />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t pt-5 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} Suggestify — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
