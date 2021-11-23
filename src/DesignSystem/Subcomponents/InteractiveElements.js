import React from 'react'
import LargeButton from '../../Components/LargeButton'

const InteractiveElements = () => {
  return (
    <section id="interactive-elements" style={{ margin: '4rem 0' }}>
      <h2 className="numbered-title">
        <span>02 </span>Typography
      </h2>
      {/* navigation */}
      <div></div>

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
