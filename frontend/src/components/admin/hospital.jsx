import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import HospitalCard from './hospitalCard';

const AddHospitalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    policestation: '',
    contact_number: '',
    email: ''
  });

  const [hospitals, setHospitals] = useState([]); // will contain all the hospitals

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    try {
      const response = await axios.post('http://localhost:5000/addHospitals', formData);
      console.log('Hospital added successfully:', response.data);
      
      fetchHospitals(); // Fetch hospitals again to display the updated list
      
      // Reset form
      setFormData({
        name: '',
        street: '',
        city: '',
        policestation: '',
        contact_number: '',
        email: ''
      });
    } catch (error) {
      console.error('Error adding hospital:', error);
    }
  };

  const fetchHospitals = async () => {
      try {
          const response = await axios.get('http://localhost:5000/gethospitals');
          setHospitals(response.data);
      } catch (error) {
          console.error('Error fetching hospitals:', error);
      }
  };

  useEffect(() => {     

      fetchHospitals();
  }, []);


  const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:5000/deleteHospital/${id}`);
        fetchHospitals(); // Refresh the data after deletion
    } catch (error) {
        console.error('Error deleting hospital data:', error);
    }    
  }

  function renderHospitals(){
      return hospitals.map((hospital, index) => {
          return <HospitalCard key={index} hospital={hospital} handleDelete={handleDelete}/>;
      });
  }

  return (
    <Fragment>
        <div className="container mt-5">
        <h1>Add Hospital</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
            <label className="form-label">Street:</label>
            <input type="text" className="form-control" name="street" value={formData.street} onChange={handleChange} required />
            </div>
            <div className="mb-3">
            <label className="form-label">City:</label>
            <input type="text" className="form-control" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="mb-3">
            <label className="form-label">Police Station:</label>
            <input type="text" className="form-control" name="policestation" value={formData.policestation} onChange={handleChange} required />
            </div>
            <div className="mb-3">
            <label className="form-label">Contact Number:</label>
            <input type="text" className="form-control" name="contact_number" value={formData.contact_number} onChange={handleChange} required/>
            </div>
            <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required/>
            </div>
            <button type="submit" className="btn btn-primary mb-3">Add Hospital</button>
        </form>
        </div>

        <div className="container mt-5 mb-5">
            <h2>Hospitals</h2>
            <div className="row">
            {
                renderHospitals()
            }
            </div>
        </div> 

      </Fragment>
  );
};

export default AddHospitalForm;
