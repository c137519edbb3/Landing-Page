import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Product</h4>
        <ul>
          <li>Homepage</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
          <li>Download</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Testimonial</li>
          <li>Team</li>
          <li>FAQ</li>
          <li>Detail Blog</li>
          <li>Detail Team</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Pages</h4>
        <ul>
          <li>Home</li>
          <li>Get Started</li>
          <li>Case Studies</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>info@exampleagency.com</li>
          <li>+1 (555) 123-4567</li>
          <li>123 Startup Avenue, Cityville, State, ZIP</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© Syslab.ai 2024 all rights reserved</p>
        <div className="social-icons">
          <a href="#">YouTube</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </div>
      
      {/* Inline CSS */}
      <style jsx>{`
        /* General Styles */
        body {
          margin: 0;
          font-family: Arial, sans-serif;
        }

        /* Footer Styles */
        .footer {
          background-color: #f9f9f9; /* Light background color */
          padding: 40px 20px; /* Padding around the footer */
          display: flex; /* Use flexbox for layout */
          justify-content: space-between; /* Space between sections */
          border-top: 1px solid #eaeaea; /* Top border */
          font-size: 14px; /* Base font size */
          color: #333; /* Text color */
        }

        /* Footer Sections */
        .footer-section {
          flex: 1; /* Each section takes equal width */
          margin-right: 20px; /* Margin between sections */
        }

        .footer-section:last-child {
          margin-right: 0; /* Remove margin from the last section */
        }

        .footer-section h4 {
          font-weight: bold; /* Bold headings */
          margin-bottom: 15px; /* Space below headings */
          font-size: 16px; /* Larger font size for headings */
        }

        .footer-section ul {
          list-style: none; /* Remove bullet points */
          padding: 0; /* Remove padding */
        }

        .footer-section li {
          margin-bottom: 10px; /* Space between list items */
        }

        /* Footer Bottom */
        .footer-bottom {
          text-align: center; /* Center the bottom text */
          margin-top: 20px; /* Space above the bottom text */
          font-size: 12px; /* Smaller font size */
        }

        /* Social Icons */
        .social-icons {
          margin-top: 10px; /* Space above social icons */
        }

        .social-icons a {
          margin: 0 10px; /* Space between icons */
          text-decoration: none; /* Remove underline */
          color: #555; /* Icon color */
          font-weight: bold; /* Make icon text bold */
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .footer {
            flex-direction: column; /* Stack sections on smaller screens */
            align-items: center; /* Center items */
          }

          .footer-section {
            margin-right: 0; /* Remove right margin */
            margin-bottom: 20px; /* Space between sections when stacked */
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
