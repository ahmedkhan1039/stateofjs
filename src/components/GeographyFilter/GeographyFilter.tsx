// libs
import * as React from 'react'

// src
import { Country } from '../../types'
import GeographyFilterInner from './GeographyFilterInner'

type Props = {
  enabledCountries: Country[]
  onCountryClick: (country: Country) => void
}

type State = {
  isOpen: boolean
}

export default class GeographyFilter extends React.Component<Props, State> {
  public state = { isOpen: false }

  public handleFilterClick = () => {
    this.setState(() => ({ isOpen: true }))
  }

  public handleDialogClose = () => {
    this.setState(() => ({ isOpen: false }))
  }

  public render() {
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
