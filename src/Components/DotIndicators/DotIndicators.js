import React from 'react'
import DotIndicatorsContainer from './style'

const DotIndicators = () => {
  return (
    <DotIndicatorsContainer className="flex">
      <button aria-selected="true">
        <span className="sr-only">Slide title</span>
      </button>
      <button aria-selected="false">
        <span className="sr-only">Slide title</span>
      </button>
      <button aria-selected="false">
        <span className="sr-only">Slide title</span>
      </button>
    </DotIndicatorsContainer>
  )
}

export default DotIndicators
