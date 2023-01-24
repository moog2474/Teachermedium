import React, { useEffect, useState } from "react"
import { BarChart } from './BarChart'
import { PieChart } from './PieChart'
import User from './User'
import { Outlet } from "react-router-dom";
export default function Admin() {

  const [err, setErr] = useState("")

  useEffect(() => {
    fetch("https://medium-api-psi.vercel.app/api/news")
      .then((response) => response.json())
      .then((dt) => {
        console.log(dt.result);

      })
      .catch((err) => setErr(console.log(err)))
  }, [])

  return <div>

    <div className="row my-4">
      <div className="col-md-4">
        <div className="card p-3">
          <div className="card-title text-primary">Users</div>
          <div className="d-flex justify-content-between align-items-center">
            <i className="bi bi-people"
              style={{ fontSize: "40px" }}></i>
            <h3>4500</h3>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card p-3">
          <div className="card-title text-warning">News</div>
          <div className="d-flex justify-content-between align-items-center">
            <i className="bi bi-newspaper"
              style={{ fontSize: "40px" }}></i>
            <h3>9000</h3>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card p-3">
          <div className="card-title text-info">Category</div>
          <div className="d-flex justify-content-between align-items-center">
            <i className="bi bi-list-nested"
              style={{ fontSize: "40px" }}></i>
            <h3>4500</h3>
          </div>
        </div>
      </div>

      <BarChart />
      <PieChart />
    </div>
  </div>





}