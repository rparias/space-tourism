import React from 'react'
import { Colors, Typography, InteractiveElements } from './Subcomponents'

const DesignSystem = () => {
  return (
    <div className="container">
      <h1 className="uppercase">Design system</h1>
      <Colors />
      <Typography />
      <InteractiveElements />
    </div>
  )
}

export default DesignSystem
