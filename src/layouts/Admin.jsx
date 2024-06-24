import React, { useState } from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import cx from "classnames";

import PerfectScrollbar from "perfect-scrollbar"
import "perfect-scrollbar/css/perfect-scrollbar.css"

import { makeStyles } from "@material-ui/core/styles"

import { Box } from '@material-ui/core'

import Sidebar from "components/Sidebar"
import AdminNavbar from "components/Navbars/AdminNavbar/AdminNavbar"
import routes from "routes.js"

import styles from "assets/jss/layouts/adminStyle"

var ps;

const useStyles = makeStyles(styles)

const Admin = (props) => {

  const { ...rest } = props;

  const classes = useStyles()

  const [mobileOpen, setMobileOpen] = useState(false);
  const [miniActive, setMiniActive] = useState(false);  
  
  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1
    });
 
  const mainPanel = React.createRef();
  
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  });
 
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/admin") {
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
  const sidebarMinimize = () => {
    setMiniActive(!miniActive);
  };
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  return (
    <Box className={classes.wrapper}>
      <Sidebar 
        routes={routes.filter(route => route.layout === "/admin")}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        miniActive={miniActive}
        {...rest}
      />
      <Box className={mainPanelClasses} ref={mainPanel}>
        <AdminNavbar
          sidebarMinimize={sidebarMinimize.bind(this)}
          miniActive={miniActive}
          brandText={getActiveRoute(routes)}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <Box className={classes.content}>          
          <Switch>
            {getRoutes(routes)}            
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>         
        </Box>
      </Box>
    </Box>
  )
}

export default Admin
