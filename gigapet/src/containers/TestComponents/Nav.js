import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircleSharp";
import CardMedia from "@material-ui/core/CardMedia";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import {Link }from "react-router-dom";
import Signup from "../Signup/Signup";
import Modal from "@material-ui/core/Modal";
const styles = MuiTheme => ({
  root: {
    flexGrow: 1
  },
  navbar: {
    maxWidth: MuiTheme.spacing.unit * 125,
    margin: "0 auto",
    width: "100%",
    justifyContent: "space-between",
    padding: 0
  },
  media: {
    height: 42,
    width: 143,
    objectFit: "cover"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    backgroundColor: "white",
    color: "#393939"
  },
  sectionDesktop: {
    display: "none",
    [MuiTheme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center"
    }
  },
  sectionMobile: {
    display: "flex",
    [MuiTheme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  accountCircleOutlined: {
    color: "rgba(0, 0, 0, 0.54)"
  },
  accountCircleOutlinedInactive: {
    color: "rgba(0, 0, 0, 0.26)"
  },
  navbarlistItems: {
    display: "flex",
    alignItems: "center"
  },
  navbarItem: {
    padding: 15
  },
  paper: {
    position: "absolute",
    width: MuiTheme.spacing.unit * 60,
    backgroundColor: MuiTheme.palette.background.paper,
    boxShadow: MuiTheme.shadows[5],
    marginTop: 100,
    padding: MuiTheme.spacing.unit * 4
  },
  container: {
    marginTop: 250,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  navbarItemMobile: {
    padding: 8
  }
});


class Nav extends React.Component {
  state = {
    auth: false,
    anchorEl: null,
    mobileMoreAnchorEl: null,
    signupModal: false,
    me: true
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  openSignUp = () => {
    this.setState({ signupModal: true });
  };
  closeSignUp = () => {
    this.setState({ signupModal: false });
  };

  toggleSignUp = () => {
    this.setState(prevStep => {
      prevStep.signupModal = !prevStep.signupModal;
    });
  };

  componentDidMount = () => {};

  render() {
    const { classes } = this.props;
    const { auth, anchorEl, mobileMoreAnchorEl, signupModal, me } = this.state;
    const open = Boolean(anchorEl);

    const isMenuOpen = Boolean(anchorEl);
    const isSignUpOpen = Boolean(signupModal);

    return (
          <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar className={classes.navbar}>
                <div>
                  <Link href="/">
                    <a>
                      <CardMedia
                        className={classes.media}
                        image="../static/assets/logo.png"
                        title="Go Live Auction"
                      />
                    </a>
                  </Link>
                </div>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                  <div className={classes.navbarlistItems}>
                    {!me && (
                      <>
                        <Button onClick={this.openSignUp}>
                          <Typography variant="h5">JOIN</Typography>
                        </Button>
                        <Modal
                          aria-labelledby="JOIN"
                          aria-describedby="Sign Up Form"
                          open={this.state.signupModal}
                          onClose={this.closeSignUp}
                        >
                          <Signup classes={classes} />
                        </Modal>
                        <Link href="/signinPage">
                          <a className={classes.navbarItem}>
                            <Typography variant="h5">LOG IN</Typography>
                          </a>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <div className={classes.grow} />
                  <div className={classes.sectionDesktop}>
                    <div className={classes.navbarlistItems}>
                      {me && (
                        <>
                          <Link href="/live-stream-requests">
                            <a className={classes.navbarItem}>
                              <Typography variant="h5">
                                Stream Requests
                              </Typography>
                            </a>
                          </Link>
                          <Link href="/permissions">
                            <a className={classes.navbarItem}>
                              <Typography variant="h5">
                                Permissions
                              </Typography>
                            </a>
                          </Link>
                        </>
                      )}

                      {me && (
                        <>
                          <Link href="/liveAuctions">
                            <a className={classes.navbarItem}>
                              <Typography variant="h5">
                                Start Live Auctions
                              </Typography>
                            </a>
                          </Link>
                          <Link href="/sell">
                            <a className={classes.navbarItem}>
                              <Typography variant="h5">Sell</Typography>
                            </a>
                          </Link>
                          <Link href="/my-store">
                            <a className={classes.navbarItem}>
                              <Typography variant="h5">My Store</Typography>
                            </a>
                          </Link>
                        </>
                      )}
                      {me && (
                        <>
                          <Link href="/live-auctions">
                            <a className={classes.navbarItem}>
                              <Typography variant="h5">
                                Live Auctions
                              </Typography>
                            </a>
                          </Link>
                        </>
                      )}
                      {me && (
                        <>
                          <Link href="/orders">
                            <a className={classes.navbarItem}>
                              <Typography variant="h5">Orders</Typography>
                            </a>
                          </Link>
                        </>
                      )}
                    </div>
                    {me && (
                      <>
                        <IconButton
                          aria-owns={open ? "menu-appbar" : undefined}
                          aria-haspopup="true"
                          onClick={this.handleMenu}
                          color="inherit"
                        >
                          <AccountCircle
                            className={classNames(
                              classes.accountCircleOutlined,
                              classes.accountCircleOutlinedInactive
                            )}
                          />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right"
                          }}
                          open={open}
                          onClose={this.handleClose}
                        >
                          <MenuItem onClick={this.handleClose}>
                            Profile
                          </MenuItem>
                          <MenuItem onClick={this.handleClose}>
                            My account
                          </MenuItem>
                          <MenuItem>
                            <button>
                                Sign Out
                            </button>
                          </MenuItem>
                        </Menu>
                      </>
                    )}
                  </div>
                </div>
                <div className={classes.sectionMobile}>
                  <IconButton
                    aria-haspopup="true"
                    onClick={this.handleMobileMenuOpen}
                    color="inherit"
                  >
                    <MenuIcon
                      className={classNames(
                        classes.accountCircleOutlined,
                        classes.accountCircleOutlinedInactive
                      )}
                    />
                  </IconButton>
                </div>
              </Toolbar>
            </AppBar>
          </div>
    );
  }
}

export default withStyles(styles)(Nav);
