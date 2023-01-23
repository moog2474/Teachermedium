import React, { useEffect, useState } from "react"


export default function User() {

    const [user, setUser] = useState([])
    const [err, setError] = useState("")

    useEffect(() => {
        fetch("http://medium-api-psi.vercel.app/api/users")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setUser(dt.result);
            })
            .catch((err) => setError(console.log(err)))
    }, [])

    return <div>
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
                            <a className="nav-link" href="#">Dashboard </a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </div>
                        <div className="nav-item">
                            <a className="nav-link" href="#">User</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row my-4">
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-title">Users</div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <i className="bi bi-people"
                                        style={{ fontSize: "40px" }}></i>
                                    <h3>4500</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-title">News</div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <i className="bi bi-newspaper"
                                        style={{ fontSize: "40px" }}></i>
                                    <h3>9000</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card p-3">
                                <div className="card-title">Category</div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <i className="bi bi-list-nested"
                                        style={{ fontSize: "40px" }}></i>
                                    <h3>4500</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <th># </th>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Firstname</th>
                                        <th>User image</th>
                                    </thead>
                                    <tbody>
                                        {
                                            user.map(({ _id, username, firstName, userImg }, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{_id}</td>
                                                        <td>{username}</td>
                                                        <td>{firstName}</td>
                                                        <td>{userImg}</td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
}