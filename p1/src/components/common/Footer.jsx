import React, { useContext } from "react";
import Clock from "../home/Clock";
import { FiArrowUpRight } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { NavHoverContext } from "../../context/MenuContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { setNavHovered } = useContext(NavHoverContext);

  return (
    <footer className="w-full bg-black text-white px-5 sm:px-6 md:px-12 py-10 md:py-14">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-7 md:gap-8">

          {/* Social Icons */}
          <div
            className="flex items-center gap-5 sm:gap-6 md:gap-8"
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}
          >
            <a
              href="https://github.com/varuntyagii"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-[#6e5494] transition-all duration-300 text-xl hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/varuntyagi09"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-[#0A66C2] transition-all duration-300 text-xl hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/varun_tyagi0"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-[#1DA1F2] transition-all duration-300 text-xl hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-[#E4405F] transition-all duration-300 text-xl hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/6397011309"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-[#25D366] transition-all duration-300 text-xl hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            onMouseEnter={() => setNavHovered(true)}
            onMouseLeave={() => setNavHovered(false)}
            className="flex cursor-pointer items-center gap-2 text-sm md:text-base font-light tracking-wide border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
          >
            Let's Chat
            <FiArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>

        {/* Divider */}
        <hr className="my-7 md:my-8 border-white/10" />

        {/* Bottom Section */}
<div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-xs md:text-sm font-light tracking-wider">
         

          {/* Copyright */}
          <span className="leading-relaxed">
            © {currentYear} Varun Tyagi. All rights reserved.
          </span>
           {/* Clock */}
          <div>
            <Clock />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;