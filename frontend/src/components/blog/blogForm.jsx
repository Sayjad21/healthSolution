import React, { useState } from 'react';
import axios from 'axios';


const CreateBlogForm = ({setShowForm}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Creating blog:', title, description);
        
        try {
            const response = await axios.post('http://localhost:5000/addBlogs', {
                title,
                description,
                user_id: 2, // Replace with actual user_id or get dynamically
            });
            console.log('Blog created:', response.data);
            
            setTitle('');
            setDescription('');

        } catch (error) {
            console.error('Error creating blog:', error);
        }
    };

    const handleCancel = () => {
        setShowForm(false); // Set showForm to false to hide the form
    };

    return (
        <div className="mt-5" 
             style = {{
                height: "auto",
                width: "auto",
                backgroundColor: "white",
                margin: "50px",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
             }}>
            <h2 className='mb-3'>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="5"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mt-5 mb-3 d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary me-2">Create Blog</button>
                    <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
    </div>

    );
};

export default CreateBlogForm;
