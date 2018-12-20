// libs
import * as React from 'react'

// src
import GeographyFilterInner from './GeographyFilterInner'


interface IState {
  isOpen: boolean
}

export default class GeographyFilter extends React.Component<{}, IState> {
  public state = { isOpen: false }

  public handleFilterClick = () => {
    this.setState(() => ({ isOpen: true }))
  }

  public handleDialogClose = () => {
    this.setState(() => ({ isOpen: false }))
  }

  public render() {
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
