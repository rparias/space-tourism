import React from 'react'
import LargeButton from '../../Components/LargeButton'
import DotIndicators from '../../Components/DotIndicators'
import { PrimaryNavigation, SecondaryNavigation } from '../../Components/Navigation'

const InteractiveElements = () => {
  return (
    <section id="interactive-elements" style={{ margin: '4rem 0' }}>
      <h2 className="numbered-title">
        <span>02 </span>Interactive Elements
      </h2>

      <div>
        <PrimaryNavigation />
      </div>

      <div className="flex">
        <div style={{ marginTop: '5rem' }}>
          <LargeButton />
        </div>

        <div style={{ marginBottom: '50vh', '--flow-space': '4rem' }}>
          <SecondaryNavigation />
          <DotIndicators />
        </div>
      </div>
    </section>
  )
}

export default InteractiveElements
