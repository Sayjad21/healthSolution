import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FaThumbsUp } from "react-icons/fa";

import { userContext } from '../../context/context';

// import './css/blogCard.css';

const BlogCard = ({ blog, fetchBlogs }) => {
    const userValue = useContext(userContext);
    // console.log(userValue);

    const [blogger, setBlogger] = useState('');
    const [likes, setLikes] = useState(0);
    const [userHasLiked, setUserHasLiked] = useState(false);

    const handleLikeToggle = async () => {
        try {
            await axios.put(`http://localhost:8000/toggleLike/toggleLike`, {
                blogId: blog.id,
                userId: userValue.user.id,
            });
            fetchLikes(); // Refresh likes count and user like status
        } catch (error) {
            console.error('Error toggling like:', error);
        }
    };

    const fetchLikes = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/blogLikes/blogLikes`,
                {
                    params: {
                        blogId: blog.id,
                        userId: userValue.user.id,
                    }
                }
            );
            
            console.log(response.data);
            setLikes(response.data.likesCount);
            setUserHasLiked(response.data.userHasLiked);
        } catch (error) {
            console.error('Error fetching likes:', error);
        }
    };

    const fetchBlogger = async () => {
        try {
            // console.log("blog id=" + blog.id);
            const response = await axios.get(`http://localhost:8000/getBlogger/getBlogger`, {
                params: {
                    blogId: blog.id
                }
            });

            setBlogger(response.data.name);

            // console.log(response.data);
        } catch (error) {
            console.error('Error fetching blogger:', error);
        }
    };

    useEffect(() => {
        fetchBlogger();
        fetchLikes();   
    }, []);

    return (
        <div className="card mb-4" style={cardStyle}>
            <div style={contentStyle}>
                <div style={sectionStyle}>
                    <h3 className="card-title">{blog.title}</h3>

                    <p className="" style ={{
                        fontSize: "12px",
                        color: "#666",
                        marginTop: "-10px",
                    }}>
                        {blogger} - {blog.created_at}
                    </p>

                    <hr />

                    <p className="card-text">{blog.description}</p>
                </div>

                {userValue.user && (
                <>
                    <div style={verticalLineStyle}></div>

                    <div style={actionsStyle}>
                        <button
                            className={`btn ${userHasLiked ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={handleLikeToggle}
                        >
                            <FaThumbsUp /> 
                        </button>

                        <p style={{
                            fontSize: "16px",
                            color: "#666",
                            border: "1px solid #ddd",
                            padding: "5px",
                            marginTop: "10px",
                        }}> 
                            Likes: {likes} 
                        </p>
                    </div>
                </>
                )}
            </div>
        </div>
    );
};

const cardStyle = {
    width : "auto",
    borderRadius: "20px",
    boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.2)",
    padding: "20px",
    margin: "20px",
    backgroundColor: "#f8f9fa", // Light background for the card
};

const contentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "justify",
};

const sectionStyle = {
    flex: 5, // Title and description section will take up more space
    paddingRight: "20px",
};

const verticalLineStyle = {
    borderLeft: "2px solid #ddd",
    height: "300px",
    margin: "0 20px",
};

const actionsStyle = {
    // flex: 1, // Like button section will take up less space
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

export default BlogCard;

// import React from 'react';
// import axios from 'axios';

// import './css/blogCard.css';

// const BlogCard = ({ blog }) => {
//     // const handleDelete = async () => {
//     //     try {
//     //         await axios.delete(`http://localhost:5000/blogs/${blog.id}`);
//     //         fetchBlogs(); // Refresh blogs list
//     //     } catch (error) {
//     //         console.error('Error deleting blog:', error);
//     //     }
//     // };

//     return (
//         <div className="card mb-3">
//             <div className="card-body">
//                 <h5 className="card-title">{blog.title}</h5>
//                 <p className="card-text">{blog.description}</p>
//             </div>
//         </div>
//     );
// };

// export default BlogCard;
