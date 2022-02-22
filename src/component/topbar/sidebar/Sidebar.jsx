import React from 'react';
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, Home } from '@material-ui/icons';

export default function Sidebar() {
  return (
    < div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems active">
                        <Home className="sidebarIcon" />
                        Home
                    </li>
                    <li className="sidebarListItems">
                        <Timeline className="sidebarIcon"/>
                        Analytics
                    </li>
                    <li className="sidebarListItems">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems active">
                        <LineStyle className="sidebarIcon" />
                        User
                    </li>
                    <li className="sidebarListItems">
                        <Timeline className="sidebarIcon"/>
                        Transactions
                    </li>
                    <li className="sidebarListItems">
                        <TrendingUp className="sidebarIcon"/>
                        Manage
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItems active">
                        <LineStyle className="sidebarIcon" />
                        Messages
                    </li>
                    <li className="sidebarListItems">
                        <Timeline className="sidebarIcon"/>
                        Feedback
                    </li>
                    <li className="sidebarListItems">
                        <TrendingUp className="sidebarIcon"/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
