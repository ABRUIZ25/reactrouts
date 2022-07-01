import { Routes, Route, Link, useSearchParams, Outlet } from "react-router-dom";

import Navbar from "./NavBar";
import AllBlogs from "./AllBlogs";

const Blogs = () => {
    return (
        <div>
            <Navbar />
            <h1>Blogs Page</h1>

            <Outlet />
        </div>
    )
}

export default Blogs