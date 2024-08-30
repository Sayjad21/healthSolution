import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';

import { FaTimes } from 'react-icons/fa';

import { userContext } from '../../context/context';

const Medicine = ({ medicine, fetchMedicines }) => {
    console.log(medicine);
    const userValue = useContext(userContext);

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/deleteMedication/${medicine.id}`);
            fetchMedicines(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting medication:', error);
        }
    };

    return (
        <div 
            className="card mb-3" 
            style={{
                width: '100%',
                backgroundColor: 'rgba(0, 0, 255, 0.3)',
                borderRadius: '10px',
                padding: '15px',
                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: medicine.red_border ? '5px solid red' : 'none',
            }}>
            
            <div style={{ flex: 1 }}>
                <h5 style={{ marginBottom: '5px', color: '#333' }}>{medicine.name}</h5>
                <p style={{
                    color: 'navy',
                    fontSize: '14px',
                    marginBottom: '0'
                }}>
                    {medicine.initial_date} to {medicine.end_date}
                </p>
            </div>
            
            <div style={{ flex: 1, textAlign: 'center' }}>
                <h5 style={{ marginBottom: '5px', color: '#333' }}>Intake Time: {medicine.intake_time} </h5>
            </div>
            
            <div>
                <button 
                    onClick={handleDelete} 
                    style={{
                        backgroundColor: 'transparent',
                        border: '2px solid navy',
                        padding: '3px',
                        color: 'navy',
                        cursor: 'pointer'
                    }}>
                    <FaTimes size={20} />
                </button>
            </div>
        </div>
    );
};

export default Medicine;