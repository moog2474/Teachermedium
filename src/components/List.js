import React, { useState } from "react";
import news from "./data";
import NewsCard from "./NewsCard";

export default function List() {
  const [data, setData] = useState(news);

  // setData(news);

  return (
    <div className="col-md-8 py-2">
      <div className="row">
        {data.map((item, i) => (
          <>
            <div className="col-md-12 mb-5">
              <NewsCard item={item} list={true} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
