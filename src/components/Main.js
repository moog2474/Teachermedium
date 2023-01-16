import React from "react";
import Feature from "./Feature";
import news from "./data";
import List from "./List";
import CategorySection from "./CategorySection";

export default function Main() {
  return (
    <div className="container" style={{ marginTop: "5rem" }}>
      <Feature news={news} />
      <hr />
      <div className="row mt-5">
        <List />

        <div className="col-md-4">
          <h1 className="cate-title">Discover more of what matters to you</h1>
          <CategorySection />
        </div>
      </div>
    </div>
  );
}
