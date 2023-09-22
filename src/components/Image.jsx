import React from 'react'
import { clothes } from '../assets'

const Image = () => {
  return (
    <section className='w-full flex justify-center py-15'>
        <img src={clothes} alt='clothes'></img>
    </section>
  )
}

export default Image