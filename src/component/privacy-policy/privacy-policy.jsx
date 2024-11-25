import React from 'react';
import './privacy-policy.css'
import NavBar from '../navbar';

const PrivacyPolicy = () => {
    return (
        <div>
            <NavBar/>
            <h2>Welcome to HK Realty Group</h2>
            <h2>Privacy Policy</h2>
            <p>Last updated: November 24, 2024</p>
            <p>This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
            <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

            <h2>Interpretation and Definitions</h2>
            <h3>Interpretation</h3>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            <h3>Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul>
                <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                <li><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party.</li>
                <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to HK REALTY.</li>
                <li><strong>Cookies</strong> are small files placed on Your computer, mobile device or any other device.</li>
                <li><strong>Country</strong> refers to Haryana, India.</li>
                <li><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
                <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                <li><strong>Service</strong> refers to the Website.</li>
                <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company.</li>
                <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself.</li>
                <li><strong>Website</strong> refers to HK REALTY, accessible from <a href="https://docs.google.com" target="_blank">https://docs.google.com</a>.</li>
                <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.</li>
            </ul>

            <h2>Collecting and Using Your Personal Data</h2>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
            <ul>
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
            </ul>

            <h4>Usage Data</h4>
            <p>Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's IP address, browser type, browser version, the pages of our Service that You visit, and other diagnostic data.</p>

            <h3>Tracking Technologies and Cookies</h3>
            <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Learn more about cookies on the <a href="https://www.freeprivacypolicy.com" target="_blank">Free Privacy Policy website article</a>.</p>

            <h2>Use of Your Personal Data</h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
                <li>To provide and maintain our Service.</li>
                <li>To manage Your Account.</li>
                <li>To contact You regarding updates, security, or promotional information.</li>
                <li>To manage Your requests.</li>
                <li>For business transfers, affiliates, and other users with Your consent.</li>
            </ul>

            <h3>Retention of Your Personal Data</h3>
            <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.</p>

            <h2>Security of Your Personal Data</h2>
            <p>We strive to use commercially acceptable means to protect Your Personal Data, but no method of transmission over the Internet is 100% secure.</p>

            <h2>Children's Privacy</h2>
            <p>Our Service does not address anyone under the age of 13. If We become aware that We have collected Personal Data from anyone under the age of 13 without parental consent, We take steps to remove that information from Our servers.</p>

            <h2>Links to Other Websites</h2>
            <p>Our Service may contain links to other websites that are not operated by Us. We strongly advise You to review the Privacy Policy of every site You visit.</p>

            <h2>Changes to this Privacy Policy</h2>
            <p>We may update Our Privacy Policy from time to time. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul>
                <li>By email: <a href="mailto:hkrealty365@gmail.com">hkrealty365@gmail.com</a></li>
                <li>By phone number: <a href="tel:8826177701">8826177701</a></li>
            </ul>
        </div>
    );
};

const headerStyle = {
    backgroundColor: '#282c34',
    padding: '15px 20px',
    color: 'white',
    borderBottom: '3px solid #61dafb', // Added subtle border
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
};

const titleStyle = {
    fontSize: '1.8rem',
    margin: 0,
};

const navStyle = {
    listStyleType: 'none',
    display: 'flex',
    padding: 0,
    margin: 0,
};

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
};

const linkHoverStyle = {
    color: '#61dafb', // Highlight on hover
};

// Add hover effect dynamically using CSS-in-JS
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseover', () => (link.style.color = linkHoverStyle.color));
        link.addEventListener('mouseout', () => (link.style.color = linkStyle.color));
    });
});

export default PrivacyPolicy;
