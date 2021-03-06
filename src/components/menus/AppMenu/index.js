import React from "react";
import SidebarLink from '../SidebarLink';

const AppMenu = () => {
    return (
        <nav className="sidebar-nav">
            <ul className="nav">
                <li className="nav-title">Application</li>
                <li className="nav-item">
                    <SidebarLink className={"nav-link"+(window.location.pathname==='/'?" active":"")} to="/">
                        <i className="nav-icon fa fa-fire"></i> Dashboard
                    </SidebarLink>
                </li>
                <li className="nav-title">User</li>
                <li className="nav-item">
                    <SidebarLink className={"nav-link"+(window.location.pathname.startsWith('/user/profile')?" active":"")} to="/user/profile">
                        <i className="nav-icon fa fa-user"></i> Profile
                    </SidebarLink>
                </li>
                <li className="nav-item">
                    <SidebarLink className={"nav-link"+(window.location.pathname.startsWith('/user/log')?" active":"")} to="/user/log">
                        <i className="nav-icon fa fa-list"></i> Activity Logs
                    </SidebarLink>
                </li>
            </ul>
        </nav>
    )
}

export default AppMenu;