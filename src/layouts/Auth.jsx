import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"

import { Box } from '@material-ui/core';
import MarketFooter from "components/Footer/MarketFooter"
import routes from "routes.js"

import styles from "assets/jss/layouts/authStyle"

const useStyles = makeStyles(styles)

const Auth = () => {

  const classes = useStyles()

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
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
    <Box className={classes.wrapper}>    
      <Box className={classes.contentsWrapper}>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="/auth" to="/auth/login" />
        </Switch>
      </Box>
      <MarketFooter />
    </Box>
  )
}

export default Auth
