import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Adduser from "./Adduser"


export default function User() {

    const [user, setUser] = useState([])
    const [err, setError] = useState("")
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(!modal);
    };

    useEffect(() => {
        fetch("http://medium-api-psi.vercel.app/api/users")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setUser(dt.result);
            })
            .catch((err) => setError(console.log(err)))
    }, [])

    return (
        <div>
            <h2>
                <button onClick={openModal} className="btn btn-primary mt-2">Add user</button>
            </h2>
            <div className="row my-4">
                <div className="row w-100">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <th># </th>
                                <th>Organization</th>
                                <th>Username</th>
                                <th>Firstname</th>
                                {/* <th>User image</th> */}
                                <th>Edit/Del</th>
                            </thead>
                            <tbody>
                                {
                                    user.map(({ _id, organization, username, firstName, userImg }, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{organization}</td>
                                                <td>{username}</td>
                                                <td>{firstName}</td>
                                                {/* <td> <img src={userImg} width="20" /></td> */}
                                                <td className="d-flex">
                                                    <button className="btn btn-warning">Edit</button>
                                                    <button className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>)
}