import React from 'react'
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-screen pt-60 p-20 mx-auto">
      <div className={`${styles.paddingX} max-w-5xl mx-auto flex flex-row gap-5`}>
        <div className="flex flex-col justify-start gap-8">
          <p className="font-light text-primary text-xs">29.Jun.2021</p>
          <p className="font-bold text-secondary text-2xl">Aron Klein’s captivating images of the UDEA’s culture.</p>
          <p className="font-light text-primary text-xs">Many years ago, I worked for my parents who own a video
            production company.</p>
          <div className='border-t-2 pt-5 w-full'>
            <ul ul className='list-none flex flex-row gap-12 font-light text-primary text-xs '>
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