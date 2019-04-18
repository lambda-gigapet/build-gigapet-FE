import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import MenuList from '@material-ui/core/MenuList';
// import Signup from '../Signup/Signup'
// import Home from '../MainPage/Home'
// import Login from '../Login'

const styles =(theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white,
      },
    },
  },
  menuList: {
      display: 'flex',
      justifyContent: 'center'
    },
    primary: {
        color: 'white'
  }
});
class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      auth: true,
      anchorEl: null,
    }
  }
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {
    const { classes, toggleRegister } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className='nav'>
              <AppBar position="static">
          <Toolbar>
            {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton> */}

            <Typography variant="h6" color="inherit">
            {/* <Link to='/home'> */}
              GigaPet
            {/* </Link> */}
            </Typography>
            {/* <Typography variant="h6" color="inherit" className={classes.grow}>
              Photos
            </Typography> */}
                  <MenuList className={classNames(classes.menuList, classes.root)} component='ul'>
                    <MenuItem className={classes.menuItem}>
                    
                    <ListItemText  onClick={()=> toggleRegister()} classes={{ primary: classes.primary }} inset primary="Register My Child" />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>

                    <ListItemText classes={{ primary: classes.primary }} inset primary="Track Progress" />
                    </MenuItem>
                    <MenuItem className={classes.menuItem}>
                    
                    <ListItemText classes={{ primary: classes.primary }} inset primary="Pet" />
                    </MenuItem>
                </MenuList>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        </div>
    )
  }
}






export default withStyles(styles)(Nav)