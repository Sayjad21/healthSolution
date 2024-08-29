import {React, useState, useEffect, Fragment, useContext} from 'react';
import axios from 'axios';
import { IoAddCircleOutline } from "react-icons/io5";

import { userContext } from '../../context/context';

import Navbar from "../utils/Navbar";
import PageFooter from "../utils/PageFooter";
import CreateBlogForm from './blogForm';
import BlogCard from './blogCard';

export default function Blog() {
    const userValue = useContext(userContext);

    const [showForm, setShowForm] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:8000/getBlogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching blogs:', error);
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm); // Toggle showForm state
    };

    return(
        <Fragment>
            <Navbar/>

            {/* BLOG FORM */}
            {!userValue.user ? null : (
                showForm ? (
                    <CreateBlogForm setShowForm={setShowForm} fetchBlogs={fetchBlogs}/>
                ) : (
                    <div
                        className="mt-5"
                        style={{
                            height: "auto",
                            width: "auto",
                            backgroundColor: "rgb(0, 0, 255, 0.3)",
                            display: "flex", // Enable Flexbox
                            alignItems: "center", // Align items vertically in the center
                            margin: "50px",
                            padding: "20px",
                            borderRadius: "20px",
                            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                        }}
                        onClick={toggleForm}
                    >
                        <IoAddCircleOutline size={60} />
                        <h2 className='mt-2 ms-2'>Click here to create a new blog</h2>
                    </div>
                )
            )}

            {/* BLOG LIST */}
            <div style = {{
                        height: "auto",
                        width: "auto",   
                        backgroundColor: "rgb(0, 0, 255, 0.2)",
                        alignItems: "center",  // Align items vertically in the center
                        margin: "50px",
                        padding: "20px",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                            }}>
                <h2 style={{
                    textAlign: "center",
                    marginBottom: "20px"
                }}>
                    Blog List
                </h2>
                
                {/* Display list of blogs */}  
                {
                    blogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} fetchBlogs={fetchBlogs} />
                    ))
                }  
            </div>  

            <PageFooter/>

        </Fragment>
    );
}