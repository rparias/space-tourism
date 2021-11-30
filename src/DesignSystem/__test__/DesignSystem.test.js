import { React } from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import DesignSystem from '../DesignSystem'

describe('Design System', () => {
  it('should render a design system', () => {
    render(<DesignSystem />, { wrapper: MemoryRouter })
    expect(screen.getByText('Design system')).toBeInTheDocument()
  })
})
