// libs
import * as React from 'react'

// src
import GeographyFilterInner from './GeographyFilterInner'
import { Country } from '../../types'

type Props = {
  enabledCountries: Country[]
  onCountryClick: (country: Country) => void
}

type State = {
  isOpen: boolean
}

export default class GeographyFilter extends React.Component<Props, State> {
  state = { isOpen: false }

  handleFilterClick = () => {
    this.setState(() => ({ isOpen: true }))
  }

  handleDialogClose = () => {
    this.setState(() => ({ isOpen: false }))
  }

  render() {
    const { isOpen } = this.state
    const { enabledCountries, onCountryClick } = this.props

    return (
      <GeographyFilterInner
        isOpen={isOpen}
        enabledCountries={enabledCountries}
        onCountryClick={onCountryClick}
        onFilterClick={this.handleFilterClick}
        onDialogClose={this.handleDialogClose}
      />
    )
  }
}
