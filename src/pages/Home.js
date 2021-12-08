import React from 'react'
import { links } from './links'
import LargeButton from '../Components/LargeButton'
import { ReactComponent as Logo } from '../assets/shared/logo.svg'
import { PrimaryNavigation } from '../Components/Navigation'

const Home = () => {
  return (
    <>
      <header className="primary-header flex">
        <div>
          <Logo alt="space tourism logo" className="logo" />
        </div>
        {/* <PrimaryNavigation links={links} /> */}
      </header>

      <div className="grid-container">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to{' '}
            <span className="fs-900 ff-serif d-block text-white">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience! Explore
          </p>
        </div>
        <div>
          <LargeButton />
        </div>
      </div>
    </>
  )
}

export default Home
