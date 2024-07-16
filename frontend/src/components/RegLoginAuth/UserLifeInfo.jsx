import React, { useEffect, useState, useContext } from 'react';
import { userContext } from '../../context/context';
import '../../cssFiles/userInfo.css';
import '../../cssFiles/userlifeInfo.css';

export default function UserLifeInfo() {
    const value = useContext(userContext);
    const [gotUser, setGotUser] = useState(false);
    const [allergy, setAllergy] = useState(null);
    const [antibiotics, setAntibiotics] = useState(null);
    const [disease, setDisease] = useState(null);
    const [allergyHistory, setAllergyHistory] = useState([]);
    const [antibioticHistory, setAntibioticHistory] = useState([]);
    const [diseaseHistory, setDiseaseHistory] = useState([]);
    const [edit, setEdit] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [editableUser, setEditableUser] = useState({
        name: '',
        age: '',
        email: '',
        country: '',
        state_district: '',
        police_station: '',
        height: '',
        weight: '',
        gender: '',
        last_donated_blood: '',
        last_donated_sperm: '',
        blood_donor: '',
        sperm_donor: '',
        blood_group: ''
    });

    useEffect(() => {
        if (value.user) {
            setGotUser(true);
            fetchPatientAntibioticAndAllergyHistory();
            Fetch_Allergy_Antibiotics_Disease();
            setEditableUser({
                name: value.user.name,
                age: value.user.age,
                email: value.user.email,
                country: value.user.country,
                state_district: value.user.state_district,
                police_station: value.user.police_station,
                height: value.user.height,
                weight: value.user.weight,
                gender: value.user.gender,
                last_donated_blood: value.user.last_donated_blood || '00-00-0000',
                last_donated_sperm: value.user.last_donated_sperm || '00-00-0000',
                blood_donor: value.user.blood_donor,
                sperm_donor: value.user.sperm_donor,
                blood_group: value.user.blood_group
            });
        }
    }, [value.user]);

    const fetchPatientAntibioticAndAllergyHistory = async () => {
        try {
            const response = await fetch('http://localhost:8000/getPatientAntibioticAndAllergyHistory', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: value.user.email })
            });
            if (response.ok) {
                const data = await response.json();
                setAllergyHistory(data.allergy);
                setAntibioticHistory(data.antibiotic);
            } else {
                console.log('Error in fetching patient antibiotic and allergy history');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const Fetch_Allergy_Antibiotics_Disease = async () => {
        try {
            const response = await fetch('http://localhost:8000/getAllergy_antibiotics_disease', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                const data = await response.json();
                setAllergy(data.allergy);
                setAntibiotics(data.antibiotic);
                setDisease(data.disease);
            } else {
                console.log('Error in fetching allergy and antibiotics');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (event) => {
        const { id, value } = event.target;

        // Check if the input is for last_donated_blood or last_donated_sperm
        if (id === 'last_donated_blood' || id === 'last_donated_sperm') {
            // If the input is cleared, set the default date
            if (value === '') {
                value = '00-00-0000'; // Assuming '00-00-0000' is your default date format
            }
        }

        // Update the state with the new value
        setEditableUser(prevState => ({ ...prevState, [id]: value }));
    };

    const handleAllergyChange = (event) => {
        const { value, checked } = event.target;
        setAllergyHistory(prevState =>
            checked ? [...prevState, value] : prevState.filter(item => item !== value)
        );
    };

    const handleAntibioticChange = (event) => {
        const { value, checked } = event.target;
        setAntibioticHistory(prevState =>
            checked ? [...prevState, value] : prevState.filter(item => item !== value)
        );
    };

    const handleDiseaseChange = (event) => {
        const { value, checked } = event.target;
        setDiseaseHistory(prevState =>
            checked ? [...prevState, value] : prevState.filter(item => item !== value)
        );
    };


    const HandleEdit = () => {
        setEdit(!edit);
        setIsEditable(!isEditable);
    };

    const HandleChanges = async (event) => {
        event.preventDefault(); // Prevent form submission

        try {
            const response = await fetch('http://localhost:8000/updateUser', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    user: editableUser,
                    allergy: allergyHistory,
                    antibiotics: antibioticHistory,
                    disease: diseaseHistory
                })
            });
            if (response.ok) {
                const data = await response.json();
                setEdit(false);
                setIsEditable(false);
                alert(data.message);
            } else {
                console.log('Error in updating user');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container'>
            {gotUser === false ? (
                <h1>loading</h1>
            ) : (
                <div className="container text-center">
                    <div className="row align-items-start">
                        <h3>User Profile</h3>
                        <div className="col-md-3 scrollable-list2">
                            <h5>Notable Antibiotics</h5>
                            {antibiotics && antibiotics.map((item, index) => (
                                <div key={index} className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-6">
                            <button type="button" className="btn btn-info my-4 align-right" onClick={HandleEdit}>Edit</button>
                            <form className="row g-3">
                                <div className="col-md-4">
                                    <label htmlFor="name" className="form-label custom-label">Name</label>
                                    <input type="text" className="form-control custom-input" id="name" value={editableUser.name} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="age" className="form-label custom-label">Age</label>
                                    <input type="number" className="form-control custom-input" id="age" value={editableUser.age} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label custom-label">Email</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" className="form-control custom-input" id="email" value={editableUser.email} aria-describedby="inputGroupPrepend" readOnly />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="country" className="form-label custom-label">Country</label>
                                    <input type="text" className="form-control custom-input" id="country" value={editableUser.country} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="state_district" className="form-label custom-label">State</label>
                                    <input type="text" className="form-control custom-input" id="state_district" value={editableUser.state_district} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="police_station" className="form-label custom-label">Police Station</label>
                                    <input type="text" className="form-control custom-input" id="police_station" value={editableUser.police_station} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="height" className="form-label custom-label">Height(cm)</label>
                                    <input type="number" className="form-control custom-input" id="height" value={editableUser.height} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="weight" className="form-label custom-label">Weight(kg)</label>
                                    <input type="number" className="form-control custom-input" id="weight" value={editableUser.weight} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="gender" className="form-label custom-label">Gender</label>
                                    <input type="text" className="form-control custom-input" id="gender" value={editableUser.gender} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="last_donated_blood" className="form-label custom-label">Last Blood Donation</label>
                                    <input type="date" className="form-control custom-input" id="last_donated_blood" value={editableUser.last_donated_blood} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="last_donated_sperm" className="form-label custom-label">Last Sperm Donation</label>
                                    <input type="date" className="form-control custom-input" id="last_donated_sperm" value={editableUser.last_donated_sperm} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                {/* <div className="col-md-2">
                                    <label htmlFor="input08" className="form-label custom-label">Status</label>
                                    <input type="text" className="form-control custom-input" id="input08" value={value.user.stats} readOnly />
                                </div> */}
                                <div className="col-md-2">
                                    <label htmlFor="blood_donor" className="form-label custom-label">Blood Donor</label>
                                    <input type="text" className="form-control custom-input" id="blood_donor" value={editableUser.blood_donor} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="sperm_donor" className="form-label custom-label">Sperm Donor</label>
                                    <input type="text" className="form-control custom-input" id="sperm_donor" value={editableUser.sperm_donor} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="blood_group" className="form-label custom-label">Blood Group</label>
                                    <input type="text" className="form-control custom-input" id="blood_group" value={editableUser.blood_group} onChange={handleInputChange} readOnly={!isEditable} />
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="input09" className="form-label custom-label">BMR</label>
                                    <input type="text" className="form-control custom-input" id="input09" value={value.user.bmr} readOnly />
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="input10" className="form-label custom-label">BMI</label>
                                    <input type="text" className="form-control custom-input" id="input10" value={value.user.bmi} readOnly />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label custom-label">Patient's Antibiotic History</label>
                                    <div className="scrollable-list">
                                        {antibioticHistory.map((item, index) => (
                                            <div key={index} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value={item}
                                                    id={`antibioticHistory-${index}`}
                                                    checked
                                                    readOnly
                                                />
                                                <label className="form-check-label" htmlFor={`antibioticHistory-${index}`}>
                                                    {item}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label custom-label">Patient's Allergy History</label>
                                    <div className="scrollable-list">
                                        {allergyHistory.map((item, index) => (
                                            <div key={index} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value={item}
                                                    id={`allergyHistory-${index}`}
                                                    checked
                                                    readOnly
                                                />
                                                <label className="form-check-label" htmlFor={`allergyHistory-${index}`}>
                                                    {item}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label className="form-label custom-label">Patient's Disease History</label>
                                    <div className="scrollable-list">
                                        {diseaseHistory.map((item, index) => (
                                            <div key={index} className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    value={item}
                                                    id={`diseaseHistory-${index}`}
                                                    checked
                                                    readOnly
                                                />
                                                <label className="form-check-label" htmlFor={`diseaseHistory-${index}`}>
                                                    {item}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                {allergy && antibiotics && disease && edit && (
                                    <>
                                        <h5>Name of Allergies & Antibiotic Resistance</h5>
                                        <div className="col-md-6 scrollable-list">
                                            <label className="form-label custom-label">Allergies</label>
                                            {allergy.map((item, index) => (
                                                <div key={index} className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value={item.allergy_name}
                                                        id={`allergy-${index}`}
                                                        onChange={handleAllergyChange}
                                                    />
                                                    <label className="form-check-label" htmlFor={`allergy-${index}`}>
                                                        {item.allergy_name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6 scrollable-list">
                                            <label className="form-label custom-label">Antibiotics</label>
                                            {antibiotics.map((item, index) => (
                                                <div key={index} className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value={item.name}
                                                        id={`antibiotic-${index}`}
                                                        onChange={handleAntibioticChange}
                                                    />
                                                    <label className="form-check-label" htmlFor={`antibiotic-${index}`}>
                                                        {item.name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="col-md-12 scrollable-list">
                                            {/* //create a checkBox for disease */}

                                            <label className="form-label custom-label">Disease</label>
                                            {disease.map((item, index) => (
                                                <div key={index} className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value={item.disease_name} 
                                                        id={`disease-${index}`}
                                                        onChange={handleDiseaseChange}
                                                    />
                                                    <label className="form-check-label" htmlFor={`disease-${index}`}>
                                                        {item.disease_name}
                                                    </label>
                                                </div>
                                            ))}
                                            
                                        </div>
                                        <button type="button" class="btn btn-info my-4 align-right" onClick={HandleChanges}>Save Changes</button>
                                    </>
                                )}

                            </form>
                        </div>
                        <div className="col-md-3 scrollable-list2">
                            <h5>Allergies</h5>
                            {allergy && allergy.map((item, index) => (
                                <div key={index} className="card mb-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{item.allergy_name}</h5>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
