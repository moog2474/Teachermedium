import React from "react";

export default function CategorySection() {
  const catNews = ["Technology", "Data Science", "Productivity", "Politics"];
  const descriptions = [
    "Help",
    "Status",
    "Blog",
    "Politics",
    "Writers",
    "About",
    "Terms",
    "Careers",
    "Privacy",
  ];
  return (
    <div className="my-4">
      <div className="d-flex flex-wrap">
        {catNews.map((c) => {
          return (
            <div className="categoryCard m-1">
              <h3 className="categoryText">{c}</h3>
            </div>
          );
        })}
      </div>
      <hr />
      <div className="d-flex flex-wrap">
        {descriptions.map((c) => {
          return (
            <div className="mr-5">
              <h3 className="categoryText">{c}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
