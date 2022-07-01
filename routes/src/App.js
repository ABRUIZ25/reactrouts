import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { blogPosts } from "./utils/sampleBlogs";
import './App.css';
import BlogPost from "./component/blogPost"
import Navbar from "./component/NavBar"
import Blogs from "./component/blog";
import AllBlogs from "./component/AllBlogs";

// ik at some point the :blog

function App() {
  const [blogs, setBlog] = useState(blogPosts)
  console.log(blogs)



  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} >
            <Route path="/blogs/all" element={<AllBlogs blogPosts={blogPosts} />} />
            <Route path="single-blog/:blogId" element={<BlogPost />} />
          </Route>
        </Routes>

      </header>
    </div>
  );
}





const Home = (props) => {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
    </div>
  )
}


const About = (props) => {
  return (
    <div>
      <Navbar />
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac eros efficitur, dignissim felis a, vehicula tellus.</p>


    </div>
  )
}

export default App;
