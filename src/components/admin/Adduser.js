import React, { useState } from 'react'

export default function Adduser() {

    const init = {
        userName: "",
        password: "",
        userType: "",
        firstName: "",
        lastName: "",
        userImg: "",
        organization: "",
    }
    const [user, setUser] = useState(init)


    const onSave = (e) => {
        e.preventDefault();

        fetch("https://medium-api-psi.vercel.app/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("saved");
                console.log(data);
            })
            .catch((err) => console.log(err))
    };
    return (
        <div class="modal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add user</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className='label-input'>
                            <label>Username:</label>
                            <input
                                type="text"
                                placeholder="Username"
                                value={user.userName}
                                onChange={(e) => {
                                    setUser({ ...user, userName: e.target.value });
                                }}
                            />
                        </div>
                        <div className='label-input'>
                            <label>Password:</label>
                            <input
                                type="text"
                                placeholder="Password"
                                value={user.password}
                                onChange={(e) => {
                                    setUser({ ...user, password: e.target.value });
                                }}
                            />
                        </div>
                        <div className='label-input'>
                            <label>userType:</label>
                            <input
                                type="text"
                                placeholder="Usertype"
                                value={user.userType}
                                onChange={(e) => {
                                    setUser({ ...user, userType: e.target.value });
                                }}
                            />
                        </div>
                        <div className='label-input'>
                            <label>Firstname:</label>
                            <input
                                type="text"
                                placeholder="Firstname"
                                value={user.firstName}
                                onChange={(e) => {
                                    setUser({ ...user, firstName: e.target.value });
                                }}
                            />
                        </div>
                        <div className='label-input'>
                            <label>Lastname:</label>
                            <input
                                type="text"
                                placeholder="Lastname"
                                value={user.lastName}
                                onChange={(e) => {
                                    setUser({ ...user, lastName: e.target.value });
                                }}
                            />
                        </div>
                        <div className='label-input'>
                            <label>User image:</label>
                            <input
                                type="file"
                                placeholder="Add image"
                                value={user.userImg}
                                onChange={(e) => {
                                    setUser({ ...user, userImg: e.target.value });
                                }}
                            />
                        </div>
                        <div className='label-input'>
                            <label>Organization:</label>
                            <input
                                type="text"
                                placeholder="organization"
                                value={user.organization}
                                onChange={(e) => {
                                    setUser({ ...user, organization: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={onSave} type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
