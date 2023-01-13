import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams: ", searchParams.get("search"));
  useEffect(() => {
    setSearchParams({ search: "evondev" });
  }, []);
  return <div>This is Blog page</div>;
};

export default BlogPage;
