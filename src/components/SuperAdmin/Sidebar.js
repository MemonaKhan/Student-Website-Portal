import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Collapse, Drawer, AppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { ExpandLess, ExpandMore, StarBorder, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@material-ui/icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCog, faCogs, faLaughWink, faSignOutAlt, faTable, faTachometerAlt, faNewspaper, faChild, faCalendar, faSchool, faFileAlt, faThumbsUp, faBlog, faComments } from '@fortawesome/free-solid-svg-icons'


// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

//import '../assets/css/style.css';

import Img from './img/user.jpg';

// import Home from './Home'
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
        height: '70px'
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

const Sidebar = (props) => {
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const [openArticle, setArticleOpen] = React.useState(false);
    const [openBlog, setBlogOpen] = React.useState(false);
    const [openKidStory, setKidStoryOpen] = React.useState(false);
    const [openTips, setTipsOpen] = React.useState(false);
    const [openTalent, setTalentOpen] = React.useState(false);
    const [openEvent, setEventOpen] = React.useState(false);
    const [openSchool, setSchoolOpen] = React.useState(false);
    const [openContext, setContextOpen] = React.useState(false);
    const [openApproval, setApprovalOpen] = React.useState(false);
    const [openTest, setTestOpen] = React.useState(false);
    const [openBOffer, setBOfferOpen] = React.useState(false);
    const [openCourse, setCourseOpen] = React.useState(false);
    const [openCollaboration, setCollaborationOpen] = React.useState(false);
    const [openDept, setDeptOpen] = React.useState(false);
    const [openTeam, setTeamOpen] = React.useState(false);
    const [openBoard, setBoardOpen] = React.useState(false);
    const [openAds, setAdsOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleAll = () => {
        setArticleOpen(false);
        setBlogOpen(false);
        setKidStoryOpen(false);
        setTipsOpen(false);
        setTalentOpen(false);
        setEventOpen(false);
        setSchoolOpen(false);
        setContextOpen(false);
        setApprovalOpen(false);
        setTestOpen(false);
        setBOfferOpen(false);
        setCourseOpen(false);
        setCollaborationOpen(false);
        setDeptOpen(false);
        setTeamOpen(false);
        setBoardOpen(false);
        setAdsOpen(false);

    }
    const handleArticle = () => {
        handleAll();
        setArticleOpen(!openArticle);

    }
    const handleBlog = () => {
        handleAll();
        setBlogOpen(!openBlog);
    }
    const handleKidStory = () => {
        handleAll();
        setKidStoryOpen(!openKidStory);
    }
    const handleTips = () => {
        handleAll();
        setTipsOpen(!openTips);
    }
    const handleTalent = () => {
        handleAll();
        setTalentOpen(!openTalent);
    }
    const handleEvent = () => {
        handleAll();
        setEventOpen(!openEvent);
    }
    const handleSchool = () => {
        handleAll();
        setSchoolOpen(!openSchool);
    }
    const handleContext = () => {
        handleAll();
        setContextOpen(!openContext);
    }
    const handleApproval = () => {
        handleAll();
        setApprovalOpen(!openApproval);
    }
    const handleTest = () => {
        handleAll();
        setTestOpen(!openTest);
    }
    const handleBOffer = () => {
        handleAll();
        setBOfferOpen(!openBOffer);
    }
    const handleCourse = () => {
        handleAll();
        setCourseOpen(!openCourse);
    }
    const handleCollaboration = () => {
        handleAll();
        setCollaborationOpen(!openCollaboration);
    }
    const handleDept = () => {
        handleAll();
        setDeptOpen(!openDept);
    }
    const handleTeam = () => {
        handleAll();
        setTeamOpen(!openTeam);
    }
    const handleBoard = () => {
        handleAll();
        setBoardOpen(!openBoard);
    }
    const handleAds = () => {
        handleAll();
        setAdsOpen(!openAds);
    }
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
                    SUPER ADMIN DASHBOARD
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
                        <MenuItem onClick={() => { handleRoute('/superAdmin/profile'); handleClose() }}>
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
                    <ListItem button key="Dashboard" onClick={() => { handleRoute('/superAdmin/'); handleAll() }} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTachometerAlt} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                    </ListItem>

                    <ListItem button key="Announcement" onClick={() => { handleRoute('/superAdmin/announcement'); handleAll() }} >

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTable} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Announcements" />
                    </ListItem>

                    <ListItem button onClick={handleArticle}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faNewspaper} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Article" />
                        {openArticle ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openArticle} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddArticle" onClick={() => { handleRoute('/superAdmin/article/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="TypeArticle" onClick={() => { handleRoute('/superAdmin/article/type'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Article Type" />
                            </ListItem>
                            <ListItem button key="ViewArticle" onClick={() => { handleRoute('/superAdmin/article/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleBlog}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faBlog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Blog" />
                        {openBlog ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openBlog} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddBlog" onClick={() => { handleRoute('/superAdmin/blog/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="TypeBlog" onClick={() => { handleRoute('/superAdmin/blog/type'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Blog Type" />
                            </ListItem>
                            <ListItem button key="ViewBlog" onClick={() => { handleRoute('/superAdmin/blog/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleKidStory}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faChild} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Kids Story" />
                        {openKidStory ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openKidStory} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddStory" onClick={() => { handleRoute('/superAdmin/story/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="TypeStory" onClick={() => { handleRoute('/superAdmin/story/type'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Story Type" />
                            </ListItem>
                            <ListItem button key="ViewStory" onClick={() => { handleRoute('/superAdmin/story/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleTips}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Technical Tipcs" />
                        {openTips ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openTips} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddTips" onClick={() => { handleRoute('/superAdmin/tips/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewTips" onClick={() => { handleRoute('/superAdmin/tips/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleTalent}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Kid Talent" />
                        {openTalent ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openTalent} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddTalent" onClick={() => { handleRoute('/superAdmin/talent/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewTalent" onClick={() => { handleRoute('/superAdmin/talent/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleEvent}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCalendar} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Event" />
                        {openEvent ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openEvent} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddEvent" onClick={() => { handleRoute('/superAdmin/event/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewEvent" onClick={() => { handleRoute('/superAdmin/event/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleSchool}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faSchool} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="School" />
                        {openSchool ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openSchool} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddSchool" onClick={() => { handleRoute('/superAdmin/school/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewSchool" onClick={() => { handleRoute('/superAdmin/school/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleContext}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faFileAlt} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Quiz Context" />
                        {openContext ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openContext} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddContext" onClick={() => { handleRoute('/superAdmin/context/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewContext" onClick={() => { handleRoute('/superAdmin/context/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleApproval}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faThumbsUp} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Approval" />
                        {openApproval ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openApproval} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="ClientApproval" onClick={() => { handleRoute('/superAdmin/client/approval'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="SchoolApproval" onClick={() => { handleRoute('/superAdmin/school/approval'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="CourseApproval" onClick={() => { handleRoute('/superAdmin/course/approval'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ArticleApproval" onClick={() => { handleRoute('/superAdmin/article/approval'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleTest}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faFileAlt} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Test" />
                        {openTest ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openTest} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddTest" onClick={() => { handleRoute('/superAdmin/test/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewTest" onClick={() => { handleRoute('/superAdmin/test/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleBOffer}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faFileAlt} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Business Offer" />
                        {openBOffer ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openBOffer} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddBOffer" onClick={() => { handleRoute('/superAdmin/boffer/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="TypeBOffer" onClick={() => { handleRoute('/superAdmin/boffer/type'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Type" />
                            </ListItem>
                            <ListItem button key="ViewBOffer" onClick={() => { handleRoute('/superAdmin/boffer/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleCourse}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faCog} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Course" />
                        {openCourse ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCourse} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddCourse" onClick={() => { handleRoute('/superAdmin/course/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewCourse" onClick={() => { handleRoute('/superAdmin/course/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleCollaboration}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faChild} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Collaboration" />
                        {openCollaboration ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openCollaboration} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddCollaboration" onClick={() => { handleRoute('/superAdmin/collaboration/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewCollaboration" onClick={() => { handleRoute('/superAdmin/collaboration/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button key="SchoolComplain" onClick={() => { handleRoute('/superAdmin/complain/school'); handleAll() }}>

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTable} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="School Complain" />
                    </ListItem>

                    <ListItem button key="ClinetComplain" onClick={() => { handleRoute('/superAdmin/complain/client'); handleAll() }}>

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faTable} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Client Complain" />
                    </ListItem>

                    <ListItem button onClick={handleDept}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faChild} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Add Departments" />
                        {openDept ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openDept} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="Team" onClick={() => { handleRoute('/superAdmin/dept/team/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Team" />
                            </ListItem>
                            <ListItem button key="AdvisoryBoard" onClick={() => { handleRoute('/superAdmin/dept/adBoard/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Advisory Board" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleTeam}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faChild} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Team" />
                        {openTeam ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openTeam} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddTeam" onClick={() => { handleRoute('/superAdmin/team/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewTeam" onClick={() => { handleRoute('/superAdmin/team/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button onClick={handleBoard}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faChild} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Advisory Board" />
                        {openBoard ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openBoard} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddBoard" onClick={() => { handleRoute('/superAdmin/adBoard/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewBoard" onClick={() => { handleRoute('/superAdmin/adBoard/view'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="View" />
                            </ListItem>
                        </List>
                    </Collapse>

                    <ListItem button key="ClientFeedback" onClick={() => { handleRoute('/superAdmin/clientfeedback'); handleAll() }}>

                        <ListItemIcon>
                            <FontAwesomeIcon icon={faComments} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <SendIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Client Feedback" />
                    </ListItem>

                    <ListItem button onClick={handleAds}>
                        <ListItemIcon>
                            <FontAwesomeIcon icon={faChild} style={{ color: 'white', fontSize: '1.75em' }} />
                            {/* <InboxIcon /> */}
                        </ListItemIcon>
                        <ListItemText primary="Website Ads" />
                        {openAds ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openAds} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button key="AddWebAd" onClick={() => { handleRoute('/superAdmin/ad/add'); handleAll() }} className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Add" />
                            </ListItem>
                            <ListItem button key="ViewWebAd" onClick={() => { handleRoute('/superAdmin/ad/view'); handleAll() }} className={classes.nested}>
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
export default withRouter(Sidebar);