import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"

import { makeStyles } from "@material-ui/core/styles"

import { Box } from '@material-ui/core';

import routes from "routes.js"

import StaffNavbar from "components/Navbars/StaffNavbar/StaffNavbar"

import styles from "assets/jss/layouts/staffSyle"

const useStyles = makeStyles(styles)

const Staff = () => {

  const classes = useStyles()

  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/staff") {
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
      <StaffNavbar />
      <Box className={classes.contentsWrapper}>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="/staff" to="/staff/list" />
        </Switch>
      </Box>         
    </Box>
  )
}

export default Staff
