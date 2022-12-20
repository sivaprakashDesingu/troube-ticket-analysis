import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default function Menubar(props) {
    const { menu, width } = props

    return (
        <div className="profileMenu">
            {menu ?
                <div onClick={() => props.handleNav(false)} className="hamburger">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                : null}
            <ul className="menuitems">
                <li onClick={() => width <= 992 ? props.handleNav(false) : null}>
                    <Link to="/about">
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                        <span>About</span>
                    </Link>
                </li>
                <li onClick={() => width <= 992 ? props.handleNav(false) : null}>
                    <Link to="/my-works">
                        <i className="fa fa-laptop" aria-hidden="true"></i>
                        <span>Experience</span>
                    </Link>
                </li>
                <li onClick={() => width <= 992 ? props.handleNav(false) : null}>
                    <Link to="/skills">
                        <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                        <span>Skills</span>
                    </Link>
                </li>
                <li onClick={() => width <= 992 ? props.handleNav(false) : null}>
                    <Link to="/contribution">
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <span>Contributions</span>
                    </Link>
                </li>
                <li onClick={() => width <= 992 ? props.handleNav(false) : null}>
                    <Link to="/blogs">
                        <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                        <span>Blogs</span>
                    </Link>
                </li>
                <li onClick={() => width <= 992 ? props.handleNav(false) : null}>
                    <Link to="/contact">
                        <i className="fa fa-comment" aria-hidden="true"></i>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
            <div className="downloadCV">
                <a href={require('./../assest/files/resume_ui.pdf')} download>
                <i className="fa fa-cloud-download" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )


}