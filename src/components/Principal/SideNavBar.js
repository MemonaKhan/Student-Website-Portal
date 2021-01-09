import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Collapse, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { ExpandLess, ExpandMore, StarBorder, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog, faCogs, faLaughWink, faPencilAlt, faSignOutAlt, faTable, faTachometerAlt } from '@fortawesome/free-solid-svg-icons'


// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './assets/css/style.css';
import Img from './img/user.jpg';
// import Home from './Home';
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
        backgroundColor:'white',

    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor:'white',
    },
    menuButton: {
        marginRight: 36,
        color:"#5DC560",
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
        // backgroundColor: '#45a148',
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
    const [openArticle, setArticleOpen] = React.useState(false);
    //const [openTest, setTestOpen] = React.useState(false);
    const [openRoom, setroomOpen] = React.useState(false);
    const [openComp, setcompOpen] = React.useState(false);
    const [openAnnouncement, setAnnounceOpen] = React.useState(false);
    const [openClass, setclassOpen]= React.useState(false);
    const [openSec, setsectionOpen]= React.useState(false);
    const [opencourse, setcourseOpen]= React.useState(false);
    const [openregister, setregisterOpen]= React.useState(false);
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleAll = () =>{
        setArticleOpen(false);
        setregisterOpen(false);
        setroomOpen(false);
        setcompOpen(false);
        setAnnounceOpen(false);
        setclassOpen(false);
        setcourseOpen(false);
        setsectionOpen(false);
    }
    const handleclass = () =>{
        setclassOpen(!openClass);
        setArticleOpen(false);
        setregisterOpen(false);
        setroomOpen(false);
        setcompOpen(false);
        setAnnounceOpen(false);
        setcourseOpen(false);
        setsectionOpen(false);
    }
    const handleArticle = () => {
        setArticleOpen(!openArticle);
        setregisterOpen(false);
        setroomOpen(false);
        setcompOpen(false);
        setAnnounceOpen(false);
        setclassOpen(false);
        setcourseOpen(false);
        setsectionOpen(false);
    };
  
    const handlecourse = () => {
        setcourseOpen(!opencourse);
        setArticleOpen(false);
        setregisterOpen(false);
        setroomOpen(false);
        setcompOpen(false);
        setAnnounceOpen(false);
        setclassOpen(false);
        setsectionOpen(false);
    };
    const handleregister = () => {
        setregisterOpen(!openregister);
        setArticleOpen(false);
        setroomOpen(false);
        setcompOpen(false);
        setAnnounceOpen(false);
        setclassOpen(false);
        setcourseOpen(false);
        setsectionOpen(false);
    };
    const handleroom = () => {
        setroomOpen(!openRoom);
        setArticleOpen(false);
        setregisterOpen(false);
        setcompOpen(false);
        setAnnounceOpen(false);
        setclassOpen(false);
        setcourseOpen(false);
        setsectionOpen(false);
    };
    const handleComplain = () => {
        setcompOpen(!openComp);
        setArticleOpen(false);
        setregisterOpen(false);
        setroomOpen(false);
        setAnnounceOpen(false);
        setclassOpen(false);
        setcourseOpen(false);
        setsectionOpen(false);
    };
    const handleAnnoun = () => {
        setAnnounceOpen(!openAnnouncement);
        setArticleOpen(false);
        setregisterOpen(false);
        setroomOpen(false);
        setcompOpen(false);
        setclassOpen(false);
        setcourseOpen(false);
        setsectionOpen(false);
    };
    const handlesection = () => {
        setsectionOpen(!openSec);
        setArticleOpen(false);
        setregisterOpen(false);
        setroomOpen(false);
        setcompOpen(false);
        setAnnounceOpen(false);
        setclassOpen(false);
        setcourseOpen(false);
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
                <Toolbar style={{ backgroundColor: "white", justifyContent:'space-between' }}>
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
                    PRINCIPAL DASHBOARD   
                    </Typography>
                    <Button className="navdropdown" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>  Prof. Kanhaiyalal Nagpal  <img src={Img}/> </Button> 
                   
      <Menu
      style={{marginTop:'1.75em'}}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {handleRoute('/principal/profile');handleClose()}}>
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
                    <ListItem button key="Dashboard" onClick={() => {handleRoute('/principal/');handleAll()}} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTachometerAlt} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button onClick={handleArticle}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faPencilAlt} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Article" />
                        {openArticle ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

    
                    <Collapse in={openArticle} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddArticle" onClick={() => {handleRoute('/principal/article/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewArticle" onClick={() => {handleRoute('/principal/article/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                        {/* start room */}
                    <ListItem button onClick={handleroom}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Room" />
                        {openRoom ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openRoom} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="Addroom" onClick={() => {handleRoute('/principal/room/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="Viewroom" onClick={() => {handleRoute('/principal/room/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>

                            <ListItem button key="unallocate_all_rooms" onClick={() => {handleRoute('/principal/room/remove');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Unallocate All" />
                            </ListItem>
                           
            
                        </List>
                    </Collapse>
                    
                        {/* end room */}


                           {/* start complain */}
                    <ListItem button onClick={handleComplain}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Complains" />
                        {openComp ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openComp} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="Addcomplain" onClick={() => {handleRoute('/principal/complain/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="Viewcomplains" onClick={() => {handleRoute('/principal/complain/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                          
                        </List>
                    </Collapse>
                            {/* end complain */}

                     {/* announcemnet start */}

                    <ListItem button onClick={handleAnnoun}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Announcement" />
                        {openAnnouncement ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openAnnouncement} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="ViewAnnouncement" onClick={() => {handleRoute('/principal/announcement/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                            <ListItem button key="addAnnouncement" onClick={() => {handleRoute('/principal/announcement/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            </List>
                            </Collapse>

                    {/* start class */}

                    <ListItem button onClick={handleclass}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Class" />
                        {openClass ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openClass} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="addclass" onClick={() => {handleRoute('/principal/class/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                            <ListItem button key="viewclass" onClick={() => {handleRoute('/principal/class/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            </List>
                            </Collapse>

                                {/* end class */}


                        {/* start section */}
                        <ListItem button onClick={handlesection}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Section" />
                        {openSec ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openSec} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="addsection" onClick={() => {handleRoute('/principal/section/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="viewsection" onClick={() => {handleRoute('/principal/section/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                            </List>
                            </Collapse>

                        {/* end section */}


                        {/* start course */}
                        <ListItem button onClick={handlecourse}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Course" />
                        {opencourse ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={opencourse} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="addcourse" onClick={() => {handleRoute('/principal/course/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="addcourseassign" onClick={() => {handleRoute('/principal/principal/course/assign');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Assign" />
                            </ListItem>
                            
                            
                            <ListItem button key="enroll" onClick={() => {handleRoute('principal//enroll/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Enrollment" />
                            </ListItem>


                            <ListItem button key="unassignall" onClick={() => {handleRoute('/principal/unassignall/remove');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Unenroll All" />
                            </ListItem>

                            </List>
                            </Collapse>
                        {/* end course */}

                        {/* start register */}
                        <ListItem button onClick={handleregister}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Register" />
                        {openregister ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openregister} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="addteacher" onClick={() => {handleRoute('/principal/teacher/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add Teacher" />
                            </ListItem>
                            <ListItem button key="addstudent" onClick={() => {handleRoute('/principal/student/add');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add Student" />
                            </ListItem>
                            
                            
                            <ListItem button key="viewstudent" onClick={() => {handleRoute('/principal/student/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View Student" />
                            </ListItem>


                            <ListItem button key="viewteacher" onClick={() => {handleRoute('/principal/teacher/view');handleAll()}} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View Teacher" />
                            </ListItem>

                            </List>
                            </Collapse>
                        {/* end register */}

                    <ListItem button key="Result" onClick={() => {handleRoute('/principal/result');handleAll()}}>

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTable} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Result" />
                    </ListItem>


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