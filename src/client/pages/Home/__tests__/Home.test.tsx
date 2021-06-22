import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Home from '../Home'

describe('Home Component', () => {
  it('should render Home', () => {
    const wrapper = render(<Home />)
    expect(wrapper.getByText('Home')).toBeInTheDocument()
  })

  afterAll(cleanup)
})
