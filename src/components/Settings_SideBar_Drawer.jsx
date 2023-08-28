import React from "react";
import './Settings_SideBar_Drawer.css';
import left_arrow from '../assets-test1/side-bar2/Vector.svg'
import { ReactComponent as Edit_icon } from "../assets-test1/side-bar2/Vector-1.svg";
import { ReactComponent as Notif_icon } from "../assets-test1/side-bar2/Vector-2.svg";
import { ReactComponent as Lock_icon } from "../assets-test1/side-bar2/Vector-3.svg";
import { ReactComponent as Gear_icon } from "../assets-test1/side-bar2/Vector-4.svg";
import { ReactComponent as FAQ_icon } from "../assets-test1/side-bar2/Vector-5.svg";


function  Settings_SideBar_Drawer(){

    return (
        <div className="sidebar-drawer">
            
            <div className="sd-header">
                
                <img src={left_arrow} className="sd-icons"/>
                <label style={{fontSize:'20px', fontWeight:'bold'}}>settings</label>

            </div>
            
            <div className="list-options">
                
                <div className="options">
                    <Edit_icon className="sd-icons"/>
                    <label className="options-label">Edit Profile</label>
                </div>

                <div className="options">
                    <Notif_icon className="sd-icons"/>
                    <label className="options-label">Notification</label>
                </div>

                <div className="options">
                    <Lock_icon className="sd-icons"/>
                    <label className="options-label">Security</label>
                </div>

                <div className="options">
                    <Gear_icon className="sd-icons"/>
                    <label className="options-label">Appearance</label>
                </div>

                <div className="options">
                    <FAQ_icon className="sd-icons"/>
                    <label className="options-label">Help</label>
                </div>
            </div>

        </div>
    )
}

export default Settings_SideBar_Drawer;