import { Outlet, Link } from "react-router-dom";
import logo from "../img/logoLombardInternationalAssurance.jpeg";
import React from "react";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="src/pages/Layout#"><img className="img-fluid" src={logo} alt="logo" width="200" height="200"/></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="">Reload</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/Workers">Workers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/EnvironmentDetails">Environment Details</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/EnvironmentsSummary">Environments Summary</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Teams">Teams</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Departments">Departments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Alerts">Alerts</a>
                        </li>

                    </ul>
                </div>
            </nav>


            <Outlet />
        </>
    )
};

export default Layout;