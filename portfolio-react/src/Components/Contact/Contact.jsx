import React from 'react';
import './Contact.css';
const mail_icon = "/images/gmail.png";
const call_icon = "/images/watsapp.png"; // matches your file name exactly
const location_icon = "/images/map.png";

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "584e177d-7143-43ac-bb33-f459176ce3a6");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert("Message sent successfully!");
            event.target.reset(); // Reset the form after successful submission
        }
    };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
                    <di className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>nikhilnikki6360@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+91 6360095984</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Banglore,India</p>
                        </div>
                    </di>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name='name' required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name='email' required />
                    <label htmlFor="">Your Message</label>
                    <textarea placeholder="Enter your message" rows="8" name='message' required></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;