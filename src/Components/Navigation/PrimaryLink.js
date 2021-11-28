import React from 'react'
import PropTypes from 'prop-types'

const PrimaryLink = ({ to, number, text, active }) => {
  return (
    <li className={active ? 'active' : ''}>
      <a className="uppercase text-white letter-spacing-2" href={to}>
        <span>{number}</span>
        {text}
      </a>
    </li>
  )
}

PrimaryLink.propTypes = {
  to: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
}

export default PrimaryLink
