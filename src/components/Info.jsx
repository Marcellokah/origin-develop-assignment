import React from 'react'
import { styles } from '../styles'

const Info = () => {
  return (
    <section className={`${styles.paddingX} max-w-5xl mx-auto py-20`}>
      <div className='flex flex-col gap-20 text-paragraph text-sm'>
        <p>Quickly monetize synergistic portals via efficient e-commerce. Phosfluorescently reinvent frictionless intellectual capital vis-a-vis an expanded array of niches. Efficiently provide access to interactive scenarios vis-a-vis bleeding-edge value. Energistically maximize premium meta-services and multifunctional collaboration and idea-sharing. Dramatically unleash front-end value after out-of-the-box opportunities. Energistically streamline magnetic action items after global markets. Collaboratively scale backward-compatible leadership skills and 24/7 best practices. Objectively exploit emerging methodologies vis-a-vis functionalized ideas. Energistically reconceptualize out-of-the-box innovation vis-a-vis cooperative methods of empowerment. </p>
        <div className='flex flex-row flex-wrap gap-20'>
          <div>
            <h3 className='text-secondary font-medium'>Location:</h3>
            <p>Sydney, Australia</p>
          </div>
          <div>
            <h3 className='text-secondary font-medium'>Size:</h3>
            <p>240,000m</p>
          </div>
          <div>
            <h3 className='text-secondary font-medium'>Designer:</h3>
            <p>Sean Connor</p>
          </div>
          <div>
            <h3 className='text-secondary font-medium'>Released:</h3>
            <p>2022</p>
          </div>
        </div>
        <div className='flex flex-row  justify-between gap-10 text-xs'>
          <ul className='flex flex-row flex-wrap gap-5 uppercase'>
            <li className='border border-border rounded py-1 px-3 font-semibold'>creative</li>
            <li className='border border-border rounded py-1 px-3 font-semibold'>inspiration</li>
            <li className='border border-border rounded py-1 px-3 font-semibold'>travel</li>
            <li className='border border-border rounded py-1 px-3 font-semibold'>photography</li>
          </ul>
          <button className='uppercase font-bold'>share</button>
        </div>
      </div>
    </section>
  )
}

export default Info