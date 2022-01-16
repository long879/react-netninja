import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // terminal: npx json-server --watch data/db.json --port 8000
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
