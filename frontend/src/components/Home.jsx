import React, { Fragment } from 'react';

import Navbar from './utils/Navbar';
import HazardButton from './utils/HazardButton';
import Ticker from './utils/ticker';
import ShowCard from './utils/ShowCard';
import PageFooter from './utils/PageFooter';

import Health from './img/Health.jpg';
import body from './img/body.png';
import diet from './img/diet.webp';
import pill from './img/pill.jpg';

import bg1 from './img/h1.webp';
import bg2 from './img/h2.webp';

const Home = () => {
    
    const features = {
        "bloodDonation": {
            "title": "Make a Difference: Donate Blood Today",
            "content": "Blood donation is a powerful way to save lives. By donating, you ensure hospitals have the necessary supply for surgeries, accidents, and chronic conditions. Our platform offers information on local donation centers and the benefits of donating. Join us to make a real difference and become a hero to those in need.",
            "image": "https://surgmedia.com/wp-content/uploads/2020/10/2171-blood-donation.jpg", // Use the correct image path
            "navigateTo": "/BloodDonationForm"
        },
        "bodyType": {
            "title": "Discover Your Body Type and Caloric Needs",
            "content": "Understand your body type and calculate your daily caloric needs to optimize your diet and fitness plan. Our tools provide personalized insights to help you reach your health goals effectively. Learn how to tailor your diet and exercise based on your body type for the best results.",
            "image": body, // Use the correct image path
            "navigateTo": "/diet"
        },
        "dietPlanning": {
            "title": "Plan Your Perfect Diet with Ease",
            "content": "Create a balanced diet tailored to your needs with our easy-to-use tools. Track nutrients, plan meals, and achieve your dietary goals effortlessly. Our platform provides guidance to help you make informed choices and maintain a healthy diet that suits your lifestyle.",
            "image": diet, // Use the correct image path
            "navigateTo": "/meal"
        },
        "doctorFiltering": {
            "title": "Find the Right Doctor for Your Needs",
            "content": "Search and filter doctors based on your specific needs. Our extensive database helps you find the right medical professional with the expertise you're looking for. Whether you need a specialist or a general practitioner, we make it easier to connect with the right doctor.",
            "image": Health, // Use the correct image path
            "navigateTo": "/FindDocHos"
        },

        "aichatbox" :{
            "title": "Get Instant Health Advice with AI Chatbot",
            "content": "Get quick answers to your health queries with our AI-powered chatbot. Our virtual assistant provides accurate information and guidance on a wide range of health topics. Whether you have questions about symptoms, treatments, or general wellness, our chatbot is here to help.",
            "image": "aibot.jpg", // Use the correct image path
            "navigateTo": "/AiChatBot"
        },

        "vaccination": {
            "title": "Stay Informed with Our Vaccination Tracker",
            "content": "Keep track of your vaccination schedule and stay up-to-date with our tracker. Get reminders for upcoming vaccinations and access information on recommended vaccines. Our platform helps you manage your vaccination history and ensures you receive the necessary immunizations.",
            "image": "vaccine2.jpg", // Use the correct image path
            "navigateTo": "/Vaccination"
        },

        "exercisePlanning": {
            "title": "Create a Customized Exercise Plan",
            "content": "Design a workout routine tailored to your fitness goals with our planning tools. Whether you're starting out or looking to enhance your regimen, we provide the resources to create an effective exercise plan. Achieve your fitness objectives with our personalized guidance.",
            "image": "https://media.istockphoto.com/id/1345283047/vector/black-family-exercising-together.jpg?s=612x612&w=0&k=20&c=tjiPcLDpa__Q2XmL88TgtTkJfGfGVtNbXfnjaHHVD-w=", // Use the correct image path
            "navigateTo": "/ExercisePage"
        },
        "medicationReminding": {
            "title": "Never Miss a Dose with Medication Reminders",
            "content": "Stay on track with your medication schedule using our reminder system. Get notifications for when to take your medicines and ensure you never miss a dose. Our platform helps you manage your medication routine with ease and consistency.",
            "image": pill, // Use the correct image path
            "navigateTo": "/reminder"
        },
        "symptomMatching": {
            "title": "Match Symptoms to Get Relevant Health Insights",
            "content": "Identify potential health issues by matching your symptoms with our extensive database. Receive valuable insights and recommendations to understand your health concerns better. Our tool helps you get a clearer picture of your symptoms and what they might indicate.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKNMN1t1CYF5kxR09fjb0tbuNOaXMYkejUA&s", // Use the correct image path
            "navigateTo": "/diagnosis"
        }
    };     
      

    return (
        <Fragment>
            <Navbar />

            {/* Ticker component */}
            <div> 
                <Ticker />
            </div>

            {/* Home Picture and introducing the website */}
            <div
                style={{
                    width: '100vw',
                    height: '120vh',
                    backgroundImage: `url(${bg1})`,
                    // backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '100px',
                }}
                >
                <div
                    style={{
                    backgroundColor: 'rgba(0, 0, 255, 0.5)', // Optional overlay for better text visibility
                    padding: '20px',
                    borderRadius: '10px',
                    }}
                    className="text-center"
                >
                    <h1 style={{ color: 'white', fontSize: '48px' }}>Welcome to HealthSolutions</h1>
                </div>
            </div>
            
            {/* Hazard Button */}
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                marginBottom: '100px',
                }}>
                <div 
                    style={{
                    height: "360px",
                    width: "900px",
                    backgroundColor: "rgba(0, 0, 255, 0.2)",

                    borderRadius: "10px",
                    boxShadow: "0 0 10px rgba(0, 0, 255, 0.7)",
                    }}
                >
                    <HazardButton />
                </div>
            </div>

            <div style={{
                backgroundImage: `url(${bg2})`,
                paddingTop: '100px',
                paddingBottom: '100px',
            }}>
                <div style={{
                    marginLeft: '100px',
                    marginRight: '600px',
                }}>
                    <ShowCard {...features.bodyType}/>
                </div>

                <div style={{
                    marginLeft: '600px',
                    marginRight: '100px',
                }}>
                    <ShowCard {...features.dietPlanning}/>                    
                </div>

                <div style={{
                    marginLeft: '100px',
                    marginRight: '600px',
                }}>
                    <ShowCard {...features.bloodDonation}/>
                </div>

                 <div style={{
                   marginLeft: '600px',
                   marginRight: '100px',
                }}>
                    <ShowCard {...features.doctorFiltering}/>                  
                </div>

                <div style={{
                    marginLeft: '100px',
                    marginRight: '600px',
                }}>
                    <ShowCard {...features.aichatbox}/>
                </div>

                <div style={{
                    marginLeft: '600px',
                    marginRight: '100px',
                }}>
                    <ShowCard {...features.vaccination}/>
                </div>

                <div style={{
                    marginLeft: '100px',
                    marginRight: '600px',
                }}>
                    <ShowCard {...features.exercisePlanning}/>  
                </div>
                
                <div style={{
                   marginLeft: '600px',
                   marginRight: '100px',
                }}>
                    <ShowCard {...features.medicationReminding}/>                    
                </div>

                <div style={{
                    marginLeft: '100px',
                    marginRight: '600px',
                }}>
                    <ShowCard {...features.symptomMatching}/>
                </div>
            </div>


            <div>
                <PageFooter />
            </div>

        </Fragment>
    );
};

export default Home;