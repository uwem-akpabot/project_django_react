import { Outlet, Link } from 'react-router-dom';

const Sidebar = () => {
    let {user, logoutUser} = '';
  return (
    <>
    <div className="sidebar-menu">
        <div className="sidebar-header">
            <div className="logo">
                {/* <a href=""><img src={logo} alt="logo" style={{ width:"89%" }} /></a>  */}
                {/* <a href=""><img src="assets/images/icon/logo.png" alt="logo" /></a> */}
            </div>
        </div>
        <div className="main-menu">
            <div className="menu-inner">
                <nav>
                    <ul className="metismenu" id="menu">
                        <li className="active">
                            <a href=""><i className="ti-map-alt"></i> <span>Dashboard</span></a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="ti-layout-sidebar-left"></i><span>
                                    Admin
                                </span></a>
                            <ul className="collapse">
                                <li><a href="index.html">Left Sidebar</a></li>
                                <li><a href="index3-horizontalmenu.html">Horizontal Sidebar</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="ti-pie-chart"></i><span>Doctor</span></a>
                            <ul className="collapse">
                                <li><a href="barchart.html">bar chart</a></li>
                                <li><a href="linechart.html">line Chart</a></li>
                                <li><a href="piechart.html">pie chart</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="ti-palette"></i><span>Laboratory</span></a>
                            <ul className="collapse">
                                <li><a href="accordion.html">Accordion</a></li>
                                <li><a href="alert.html">Alert</a></li>
                                <li><a href="badge.html">Badge</a></li>
                                <li><a href="button.html">Button</a></li>
                                <li><a href="button-group.html">Button Group</a></li>
                                <li><a href="cards.html">Cards</a></li>
                                <li><a href="dropdown.html">Dropdown</a></li>
                                <li><a href="list-group.html">List Group</a></li>
                                <li><a href="media-object.html">Media Object</a></li>
                                <li><a href="modal.html">Modal</a></li>
                                <li><a href="pagination.html">Pagination</a></li>
                                <li><a href="popovers.html">Popover</a></li>
                                <li><a href="progressbar.html">Progressbar</a></li>
                                <li><a href="tab.html">Tab</a></li>
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="form.html">Form</a></li>
                                <li><a href="grid.html">grid system</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="ti-slice"></i><span>Nursing</span></a>
                            <ul className="collapse">
                                <li><a href="fontawesome.html">fontawesome icons</a></li>
                                <li><a href="themify.html">themify icons</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="fa fa-table"></i>
                                <span>Pharmacy</span></a>
                            <ul className="collapse">
                                <li><a href="table-basic.html">basic table</a></li>
                                <li><a href="table-layout.html">table layout</a></li>
                                <li><a href="datatable.html">datatable</a></li>
                            </ul>
                        </li>
                        <li><a href="maps.html"><i className="ti-map-alt"></i> <span>maps</span></a></li>
                        <li><a href="invoice.html"><i className="ti-receipt"></i> <span>Invoice Summary</span></a></li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="ti-layers-alt"></i> <span>Pages</span></a>
                            <ul className="collapse">
                                <li><a href="login.html">Login</a></li>
                                <li><a href="login2.html">Login 2</a></li>
                                <li><a href="login3.html">Login 3</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li><a href="register2.html">Register 2</a></li>
                                <li><a href="register3.html">Register 3</a></li>
                                <li><a href="register4.html">Register 4</a></li>
                                <li><a href="screenlock.html">Lock Screen</a></li>
                                <li><a href="screenlock2.html">Lock Screen 2</a></li>
                                <li><a href="reset-pass.html">reset password</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <li><a href="404.html">Error 404</a></li>
                                <li><a href="500.html">Error 500</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript:void(0)" aria-expanded="true"><i className="fa fa-align-left"></i> <span>Multi
                                    level menu</span></a>
                            <ul className="collapse">
                                <li><a href="#">Item level (1)</a></li>
                                <li><a href="#">Item level (1)</a></li>
                                <li><a href="#" aria-expanded="true">Item level (1)</a>
                                    <ul className="collapse">
                                        <li><a href="#">Item level (2)</a></li>
                                        <li><a href="#">Item level (2)</a></li>
                                        <li><a href="#">Item level (2)</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Item level (1)</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    {/* <nav id="sidebar" className="sidebar js-sidebar">
        <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="index.html">
            <span className="align-middle">Beyond <br />Healthcare</span>
            </a>

            <ul className="sidebar-nav">
                <li className="sidebar-header">
                    Pages
                </li>

                <li className="sidebar-item active">
                <Link to="/" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">
                Dashboard</span></Link>
        
                </li>
            </ul>
            
            
            <ul className="sidebar-nav">
                <li className="sidebar-header">
                    Users
                </li>

                <li className="sidebar-item">
                <Link to="/admin" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="user"></i> <span className="align-middle">
            Administrator</span></Link>
                </li>

                <li className="sidebar-item">
                <Link to="/consulting" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="log-in"></i> <span className="align-middle">
             Consulting </span></Link>
                </li>

                <li className="sidebar-item">
                <Link to="/laboratory" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="user-plus"></i> <span className="align-middle">
            Laboratory</span></Link>
                </li>

                <li className="sidebar-item">
                <Link to="/pharmacy" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="home"></i> <span className="align-middle">
            Pharmacy</span></Link>
                </li>
                <li className="sidebar-item">
                <Link to="/nursing" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="book"></i> <span className="align-middle">
            Nursing</span></Link>
                </li>

                <li className="sidebar-header">
                    Extra Tools
                </li>

                <li className="sidebar-item">
                <Link to="/login" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">
            Login</span></Link>
        
                </li>
                <li className="sidebar-item">
                <Link to="/register" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">
            Register</span></Link>
        
                </li>
                <li className="sidebar-item">
                <Link to="/appointment" className="sidebar-link" href="charts-chartjs.html">
            <i className="align-middle" data-feather="bar-chart-2"></i> <span className="align-middle">
            Appointment</span></Link>
                </li>

            </ul>

            <div className="sidebar-cta">
                <div className="sidebar-cta-content">
                    <div className="d-grid">
                        <Link to="/patients" className="btn btn-primary">Patients' Portal</Link>
                    </div>
                </div>
            </div>
        </div>
        <Outlet />
    </nav> */}
    </>
  )
}

export default Sidebar
