import React from 'react'
import { styles } from '../styles'

const Buttons = () => {
  return (
    <section>
      <div className={`${styles.paddingX} bg-buttons_bg text-sm font-medium text-secondary w-full mx-auto flex flex-row justify-around py-10 gap-5`}>
        <button>Minimal Web Trend</button>
        <button>Vence Next Blog Trend</button>
      </div>
    </section>
  )
}

export default Buttons