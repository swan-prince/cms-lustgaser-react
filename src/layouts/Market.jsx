import React from 'react'
import { Switch, Route } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import MarketNavbar from "components/Navbars/MarketNavbar"
import MarketFooter from "components/Footer/MarketFooter"

import CartContextProvider from "context/CartContext"

import routes from "routes.js"

import styles from "assets/jss/layouts/marketStyle"

const useStyles = makeStyles(styles)

export default function Market() {

  const classes = useStyles()

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/market") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <CartContextProvider>
      <Box>
        <MarketNavbar />
        <Box className={classes.contentSection}>
          <Switch>
            {getRoutes(routes)}
          </Switch>
        </Box>
        <MarketFooter />
      </Box>
    </CartContextProvider>
  )
}
