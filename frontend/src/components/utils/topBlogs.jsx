import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopBlogs = () => {
    const [topBlogs, setTopBlogs] = useState([]);

    useEffect(() => {
        const fetchTopBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/topBlogs/topBlogs'); // Replace with your API endpoint
                setTopBlogs(response.data);
            } catch (error) {
                console.error('Error fetching top blogs:', error);
            }
        };

        fetchTopBlogs();
        console.log(topBlogs);
    }, []);

    return (
        <div style={{ padding: '0px 50px', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '30px' , color: "navy"}}>Top Blogs</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '30px',
                justifyContent: 'center'
            }}>
                {topBlogs.slice(0, 4).map((blog) => (
                    <div 
                        key={blog.id} 
                        className="card" 
                        style={{
                            width: 'auto',
                            height: 'auto',
                            borderRadius: '10px',
                            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '15px',
                            backgroundColor: '#f9f9f9',
                            overflow: 'hidden'
                        }}>
                        <div style={{ flexGrow: 1 }}>
                            <h4 style={{ marginBottom: '10px', color: 'navy' }}>{blog.title}</h4>
                            <hr></hr>
                            <p 
                                style={{
                                    color: '#777', 
                                    fontSize: '14px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 5,
                                    WebkitBoxOrient: 'vertical',
                                    textAlign: 'justify'
                                }}>
                                {blog.description}
                            </p>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: '20px'
                        }}>
                            <p style={{ fontSize: '12px', color: 'navy' }}>by {blog.user_name}</p>
                            <p style={{ fontSize: '12px', color: 'navy' }}>Likes: {blog.like_count}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/blog" style={{ 
                color: 'navy', 
                fontSize: '16px', 
                marginTop: '30px', 
                display: 'block' 
            }}>
                View All Blogs
            </Link>
            
        </div>
    );
};

export default TopBlogs;
