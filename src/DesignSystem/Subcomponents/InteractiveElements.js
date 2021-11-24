import React from 'react'
import LargeButton from '../../Components/LargeButton'
import PrimaryNavigation from '../../Components/PrimaryNavigation'

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

        <div style={{ marginBottom: '50vh' }}></div>
      </div>
    </section>
  )
}

export default InteractiveElements
