import React from 'react'
import { styles } from '../styles';
import 'animate.css';

const Hero = () => {
  return (
    <section className={`${styles.paddingX} max-w-5xl mx-auto flex-row gap-5 pt-60 pb-20`}>
      <div className="flex flex-col justify-start gap-8">

        {/* Time, title, paragraph */}
        <p className="font-light text-primary text-xs animate__animated animate__fadeInLeft">29.Jun.2021</p>
        <p className="font-bold text-secondary text-2xl animate__animated animate__fadeInLeftBig">Aron Klein’s captivating images of the UDEA’s culture.</p>
        <p className="font-light text-primary text-xs animate__animated animate__fadeInLeft">Many years ago, I worked for my parents who own a video production company.</p>

        {/* Details */}
        <div className='border-t-2 pt-5 w-full animate__animated animate__fadeIn animate__delay-1s'>
          <ul ul className='list-none flex flex-row gap-12 font-light text-primary text-xs animate__animated animate__fadeIn animate__delay-1s'>
            <li>Peter Rowardson</li>
            <li>Design Trend</li>
            <li>2 min</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero