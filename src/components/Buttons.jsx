import React from 'react'
import { styles } from '../styles'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'

const Buttons = () => {
  return (
    <section className='w-full mx-auto bg-buttons_bg'>
      <div className={`${styles.paddingX} max-w-7xl  text-sm font-medium text-secondary w-full mx-auto flex flex-row justify-around py-10`}>

        {/* Left button and logo */}
        <button className='flex gap-3'>
          <FaLongArrowAltLeft className='mt-0.5' />
          <p>Minimal Web Trend</p>
        </button>

        {/* Right button and logo */}
        <button className='flex flex-row-reverse gap-3'>
          <FaLongArrowAltRight className='mt-0.5' />
          <p>Vence Next Blog Trend</p>
        </button>
      </div>
    </section>
  )
}

export default Buttons