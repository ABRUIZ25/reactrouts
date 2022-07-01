import { blogPosts } from "../utils/sampleBlogs";
import { Routes, Route, Link, useSearchParams, Outlet } from "react-router-dom";


import { useState } from "react";
const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/allblogs"> All_Blogs</Link>
        </nav >
    )
}

export default Navbar