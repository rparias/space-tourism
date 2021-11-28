import React from 'react'
import NavigationContainer from './style'
import PrimaryLink from './PrimaryLink'
import PropTypes from 'prop-types'

const PrimaryNavigation = ({ links }) => {
  return (
    <NavigationContainer>
      <ul className="primary-navigation underline-indicators flex">
        {links && links.map((link) => <PrimaryLink key={link.number} {...link} />)}
      </ul>
    </NavigationContainer>
  )
}

PrimaryNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired
    })
  ).isRequired
}

export default PrimaryNavigation
