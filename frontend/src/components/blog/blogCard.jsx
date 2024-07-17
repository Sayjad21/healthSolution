import React from 'react';
import axios from 'axios';

const BlogCard = ({ blog }) => {
    // const handleDelete = async () => {
    //     try {
    //         await axios.delete(`http://localhost:5000/blogs/${blog.id}`);
    //         fetchBlogs(); // Refresh blogs list
    //     } catch (error) {
    //         console.error('Error deleting blog:', error);
    //     }
    // };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                
                {/* <button className="btn btn-danger me-2" onClick={handleDelete}>
                    Delete
                </button> */}

                {/* Add like/dislike functionality here */}
            </div>
        </div>
    );
};

export default BlogCard;
