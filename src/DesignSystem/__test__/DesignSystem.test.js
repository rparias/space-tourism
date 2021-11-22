import { React } from 'react'
import { render, screen } from '@testing-library/react'
import DesignSystem from '../DesignSystem'

describe('Design System', () => {
  it('should render a design system', () => {
    render(<DesignSystem />)
    expect(screen.getByText('Design system')).toBeInTheDocument()
  })
})
