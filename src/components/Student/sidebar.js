import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
// import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import TimelineIcon from '@material-ui/icons/Timeline';
import SubjectIcon from '@material-ui/icons/Subject';
// import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import DashboardIcon from '@material-ui/icons/Dashboard';

// import { makeStyles } from '@material-ui/core/styles';
import {IconButton, Divider, List, ListItem, ListItemIcon, ListItemText, Collapse} from  "@material-ui/core"
// import clsx from 'clsx';
import { withRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./images/logo.png"

function SideBar(props) {
    const open = props.open
    const {history} = props
    const [item, setItem] = React.useState({})
    const handleOpen = (name) => {
        setItem({[name]: !item[name]})

        }
    const Menu = [
        {
            name: "Dashboard",
            icon: <DashboardIcon />,
            onClick: () => history.push('/student/')
        },
        {
            name: "Assignement",
            icon: <AssignmentIcon />,
            subMenu: [{
                subItemText: "View",
                subItemOnClick:() => history.push('/student/viewAssignment')
            }],
            onClick:() => handleOpen
        },
        {
            name: "Discussion",
            icon: <QuestionAnswerIcon />,
            onClick: ()=> history.push('/student/discussion')
        },
        {
            name: "Test",
            icon: <TimelineIcon />,
            subMenu:[{
                subItemText: "View Online Test",
                subItemOnClick:() => history.push('/student/viewTest')
                    },
                    {
                        subItemText: "View Uploaded Test",
                        subItemOnClick:() =>history.push('/student/viewUploadedTest')
                    },
                ],
        },
        {
            name: "Lecture",
            icon: <SubjectIcon />,
            onClick: ()=>history.push('/student/lectures')
        },
        {
            name: "Complains",
            icon: <AnnouncementIcon />,
            subMenu:[{
                subItemText: "Add",
                subItemOnClick:() => history.push('/student/addComplain')
                    },
                    {
                        subItemText: "View",
                        subItemOnClick:() => history.push('/student/viewComplain')
                    },
                ],
        },
        {
            name: "Kid Story",
            icon: <SubjectIcon />,
            subMenu:[{
                subItemText: "Kid Story",
                subItemOnClick:() => history.push('/student/kidstory')
                    },
                    {
                        subItemText: "Kid Story Type",
                        subItemOnClick:()=>history.push('/student/kidStoryType')
                    },
                ]
        },
        {
            name: "Articles",
            icon: <SubjectIcon />,
            subMenu:[{
                subItemText: "Articles",
                subItemOnClick:()=>history.push('/student/articles')
                    },
                    {
                        subItemText: "Articles type",
                        subItemOnClick:()=>history.push('/student/articlesType')
                    },
                ],
        },
        {
            name: "Announcement",
            icon: <QuestionAnswerIcon />,
            onClick: ()=>history.push('/student/announcement')
        },
    ]

    return (
        
                <div className={` sidebar`}>
                    <div className="logo " >
                            <img  src={Logo} alt="Logo-image" width="80px" height="60px" className="flex-grow-1" />
                           
                            <IconButton className=" text-light" onClick={props.close}>
                                <CloseIcon /> 
                            </IconButton>
                    </div>
                    <Divider />
                    <List className="text-light" style={{width: '30vh'}}>
          {Menu.map((navItem) => {
              const {name, icon, subMenu, onClick} = navItem;
              return(
                  <div key={name}>
                  {subMenu ?
                    (<>
                        <ListItem key={name} button onClick={() =>handleOpen(name)}>
                        <ListItemIcon className="text-light">{icon}</ListItemIcon>
                            <ListItemText primary={name} />
                            {item[name] ? <ExpandMoreIcon /> : <ChevronRightIcon/>}
                        </ListItem>
                        <Collapse in={item[name]} unmountOnExit component="li">
                            <List className={`  m-3  rounded ${open? '': 'd-none'}`} disablePadding>
                                {subMenu.map((subItem) => {
                                    const {subItemText, subItemOnClick} = subItem
                                    return(
                                <ListItem button key={subItemText} onClick={subItemOnClick}>
                                    <ListItemText >
                                        {subItemText}
                                    </ListItemText>
                                </ListItem>)})}
                            </List>
                        </Collapse></>
                    ):
                    (
                  <ListItem button key={name} onClick={onClick}>
                      <ListItemIcon className="text-light">{icon}</ListItemIcon>
                      <ListItemText>{name}</ListItemText>
                  </ListItem>)}</div>
              )
          })}
          
                </List>
                <div>
                    <IconButton onClick={props.close}>
                        <ChevronRightIcon />
                 </IconButton>
          </div>
                </div>
    )
}

export default withRouter(SideBar);
