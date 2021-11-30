import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PrimaryLink = ({ to, number, text, active }) => {
  return (
    <li className={active ? 'active' : ''}>
      <Link to={to} className="ff-sans-cond uppercase text-white letter-spacing-2">
        <span>{number}</span>
        {text}
      </Link>
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
