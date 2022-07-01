import { Routes, Route, Link, useSearchParams, Outlet, useParams } from "react-router-dom";


import { blogPosts } from "../utils/sampleBlogs";

const BlogPost = () => {
    const params = useParams();
    const foundBlog = blogPosts.find((blog) => {
        return blog.id === parseInt(params.blogId)

    })
    console.log(blogPosts[0].id)
    return (
        <div>
            Blog Post Component
            <div>
                ID: {foundBlog.id}
            </div>
            <div>
                Title: {foundBlog.title}
            </div>
            <div>
                Author: {foundBlog.author}
            </div>
            <div>
                Text: {foundBlog.text}
            </div>
        </div>
    )
}

export default BlogPost