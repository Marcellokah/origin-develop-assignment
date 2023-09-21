import React from 'react'
import { clothes } from '../assets'

const Image = () => {
  return (
    <section>
      <div className='w-full flex justify-center  mx-auto'>
        <img src={clothes}></img>
      </div>
    </section>
  )
}

export default Image