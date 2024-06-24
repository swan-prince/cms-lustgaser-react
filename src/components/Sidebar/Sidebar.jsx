import React from "react";
import PropTypes from "prop-types";

import PerfectScrollbar from "perfect-scrollbar";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";

import sidebarStyle from "assets/jss/components/sidebarStyle";

import avatar from "assets/img/footer-logo.png";

var ps;

class SidebarWrapper extends React.Component {
  sidebarWrapper = React.createRef();
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.sidebarWrapper.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    const { className, headerLinks, links, logoWrapper } = this.props;
    return (
      <div className={className} ref={this.sidebarWrapper}>       
        {logoWrapper}
        {headerLinks}
        {links}
      </div>
    );
  }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openAvatar: false,
      miniActive: true,
      ...this.getCollapseStates(props.routes)
    };
  }
  mainPanel = React.createRef();
 
  getCollapseStates = routes => {
    let initialState = {};
    routes.map(prop => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: this.getCollapseInitialState(prop.views),
          ...this.getCollapseStates(prop.views),
          ...initialState
        };
      }
      return null;
    });
    return initialState;
  };
 
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }
 
  activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? "active" : "";
  };
  openCollapse(collapse) {
    var st = {};
    st[collapse] = !this.state[collapse];
    this.setState(st);
  }
 
  createLinks = routes => {
    const { classes } = this.props;
    return routes.map((prop, key) => {
      if (prop.redirect || prop.subView) {
        return null;
      }
      
      const innerNavLinkClasses =
        classes.collapseItemLink +
        " " +
        cx({
          [" " + classes.blue]: this.activeRoute(prop.path)
        });
      const collapseItemMini = classes.collapseItemMini 
      const navLinkClasses =
        classes.itemLink +
        " " +
        cx({
          [" " + classes.blue]: this.activeRoute(prop.path)
        });
      const itemText =
        classes.itemText +
        " " +
        cx({
          [classes.itemTextMini]:
            this.props.miniActive && this.state.miniActive         
        });
      const collapseItemText =
        classes.collapseItemText +
        " " +
        cx({
          [classes.collapseItemTextMini]:
            this.props.miniActive && this.state.miniActive         
        });
      
      return (
        <ListItem
          key={key}
          className={cx(
            { [classes.item]: prop.icon !== undefined },
            { [classes.collapseItem]: prop.icon === undefined }
          )}
        >
          <NavLink
            to={prop.layout + prop.path}
            className={cx(
              { [navLinkClasses]: prop.icon !== undefined },
              { [innerNavLinkClasses]: prop.icon === undefined }
            )}
          >
            {prop.icon !== undefined ? (                           
                prop.icon
              
            ) : (
              <span className={collapseItemMini}>
                {prop.mini}
              </span>
            )}
            <ListItemText
              primary={prop.name}
              disableTypography={true}
              className={cx(
                { [itemText]: prop.icon !== undefined },
                { [collapseItemText]: prop.icon === undefined }
              )}
            />
          </NavLink>
        </ListItem>
      );
    });
  };

  render() {
    const {
      classes,    
      routes      
    } = this.props;
  
    var logoWrapper = (
      <div className={cx(classes.logoWrapper, {[classes.logoWrapperMini]: this.props.miniActive})}>
        <img src={avatar} alt="Logo" width="100%" />
      </div>
    )
        
    var links = (
      <List className={classes.list}>{this.createLinks(routes)}</List>
    );

    const drawerPaper =
      classes.drawerPaper +
      " " +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive        
      });
    const sidebarWrapper =
      classes.sidebarWrapper +
      " " +
      cx({
        [classes.drawerPaperMini]:
          this.props.miniActive && this.state.miniActive,
        [classes.sidebarWrapperWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });

    return (
      <div ref={this.mainPanel}>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="left"
            open={this.props.open}
            classes={{
              paper: drawerPaper
            }}
            onClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true
            }}
          >           
            <SidebarWrapper
              className={sidebarWrapper}             
              logoWrapper={logoWrapper}      
              links={links}
            />          
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            onMouseOver={() => this.setState({ miniActive: false })}
            onMouseOut={() => this.setState({ miniActive: true })}
            anchor="left"
            variant="permanent"
            open
            classes={{
              paper: drawerPaper
            }}
          >
            <SidebarWrapper
              className={sidebarWrapper}
              logoWrapper={logoWrapper}
              links={links}
            />          
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,  
  routes: PropTypes.arrayOf(PropTypes.object),
  miniActive: PropTypes.bool,
  open: PropTypes.bool,
  handleDrawerToggle: PropTypes.func
};

SidebarWrapper.propTypes = {
  className: PropTypes.string,  
  headerLinks: PropTypes.object,
  links: PropTypes.object,
  logoWrapper: PropTypes.object
};

export default withStyles(sidebarStyle)(Sidebar);
