import React from 'react'
import { styles } from '../styles'

const Buttons = () => {
  return (
    <section>
      <div className={`${styles.paddingX} bg-tertiary w-full mx-auto flex flex-row justify-between gap-5`}>
        <button>Minimal Web Trend</button>
        <button>Vence Next Blog Trend</button>
      </div>
    </section>
  )
}

export default Buttons