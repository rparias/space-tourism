import React from 'react'

const Colors = () => {
  return (
    <section id="colors" style={{ margin: '4rem 0' }}>
      <h2 className="numbered-title">
        <span>01 </span>Colors
      </h2>
      <div className="flex">
        <div style={{ flexGrow: 1 }}>
          <div
            className="bg-dark text-white ff-serif fs-500"
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
            className="bg-accent text-dark ff-serif fs-500"
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
            className="bg-white text-dark ff-serif fs-500"
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
  )
}

export default Colors
