import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Blog = () => {
  let [searchParams, setParams] = useSearchParams();
  let [data, setData] = useState({});
  let query = searchParams.get("");
  let location = "/data/blogs/" + query + ".json";
  useEffect(() => {
    fetch(location)
      .then((res) => res.json())
      .then((e) => {
        setData(e);
      })
      .catch((err) => console.error("Failed to load JSON array:", err));
  }, []);
  console.log(data);

  return (
    <>
      <div className="blog-container">
        <br />
        <br />
        <br />
        <h2>{data.title}</h2>
        <p className="blog-date">{data.date}</p>
        <br />
        <p> &nbsp; &nbsp; {JSON.stringify(data.content)}</p>
      </div>
    </>
  );
};

export default Blog;
