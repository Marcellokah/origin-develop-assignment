import React from 'react'
import { styles } from '../styles'

const Footer = () => {
  return (
    <section className={`${styles.paddingX} bg-secondary w-full mx-auto flex flex-col items-start gap-5 p-10`}>
      <div>
        <h3>VENCE Studio.</h3>
      </div>
      <div>
        <p>1088, North Street, Alexandria, AU</p>
      </div>
    </section>
  )
}

export default Footer