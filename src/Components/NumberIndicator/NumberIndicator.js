import React from 'react'
import PropTypes from 'prop-types'
import NumberIndicatorContainer from './style'

const NumberIndicator = ({ number, active = false }) => {
  return (
    <NumberIndicatorContainer className="ff-serif fs-600 text-white bg-dark" aria-selected={active}>
      {number}
    </NumberIndicatorContainer>
  )
}

NumberIndicator.propTypes = {
  number: PropTypes.string,
  active: PropTypes.bool
}

export default NumberIndicator
