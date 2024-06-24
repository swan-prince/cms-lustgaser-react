import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import Market from "layouts/Market"
import Admin from "layouts/Admin"
import Auth from "layouts/Auth"
import "assets/scss/index.scss"

const theme = createTheme({
  palette: {
    green: {
      main: "#1DB954"
    },
    black: {
      main: "#0F1317"
    }
  }
})

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/market" component={Market} />
        <Route path="/admin" component={Admin} />        
        <Route path="/auth" component={Auth} />
        <Redirect from="/" to="/market" />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
