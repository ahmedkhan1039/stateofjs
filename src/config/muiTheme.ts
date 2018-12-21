// libs
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

export default createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    fontFamily: ['Helvetica', 'Roboto', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    htmlFontSize: 16,
    useNextVariants: true,
  },
})
