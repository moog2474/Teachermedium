import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function AdminLayout() {
    return (
        <div>
            <div className="navbar bg-dark flex-nowrap">
                <a className="col-md3 navbar-brand text-light" href="#">Company Name</a>
                <input type="text" className="w-100 form-control bg-dark text-light" />
                <div className="nav">
                    <div className="nav-item">
                        <span className="text-light">Log out</span>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <div className="nav bg-light flex-column">
                            <div className="nav-item">
                                <Link className='nav-link' to="/admin">Dashboard</Link>
                            </div>
                            <div className="nav-item">

                                <Link className='nav-link' to="/admin/news">News</Link>
                            </div>
                            <div className="nav-item">
                                <Link className='nav-link' to="/admin/user">User</Link>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}
