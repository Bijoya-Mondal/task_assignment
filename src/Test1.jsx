import React from "react";
import './Test1.css';
import SideBar from "./components/SideBar";
import Settings_SideBar_Drawer from "./components/Settings_SideBar_Drawer";
import EditProfile_Page from "./components/EditProfile_Page";

function Test1 (){

    return (
        <div className="test1-main">
        <SideBar />
        <Settings_SideBar_Drawer />
        <EditProfile_Page />
        </div>
    )
}

export default Test1;