import React, { useState, useEffect,Fragment } from 'react';
import axios from 'axios';

const AddThanaForm = () => {
    const [thanaFrom, setThanaFrom] = useState('');
    const [nearestThanas, setNearestThanas] = useState(['']);
    const [thanaData, setThanaData] = useState([]);
  
    const handleThanaFromChange = (e) => {
        setThanaFrom(e.target.value);
    };

    const handleNearestThanaChange = (index, e) => {
        const newNearestThanas = [...nearestThanas];
        newNearestThanas[index] = e.target.value;
        setNearestThanas(newNearestThanas);
    };

    const addNearestThana = () => {
        setNearestThanas([...nearestThanas, '']);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('thanaFrom:', thanaFrom);
        console.log('nearestThanas:', nearestThanas);

        try {
            const response = await axios.post('http://localhost:5000/addThana/addThana', {
                thana_name_from: thanaFrom,
                nearest_thanas: nearestThanas
            });
            console.log(response.data);

            fetchThana();
            setThanaFrom('');
            setNearestThanas(['']);

        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/deleteThana/deleteThana/${id}`);
            fetchThana(); // Refresh the data after deletion
        } catch (error) {
            console.error('Error deleting thana nearest data:', error);
        }
    };


    const fetchThana = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getThana/getThana');
            setThanaData(response.data);
        } catch (error) {
            console.error('Error fetching thana nearest data:', error);
        }
    };

    useEffect(() => {
        fetchThana();
    }, []);

    return (
        <Fragment>
            <div className="container mt-5 mb-5">
                <h2 className="mb-4">Add Thana Nearest</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>Thana Name From:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={thanaFrom}
                            onChange={handleThanaFromChange}
                            required
                        />
                    </div>
                    {nearestThanas.map((thana, index) => (
                        <div className="form-group mb-3" key={index}>
                            <label>Nearest Thana {index + 1}:</label>
                            <input
                                type="text"
                                className="form-control"
                                value={thana}
                                onChange={(e) => handleNearestThanaChange(index, e)}
                                required
                            />
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-primary mt-3 mb-3"
                        onClick={addNearestThana}
                        style={{ marginRight: '10px' }}
                    >
                        Add Nearest Thana
                    </button>
                    <button type="submit" className="btn btn-success mt-3 mb-3">
                        Submit
                    </button>
                </form>

            </div>
                <div className='container mb-5'>
                    <div className="container mt-5">
                    <h2>Thana Nearest Data</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Thana Name From</th>
                                <th>Thana Name To</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {thanaData.map((thana) => (
                                <tr key={thana.id}>
                                    <td>{thana.id}</td>
                                    <td>{thana.thana_name_from}</td>
                                    <td>{thana.thana_name_to}</td>
                                    <td>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => handleDelete(thana.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </Fragment>
    );
};

export default AddThanaForm;


// Dhanmondi
// Cantonment
// Sher-E-Bangla Nagar
// Tejgaon Industrial Area
// Gulshan
// Shahbag
// Ramna
// Bhatara
// Panthapath
// Motijheel
// Shahjahanpur
// Mirpur
// Lalbag
// Mugdha