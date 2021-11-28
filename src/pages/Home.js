import React from 'react'
import { PrimaryNavigation } from '../Components/Navigation'
import { links } from './links'

const Home = () => {
  return (
    <>
      <header className="primary-header">
        <div></div>
        <PrimaryNavigation links={links} />
      </header>
    </>
  )
}

export default Home
