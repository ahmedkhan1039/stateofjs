// libs
import * as React from 'react'
import Dialog from '@material-ui/core/Dialog'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'

// src
import './GeographyFilterInner.css'
import WorldMap from '../WorldMap'

type Props = {
  isOpen: boolean
  onFilterClick: () => void
  onDialogClose: () => void
}

const GeographyFilterInner = (props: Props) => {
  const { isOpen, onFilterClick, onDialogClose } = props

  return (
    <React.Fragment>
      <IconButton onClick={onFilterClick}>
        <Icon>{'filter_list'}</Icon>
      </IconButton>
      <Dialog fullScreen open={isOpen} onClose={onDialogClose}>
        <Toolbar>
          <IconButton onClick={onDialogClose}>
            <Icon>{'close'}</Icon>
          </IconButton>
        </Toolbar>
        <WorldMap />
      </Dialog>
    </React.Fragment>
  )
}

export default GeographyFilterInner
