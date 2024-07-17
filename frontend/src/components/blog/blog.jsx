import {React, useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import { IoAddCircleOutline } from "react-icons/io5";

import Navbar from "../utils/Navbar";
import CreateBlogForm from './blogForm';
import BlogCard from './blogCard';

export default function Blog() {
    const [showForm, setShowForm] = useState(false);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getBlogs');
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
            {   
                showForm ? (
                <CreateBlogForm setShowForm={setShowForm}/>
                ) : (
                    <div className="mt-5" 
                            style = {{
                                height: "auto",
                                width: "auto",   
                                backgroundColor: "white",
                                display: "flex",  // Enable Flexbox
                                alignItems: "center",  // Align items vertically in the center
                                margin: "50px",
                                padding: "20px",
                                borderRadius: "20px",
                                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
                            }}
                            onClick={toggleForm}
                    >
                        <IoAddCircleOutline size={60}  />
                        <h2 className='ms-2'>Click here to create a new blog</h2>
                    </div>
               )
            }

            <div style = {{
                                height: "auto",
                                width: "auto",   
                                backgroundColor: "white",
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
        </Fragment>
    );
}