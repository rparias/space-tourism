import React from 'react'

const DesignSystem = () => {
  return (
    <div className="container">
      <h1>Design system</h1>
      <section id="colors">
        <h2>
          <span>01</span> Colors
        </h2>
        <div className="flex">
          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-dark text-white"
              style={{ padding: '3rem 1rem 1rem', border: '1px solid white' }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>
          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-accent text-dark"
              style={{ padding: '3rem 1rem 1rem', border: '1px solid white' }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>
          <div style={{ flexGrow: 1 }}>
            <div
              className="bg-white text-dark"
              style={{ padding: '3rem 1rem 1rem', border: '1px solid white' }}
            >
              #0B0D17
            </div>
            <p>
              <span className="text-accent">RGB</span> 11, 13, 23
            </p>
            <p>
              <span className="text-accent">HSL</span> 230°, 35%, 7%
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DesignSystem
