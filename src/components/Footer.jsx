import React from 'react'
import { styles } from '../styles'
import { footerLinks, socialLinks } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.paddingX} bg-secondary w-full mx-auto flex flex-col items-start gap-10 p-10`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto border-b-2 border-primary pb-10'>

        {/* Logo */}
        <div>
          <h3 className='font-bold text-lg'>VENCE Studio.</h3>
        </div>

        {/* Navigation links */}
        <ul className='list-none hidden sm:flex flex-row gap-10 text-primary text-xs'>
          {footerLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Social media links */}
        <ul className='list-none hidden sm:flex flex-row gap-10 text-primary text-xs'>
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto text-primary text-xs'>
        <p>1088, North Street, Alexandria, AU</p>
        <p>© 2022, All Rights Reserved</p>
      </div>
    </section>
  )
}

export default Footer