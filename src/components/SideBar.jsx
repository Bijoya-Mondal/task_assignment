import React from "react";
import './SideBar.css'
import {ReactComponent as Logo} from '../assets-test1/side-bar1/logo@0 1.svg'
import { ReactComponent as Home } from '../assets-test1/side-bar1/Home.svg'
import {ReactComponent as Notification } from '../assets-test1/side-bar1/Notifications.svg'
import {ReactComponent as Calendar } from '../assets-test1/side-bar1/Calendar today.svg'
import {ReactComponent as Stats }  from '../assets-test1/side-bar1/Show chart.svg'
import {ReactComponent as Person } from '../assets-test1/side-bar1/Person.svg'
import {ReactComponent as Settings} from '../assets-test1/side-bar1/Vector.svg'

function SideBar (){
    
    return(
       
            
        <div className="side-bar">
            
            <div className="sidebar-top">
            <Logo id='sidebar-icon-logo' width='40px' height='40px'/>
            <Home className="sidebar-icons" width='40px' height='40px' />
            <Notification className="sidebar-icons" width='40px' height='40px' />
            <Calendar className="sidebar-icons" width='40px' height='40px' />
            <Stats className="sidebar-icons" width='40px' height='40px' />
            <Person className="sidebar-icons" width='40px' height='40px' />
            
            </div>
            
            <div className="sidebar-bottom">
            <Settings className="sidebar-icons" width='40px' height='40px'/>
            
            </div>
        
        </div>

    )
}

export default SideBar;