import React from 'react'
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-screen pt-60 p-20 mx-auto">
      <div className={`${styles.paddingX} bg-gray-300 max-w-5xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-start">
          <p className="font-light text-xs">29.Jun.2021</p>
          <p className="font-bold text-2xl">Aron Klein’s captivating images of the UDEA’s culture.</p>
          <p className="font-light text-xs">Many years ago, I worked for my parents who own a video
            production company.</p>
          <div>
            <ul ul className='list-none flex flex-row gap-5 font-light text-xs'>
              <il>Peter Rowardson</il>
              <il>Design Trend</il>
              <il>2 min</il>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero