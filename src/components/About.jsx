import React from 'react'
import { styles } from '../styles'

const About = () => {
  return (
    <section className={`${styles.paddingX} max-w-5xl mx-auto flex flex-col items-start gap-20 py-20`}>
      <div className='flex flex-col gap-5 text-sm text-paragraph'>
        <p>Quickly monetize synergistic portals via efficient e-commerce. Phosfluorescently reinvent frictionless intellectual capital vis-a-vis an expanded array of niches. Efficiently provide access to interactive scenarios vis-a-vis bleeding-edge value. Energistically maximize premium meta-services and multifunctional collaboration and idea-sharing. Dramatically unleash front-end value after out-of-the-box opportunities. Energistically streamline magnetic action items after global markets. Collaboratively scale backward-compatible leadership skills and 24/7 best practices. Objectively exploit emerging methodologies vis-a-vis functionalized ideas. Energistically reconceptualize out-of-the-box innovation vis-a-vis cooperative methods of empowerment. Uniquely foster revolutionary value whereas accurate communities.</p>
        <p>Conveniently engineer robust experiences after performance based initiatives. Credibly communicate strategic technology whereas turnkey functionalities. Professionally re-engineer magnetic markets for highly efficient functionalities. Efficiently fabricate user friendly opportunities for backward-compatible experiences. Competently scale team building relationships through real-time solutions.</p>
      </div>
      <div className='text-secondary text-2xl font-bold'>
        <h3>Many of life’s failures are people who did not realize how close they were to success when they gave up.</h3>
      </div>
    </section>
  )
}

export default About