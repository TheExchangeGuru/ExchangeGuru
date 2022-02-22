import React from 'react';
import "./topbar.css";
import { NotificationsNone, Settings, ShowChart} from '@material-ui/icons';

export default function Topbar(){
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">The Exchange Guru</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <ShowChart/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://images.coplusk.net/project_images/208626/image/2019-11-27-210127-burger.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}