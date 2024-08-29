import React from "react";
import { Link } from "react-router-dom";

import "./css/PageFooter.css";

const PageFooter = () => {
  return (
    <footer className="site-footer">
      <div className="" style={{
        padding: '50px',
      }}>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Welcome to HealthSolution</h6>
            <p className="text-justify">
                Your comprehensive digital companion for optimal health and wellness. At HealthSolution, we believe that maintaining a healthy lifestyle should be accessible and convenient for everyone. Our platform offers a wide range of services designed to cater to your health needs—from personalized diet plans and nutrition calculators to exercise suggestions and symptom matching. Our advanced tools include a streamlined doctor and hospital finder, an innovative organ donor-recipient matching system, and a user-friendly medication reminder. Whether you're seeking to improve your fitness, manage your diet, or find reliable medical advice, HealthSolution provides the resources you need to make informed decisions and lead a healthier life. Join us on this journey to better health and discover how our integrated solutions can transform your well-being.            
            </p>            
          </div>
          <div className="col-6 col-md-3">
            <h6>Key Features</h6>
            <ul className="">
              <li>
                Symptom Matcher and Disease Prediction
              </li>
              <li>
                Diet Planner
              </li>
              <li>
                Blood Donation
              </li>
              <li>
                Blog Writting
              </li>
              <li>
                Health Tips
              </li>
              <li>
                Medication Reminder
              </li>
              <li>
                Excersize Planner
              </li>
              <li>
                Doctor Filter
              </li>
              <li>
                Admin Site and Secure Authorization
              </li>
              <li>
                AI ChatBot
              </li>
              <li>
                Hazard Button
              </li>
              <li>
                Vaccination
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/contribute">Contribute</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/sitemap">Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="small" />
      </div>
      <div className="" style={{
        padding: '0px 50px',
      }}>
        <div className="row">
          <div className="col-md-8 col-sm-6 col-12">
            <p className="copyright-text">
              Copyright © 2024 All Rights Reserved by 
              <Link
                    to="https://www.facebook.com/profile.php?id=100014861868150"
                    style={{ color: 'lightblue', margin: '7px',textDecoration: 'none', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#007FFF'}
                    onMouseLeave={(e) => e.target.style.color = 'lightblue'}
                >
                    Abhishek Roy
                </Link>
              , 
              <Link
                    to="https://www.facebook.com/robin.niloy.526"
                    style={{ color: 'lightblue', margin: '7px',textDecoration: 'none', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#007FFF'}
                    onMouseLeave={(e) => e.target.style.color = 'lightblue'}
                >
                    Niloy Das Robin
              </Link>
              and
              <Link
                    to="https://www.facebook.com/sayjad.rahman.9"
                    style={{ color: 'lightblue', margin: '7px',textDecoration: 'none', transition: 'color 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.color = '#007FFF'}
                    onMouseLeave={(e) => e.target.style.color = 'lightblue'}
                >
                    Sayjad Rahman
              </Link>
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="#">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;