import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import resume from "../assets/resume.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 right-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto relative'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='Taitil Chheda logo' className='w-10 h-10 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Taitil Chheda &nbsp;
            <span className='sm:block hidden'> | AI & ML</span>
          </p>
        </Link>

        <div className='hidden sm:flex gap-10 items-center'>
          <ul className='list-none flex flex-row gap-10'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <a
            href={resume}
            download='Taitil_Chheda_Resume.pdf'
            className='relative text-white text-[16px] font-medium cursor-pointer border-2 border-white py-2 px-4 rounded-lg overflow-hidden transition-all duration-300 group'
          >
            <span className="absolute inset-0 bg-white transition-transform duration-300 transform translate-x-full group-hover:translate-x-0 z-0"></span>
            <span className="relative z-10 group-hover:text-purple-600 transition-colors duration-300">Download Resume</span>
          </a>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt={toggle ? 'Close menu' : 'Open menu'}
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === link.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a
                  href={resume}
                  download='Taitil_Chheda_Resume.pdf'
                  className='font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white'
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
