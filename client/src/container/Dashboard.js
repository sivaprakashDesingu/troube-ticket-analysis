import React from "react";
import { SimpleAreaChart,BarCharts } from './../Charts/index'
function Dashboard() {
    return (
        <div className="wrapper">
            {/* <nav id="sidebar" className="active">
                <div className="sidebar-header">
                    <img src="assets/img/bootstraper-logo.png" alt="bootraper logo" className="app-logo" />
                </div>
                <ul className="list-unstyled components text-secondary">
                    <li>
                        <a href="dashboard.html"><i className="fas fa-home"></i> Dashboard</a>
                    </li>
                    <li>
                        <a href="forms.html"><i className="fas fa-file-alt"></i> Forms</a>
                    </li>
                    <li>
                        <a href="tables.html"><i className="fas fa-table"></i> Tables</a>
                    </li>
                    <li>
                        <a href="charts.html"><i className="fas fa-chart-bar"></i> Charts</a>
                    </li>
                    <li>
                        <a href="icons.html"><i className="fas fa-icons"></i> Icons</a>
                    </li>
                    <li>
                        <a href="#uielementsmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle no-caret-down"><i className="fas fa-layer-group"></i> UI Elements</a>
                        <ul className="collapse list-unstyled" id="uielementsmenu">
                            <li>
                                <a href="ui-buttons.html"><i className="fas fa-angle-right"></i> Buttons</a>
                            </li>
                            <li>
                                <a href="ui-badges.html"><i className="fas fa-angle-right"></i> Badges</a>
                            </li>
                            <li>
                                <a href="ui-cards.html"><i className="fas fa-angle-right"></i> Cards</a>
                            </li>
                            <li>
                                <a href="ui-alerts.html"><i className="fas fa-angle-right"></i> Alerts</a>
                            </li>
                            <li>
                                <a href="ui-tabs.html"><i className="fas fa-angle-right"></i> Tabs</a>
                            </li>
                            <li>
                                <a href="ui-date-time-picker.html"><i className="fas fa-angle-right"></i> Date & Time Picker</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#authmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle no-caret-down"><i className="fas fa-user-shield"></i> Authentication</a>
                        <ul className="collapse list-unstyled" id="authmenu">
                            <li>
                                <a href="login.html"><i className="fas fa-lock"></i> Login</a>
                            </li>
                            <li>
                                <a href="signup.html"><i className="fas fa-user-plus"></i> Signup</a>
                            </li>
                            <li>
                                <a href="forgot-password.html"><i className="fas fa-user-lock"></i> Forgot password</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#pagesmenu" data-bs-toggle="collapse" aria-expanded="false" className="dropdown-toggle no-caret-down"><i className="fas fa-copy"></i> Pages</a>
                        <ul className="collapse list-unstyled" id="pagesmenu">
                            <li>
                                <a href="blank.html"><i className="fas fa-file"></i> Blank page</a>
                            </li>
                            <li>
                                <a href="404.html"><i className="fas fa-info-circle"></i> 404 Error page</a>
                            </li>
                            <li>
                                <a href="500.html"><i className="fas fa-info-circle"></i> 500 Error page</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="users.html"><i className="fas fa-user-friends"></i>Users</a>
                    </li>
                    <li>
                        <a href="settings.html"><i className="fas fa-cog"></i>Settings</a>
                    </li>
                </ul>
            </nav> */}
            <div id="body" className="active">
                {/* <nav className="navbar navbar-expand-lg navbar-white bg-white">
                    <button type="button" id="sidebarCollapse" className="btn btn-light">
                        <i className="fas fa-bars"></i><span></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="nav navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <div className="nav-dropdown">
                                    <a href="#" id="nav1" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="fas fa-link"></span> <span>Quick Links</span> <span  className="fas fa-caret-down"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end nav-link-menu" aria-labelledby="nav1">
                                        <ul className="nav-list">
                                            <li><a href="" className="dropdown-item"><i className="fas fa-list"></i> Access Logs</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a href="" className="dropdown-item"><i className="fas fa-database"></i> Back ups</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a href="" className="dropdown-item"><i className="fas fa-cloud-download-alt"></i> Updates</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a href="" className="dropdown-item"><i className="fas fa-user-shield"></i> Roles</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-dropdown">
                                    <a href="#" id="nav2" className="nav-item nav-link dropdown-toggle text-secondary" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user"></i> <span>John Doe</span> <i className="fas fa-caret-down"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end nav-link-menu">
                                        <ul className="nav-list">
                                            <li><a href="" className="dropdown-item"><i className="fas fa-address-card"></i> Profile</a></li>
                                            <li><a href="" className="dropdown-item"><i className="fas fa-envelope"></i> Messages</a></li>
                                            <li><a href="" className="dropdown-item"><i className="fas fa-cog"></i> Settings</a></li>
                                            <div className="dropdown-divider"></div>
                                            <li><a href="" className="dropdown-item"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 page-header">
                                <div className="page-pretitle">Overview</div>
                                <h2 className="page-title">Dashboard</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                                <div className="card">
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="icon-big text-center">
                                                    <i className="teal fas fa-shopping-cart"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="detail">
                                                    <p className="detail-subtitle">New Orders</p>
                                                    <span className="number">6,267</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <hr />
                                            <div className="stats">
                                                <i className="fas fa-calendar"></i> For this Week
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                                <div className="card">
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="icon-big text-center">
                                                    <i className="olive fas fa-money-bill-alt"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="detail">
                                                    <p className="detail-subtitle">Revenue</p>
                                                    <span className="number">$180,900</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <hr />
                                            <div className="stats">
                                                <i className="fas fa-calendar"></i> For this Month
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                                <div className="card">
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="icon-big text-center">
                                                    <i className="violet fas fa-eye"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="detail">
                                                    <p className="detail-subtitle">Page views</p>
                                                    <span className="number">28,210</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <hr />
                                            <div className="stats">
                                                <i className="fas fa-stopwatch"></i> For this Month
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3 mt-3">
                                <div className="card">
                                    <div className="content">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="icon-big text-center">
                                                    <i className="orange fas fa-envelope"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="detail">
                                                    <p className="detail-subtitle">Support Request</p>
                                                    <span className="number">75</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="footer">
                                            <hr />
                                            <div className="stats">
                                                <i className="fas fa-envelope-open-text"></i> For this week
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="content">
                                                <div className="head">
                                                    <h5 className="mb-0">Traffic Overview</h5>
                                                    <p className="text-muted">Current year website visitor data</p>
                                                </div>
                                                <div className="canvas-wrapper">
                                                    <SimpleAreaChart height={400}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card">
                                            <div className="content">
                                                <div className="head">
                                                    <h5 className="mb-0">Sales Overview</h5>
                                                    <p className="text-muted">Current year sales data</p>
                                                </div>
                                                <div classNam="canvas-wrapper">
                                                    <BarCharts height={400} /> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="card">
                                    <div className="content">
                                        <div className="head">
                                            <h5 className="mb-0">Top Visitors by Country</h5>
                                            <p className="text-muted">Current year website visitor data</p>
                                        </div>
                                        <div className="canvas-wrapper">
                                            <table className="table table-striped">
                                                <thead className="success">
                                                    <tr>
                                                        <th>Country</th>
                                                        <th className="text-end">Unique Visitors</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-us"></i> United States</td>
                                                        <td className="text-end">27,340</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-in"></i> India</td>
                                                        <td className="text-end">21,280</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-jp"></i> Japan</td>
                                                        <td className="text-end">18,210</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-gb"></i> United Kingdom</td>
                                                        <td className="text-end">15,176</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-es"></i> Spain</td>
                                                        <td className="text-end">14,276</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-de"></i> Germany</td>
                                                        <td className="text-end">13,176</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-br"></i> Brazil</td>
                                                        <td className="text-end">12,176</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-id"></i> Indonesia</td>
                                                        <td className="text-end">11,886</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-ph"></i> Philippines</td>
                                                        <td className="text-end">11,509</td>
                                                    </tr>
                                                    <tr>
                                                        <td><i className="flag-icon flag-icon-nz"></i> New Zealand</td>
                                                        <td className="text-end">1,700</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="content">
                                        <div className="head">
                                            <h5 className="mb-0">Most Visited Pages</h5>
                                            <p className="text-muted">Current year website visitor data</p>
                                        </div>
                                        <div className="canvas-wrapper">
                                            <table className="table table-striped">
                                                <thead className="success">
                                                    <tr>
                                                        <th>Page Name</th>
                                                        <th className="text-end">Visitors</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>/about.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">8,340</td>
                                                    </tr>
                                                    <tr>
                                                        <td>/special-promo.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">7,280</td>
                                                    </tr>
                                                    <tr>
                                                        <td>/products.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">6,210</td>
                                                    </tr>
                                                    <tr>
                                                        <td>/documentation.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">5,176</td>
                                                    </tr>
                                                    <tr>
                                                        <td>/customer-support.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">4,276</td>
                                                    </tr>
                                                    <tr>
                                                        <td>/index.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">3,176</td>
                                                    </tr>
                                                    <tr>
                                                        <td>/products-pricing.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">2,176</td>
                                                    </tr>
                                                    <tr>
                                                        <td>/product-features.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">1,886</td>
                                                    </tr>
                                                    <tr>
                                                        <td>/contact-us.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">1,509</td>
                                                    </tr>
                                                    <tr>
                                                        <td>/terms-and-condition.html <a href="#"><i className="fas fa-link blue"></i></a></td>
                                                        <td className="text-end">1,100</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* <div className="row">
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="content">
                                        <div className="row">
                                            <div className="dfd text-center">
                                                <i className="blue large-icon mb-2 fas fa-thumbs-up"></i>
                                                <h4 className="mb-0">+21,900</h4>
                                                <p className="text-muted">FACEBOOK PAGE LIKES</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="content">
                                        <div className="row">
                                            <div className="dfd text-center">
                                                <i className="orange large-icon mb-2 fas fa-reply-all"></i>
                                                <h4 className="mb-0">+22,566</h4>
                                                <p className="text-muted">INSTAGRAM FOLLOWERS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="content">
                                        <div className="row">
                                            <div className="dfd text-center">
                                                <i className="grey large-icon mb-2 fas fa-envelope"></i>
                                                <h4 className="mb-0">+15,566</h4>
                                                <p className="text-muted">E-MAIL SUBSCRIBERS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-3">
                                <div className="card">
                                    <div className="content">
                                        <div className="row">
                                            <div className="dfd text-center">
                                                <i className="olive large-icon mb-2 fas fa-dollar-sign"></i>
                                                <h4 className="mb-0">+98,601</h4>
                                                <p className="text-muted">TOTAL SALES</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
