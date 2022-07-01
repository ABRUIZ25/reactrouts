import { Routes, Route, Link, useSearchParams, Outlet } from "react-router-dom";




const AllBlogs = (props) => {
    const [searchParams, setSearchParams] = useSearchParams()

    const sortOrder = searchParams.get("sortOrder") || "asc"

    const sortField = searchParams.get("sortField") || "createdAt"

    const limit = Number(searchParams.get("limit")) || 4

    const page = Number(searchParams.get("page")) || 0

    const compare = (a, b) => {

        const aField = a[sortField]


        const bField = b[sortField]

        if (sortOrder.toLowerCase() === "asc") {
            if (aField < bField) {
                return -1
            }
            if (aField > bField) {
                return 1
            }
        }


        if (sortOrder.toLowerCase() === "desc") {
            if (aField < bField) {
                return 1
            }
            if (aField > bField) {
                return -1
            }
        }

    }

    const blogs = props.blogPosts.sort(compare).slice(page * limit, (page * limit) + limit)
    return (
        <div>
            <h1>All Blog Posts</h1>
            <p>
                Sort Order: {sortOrder}
            </p>
            {blogs.map((blog) => {
                return (
                    <div key={blog.id}>
                        <div>ID: {blog.id}</div>
                        <div>Title: {blog.title}</div>
                        <div>Author: {blog.author}</div>
                        <div>Text: {blog.text}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default AllBlogs;