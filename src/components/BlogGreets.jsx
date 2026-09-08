import React from "react";
import { Link } from "react-router-dom";

const BlogGreets = () => {
  return (
    <>
      <div className="blog-container flex flex-col">
        <div
          style={{
            padding: "1rem",
            margin: "2rem auto",
          }}
          className="mx-auto  rounded-2xl text-gray-650 border-gray-300 border-2 max-[857px]:w-[90%]  max-[857px]:p-2"
        >
          Hello dear visitors, I am going to start a blogging in this website.
          It will mostly about Physics, Scientists, Nature, Calculations,
          Sci-fi, etc. Please do check them, and lemme know if it helps you.{" "}
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -1 Sept, 2026 <br />
        </div>
        <Link
          className=" self-center max-[857px]:w-[90%] text-center text-white rounded-xl bg-dark"
          to="/blogs"
          style={{
            margin: "0 auto",
            padding: ".5rem 2rem",
          }}
        >
          Go to Blogs
        </Link>{" "}
      </div>
      <br />
      <br />
    </>
  );
};

export default BlogGreets;
