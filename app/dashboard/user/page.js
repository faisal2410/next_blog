"use client";
import { useState, useEffect } from "react";
import BlogList from "../../components/blogs/BlogList";
import { Toaster,toast } from "react-hot-toast";

export default function UserDashboard() {
  const [likedBlogs, setLikedBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${process.env.API}/user/liked-blogs`);
      if (!response.ok) {
        throw new Error("Failed to fetch liked blogs");
        toast.error("Failed to fetch liked blogs");
      } else {
        const data = await response.json();
        setLikedBlogs(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p className="lead text-center">Liked Blogs</p>

          <BlogList blogs={likedBlogs} />
        </div>
      </div>
      <Toaster/>
    </div>
  );
}
