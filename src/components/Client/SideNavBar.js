import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ListSubheader, Collapse, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { ExpandLess, ExpandMore, StarBorder, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCoffee, faEnvelopeOpen, faCogs, faComments, faCreditCard, faLaughWink, faNewspaper, faPencilAlt, faSignOutAlt, faTable, faTachometerAlt, faUser } from '@fortawesome/free-solid-svg-icons'


import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import './assets/css/style.css';

import Img from './img/user.jpg';

import Home from './Home'
import { withRouter } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'white',
        height:'70px',


    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: 'white',
    },
    menuButton: {
        marginRight: 36,
        color: "#5DC560",
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        // backgroundColor:'green',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#5DC560',
        color: 'white'


    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        backgroundColor: '#5DC560',
        color: 'white'


    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    listroot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: '#5DC560',
        color: 'white'
        // backgroundColor: theme.palette.background.paper,

    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const SideNavBar = (props) => {
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [openCourses, setCoursesOpen] = React.useState(false);
    const [openComplain, setComplainOpen] = React.useState(false);
    const [openTips, setTipsOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleAll = () => {
        setCoursesOpen(false);
        setComplainOpen(false);
        setTipsOpen(false);
    }
    const handleCourses = () => {
        setCoursesOpen(!openCourses);
        setComplainOpen(false);
        setTipsOpen(false);
    };
    const handleComplain = () => {
        setComplainOpen(!openComplain);
        setCoursesOpen(false);
        setTipsOpen(false);
    };
    const handleTips = () => {
        setTipsOpen(!openTips);
        setCoursesOpen(false);
        setComplainOpen(false);
    };
    const handleRoute = (loc) => {
        console.log(history);
        history.push(loc);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                
            >
                <Toolbar style={{ backgroundColor: "white", justifyContent: 'space-between' }}>
                    <IconButton
                        color="#5DC560"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap style={{ color: '#5DC560' }}>
                        <FontAwesomeIcon icon={faLaughWink} style={{ color: '#5DC560', fontSize: '1.75em' }} />&nbsp;
                    CLIENT DASHBOARD
                    </Typography>
                    <Button className="navdropdown" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Prof. Kanhaiyalal Nagpal <img src={Img} />
                    </Button>
                    <Menu
                        style={{ marginTop: '1.75em' }}
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => { handleRoute('/client/profile'); handleClose() }}>
                            <FontAwesomeIcon icon={faCogs} style={{ color: '#C0C0C0', fontSize: '1em' }} />
            &nbsp;&nbsp;&nbsp;Settings</MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <FontAwesomeIcon icon={faSignOutAlt} style={{ color: '#C0C0C0', fontSize: '1em' }} />
        &nbsp;&nbsp;&nbsp;&nbsp;Logout</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                // open=true
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}

            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon style={{ color: 'white' }} /> : <ChevronLeftIcon style={{ color: 'white' }} />}
                    </IconButton>
                </div>

                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classes.listroot}
                >
                    <ListItem button key="Dashboard" onClick={() => { handleRoute('/client/'); handleAll() }} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTachometerAlt} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button key="Home" onClick={() => { handleRoute('#'); handleAll() }} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faNewspaper} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem button key="Article" onClick={() => { handleRoute('/client/article/add'); handleAll() }} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faNewspaper} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Article" />
                    </ListItem>

                    <ListItem button onClick={handleCourses}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Courses" />
                        {openCourses ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCourses} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="Courses" onClick={() => { handleRoute('/client/courses'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Courses" />
                            </ListItem>
                            <ListItem button key="MyCourses" onClick={() => { handleRoute('/client/my/courses'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="My Courses" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button key="Result" onClick={() => { handleRoute('/client/result/view'); handleAll() }} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faEnvelopeOpen} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Result" />
                    </ListItem>

                    <ListItem button key="Payment" onClick={() => { handleRoute('/client/paymentform'); handleAll() }} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCreditCard} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Payment" />
                    </ListItem>

                    <ListItem button key="Feedback" onClick={() => { handleRoute('/client/feedback/add'); handleAll() }} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faComments} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Feedback" />
                    </ListItem>

                    <ListItem button onClick={handleComplain}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Complain" />
                        {openComplain ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openComplain} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddComplain" onClick={() => { handleRoute('/client/complain/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add Complain" />
                            </ListItem>
                            <ListItem button key="ViewComplain" onClick={() => { handleRoute('/client/complain/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View Complain" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleTips}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Technical Tipcs" />
                        {openTips ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openTips} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddTips" onClick={() => { handleRoute('/client/tips/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewTips" onClick={() => { handleRoute('/client/tips/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                </List>



            </Drawer>
            {/* <main className={classes.content}>
                <div className={classes.toolbar} />
                <Home />
            </main> */}
        </div>
    );
}

// export default SideNavBar;
export default withRouter(SideNavBar);