// libs
import * as React from 'react'

// src
import GeographyFilterInner from './GeographyFilterInner'

type Props = {}

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

    return (
      <GeographyFilterInner
        isOpen={isOpen}
        onFilterClick={this.handleFilterClick}
        onDialogClose={this.handleDialogClose}
      />
    )
  }
}
