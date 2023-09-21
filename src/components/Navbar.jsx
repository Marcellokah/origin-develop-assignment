import React, { useEffect, useState } from 'react';
import { navLinks, socialLinks } from '../constants';
import { menu, close } from '../assets';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
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
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-background" : "bg-transparent"
      }`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto leading-6'>

        {/* Vercel logo */}
        <h3 className='uppercase font-bold text-lg text-secondary'>vercel<span className='text-tertiary'>.</span></h3>

        {/* Navigation links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-primary underline underline-offset-8 decoration-tertiary" : "text-primary/50"} hover:text-primary hover:underline hover:decoration-tertiary hover:underline-offset-8 text-xs font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Socialmedia links */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {socialLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-primary underline underline-offset-8 decoration-tertiary" : "text-primary/50"} hover:text-primary hover:underline hover:decoration-tertiary hover:underline-offset-8 text-xs font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile navbar */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex justify-center gap-20 items-center'} p-6 absolute top-20 mx-4 my-2 bg-tertiary z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-primary underline underline-offset-8 decoration-tertiary" : "text-primary/50"} font-poppins font-medium cursor-pointer text-xs`} onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}>
                  <a href={`/${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {socialLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-primary underline underline-offset-8 decoration-tertiary" : "text-primary/50"} font-poppins font-medium cursor-pointer text-xs`} onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar