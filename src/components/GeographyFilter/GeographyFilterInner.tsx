import * as React from 'react'

// mui
import Dialog from '@material-ui/core/Dialog'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'

// src
import WorldMap from '../WorldMap'
import './GeographyFilterInner.css'

type Props = {
  isOpen: boolean
  onFilterClick: () => void
  onDialogClose: () => void
}

const GeographyFilterInner = (props: Props) => {
  const { isOpen = false, onFilterClick, onDialogClose } = props

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
