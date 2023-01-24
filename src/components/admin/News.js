import React, { useState, useEffect } from 'react'

export default function News() {
    const [data, setData] = useState([]);
    const [err, setErr] = useState("")
    useEffect(() => {
        fetch("https://medium-api-psi.vercel.app/api/news")
            .then((response) => response.json())
            .then((dt) => {
                console.log(dt.result);
                setData(dt.result);
            })
            .catch((err) => setErr(console.log(err)))
    }, [])


    return (
        <div className="row">
            <button className='btn btn-primary mt-2 mb-2'>Add News</button>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th># </th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Is Trending?</th>
                        <th>Edit / Del</th>
                    </thead>
                    <tbody>
                        {
                            data.map(({ _id, title, isTrending, category }, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{title}</td>
                                        <td>{category}</td>
                                        <td>
                                            {isTrending ? (
                                                <span className="badge bg-success">yes</span>
                                            ) : (
                                                <span className="badge bg-danger">no</span>
                                            )}
                                        </td>
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
    )
}
