import React, { Component } from 'react';
//import './../App.css';

export default class ReachME extends Component {

    render() {
        return (
            <div>
                <div className="content">
                    <h2 className="sectionMainheading">Contact Me</h2>
                    {/* <p className="grayText">Full stack Developer</p> */}
                    <div className="description">
                        <p>
                            If you have any questions please do not hesitate to contact me at the below-mentioned  e-mail address or phone number.
                        </p>
                    </div>
                    <div className="centredHline"></div>
                    <div className="my-service">
                        <h2 className="sectionMainheading">Do you have question? </h2>
                        <ul className="mailandPhone">
                            <li>
                                <span className="conlst">Mail: <a href="mailto:opensourcesivaprakas@gmail.com">opensourcesivaprakas@gmail.com</a></span>
                            </li>
                            <li>
                                <span className="conlst">Phone: <a href="tel:7708868770">7708868770</a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="centredHline"></div>
                    <div className="my-service">
                        <h2 className="sectionMainheading">Findout me here...</h2>
                        <div className="socialLinks pdtop20">
                            <a target="_blank" href="https://www.linkedin.com/in/sivaprakash-desingu/" title="Linked in">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" href="https://stackoverflow.com/users/8951225/sivaprakash-d" title="Stack overflow">
                                <i className="fa  fa-stack-overflow" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" href="https://github.com/sivaprakashDesingu" title="Github">
                                <i className="fa  fa-github" aria-hidden="true"></i>
                            </a>
                            <a target="_blank" href="https://twitter.com/f39d3f875b2d43b" title="Twitter">
                                <i className="fa  fa-twitter" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}