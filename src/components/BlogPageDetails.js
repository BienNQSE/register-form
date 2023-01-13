import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPageDetails = () => {
  const { slug } = useParams();
  console.log("slug: ", slug);
  // fetching.com?slug=${slug} dungf call API
  const navigate = useNavigate();

  return (
    <div className="mt-10 ml-10">
      This is BlogDetails page
      <button
        onClick={() => navigate("/blog")}
        className=" ml-5 p-5 rounded-lg text-white bg-pink-500"
      >
        Navigate to Blog page
      </button>
    </div>
  );
};

export default BlogPageDetails;
