import '../App.css';
import './Blog.css';
import Header from '../Header/Header';
import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import { UserContext } from '../UserContext';
function BlogList({blogs}) {
    if(blogs){
        return blogs.map((blog) => {
            return (
                <div key={blog.id} className="blog-container">
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                    <p>{(blog.publish_date)}</p>
                </div>
            )
        })
    }
    return (<></>)
}

function AddBlog() {
    const user = useContext(UserContext);
    if (user.loggedIn) {
        return <div>
                        <Link to="/blog/form" className="btn btn-primary ">&#43;</Link>
                    </div>
    }
    return null; 
}

function Blog() {

    const [state, setState] = useState({ status: 'idle', blogs: null  })
    
    const fetchData = async () => {
        let response = await fetch('http://localhost:8000/api/blog/');
        return await response.json()
    }

    React.useEffect(() => {
        setState({ status: 'pending', blogs: null })
        fetchData().then(blogs => {
            console.log(blogs);
            setState({ status: 'resolved', blogs: blogs })
        });
    }, [])

    return (
        <>
            <Header />
            <div className="container bg-primary text-white my-3 ">
                <div>
                    <div className="content-header  ">
                        <h1>Blogs</h1>
                        <AddBlog />
                    </div>
                    <div className="blogs ">
                        <BlogList blogs={state.blogs} />
                    </div>
                    <div className="blogs ">
                        <BlogList blogs={state.publish_date} />
                    </div>
                </div>
            </div>

            <div>


</div>
        </>
    );
}

export default Blog;
