import React from 'react'
import LargeButton from '../../Components/LargeButton'
import DotIndicators from '../../Components/DotIndicators'
import NumberIndicator from '../../Components/NumberIndicator'
import { PrimaryNavigation, SecondaryNavigation } from '../../Components/Navigation'

const InteractiveElements = () => {
  const links = [
    {
      text: 'Home',
      number: '01',
      to: '#/',
      active: true
    },
    {
      text: 'Hovered',
      number: '02',
      to: '#/',
      active: false
    },
    {
      text: 'Idle',
      number: '03',
      to: '#/',
      active: false
    }
  ]
  return (
    <section id="interactive-elements" style={{ margin: '4rem 0' }}>
      <h2 className="numbered-title">
        <span>02 </span>Interactive Elements
      </h2>

      <div>
        <PrimaryNavigation links={links} />
      </div>

      <div className="flex">
        <div style={{ marginTop: '5rem' }}>
          <LargeButton />
        </div>

        <div style={{ marginBottom: '50vh', '--flow-space': '4rem' }}>
          <SecondaryNavigation />
          <div style={{ marginTop: '5rem' }}>
            <DotIndicators />
          </div>
          <div
            className="flex"
            style={{ marginTop: '5rem', flexDirection: 'column', width: '40%' }}
          >
            <NumberIndicator number="1" active={true} />
            <NumberIndicator number="2" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveElements
