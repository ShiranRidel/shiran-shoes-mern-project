import emailjs from "emailjs-com";
import React from 'react';
import background from '../../headers/icon/greyback3.jpeg'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_xxxxxx', 'template_xxxxxx', e.target, 'user_xxxxxxxxxxxxxxx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        toast('thank you for your Comment', {
            position: toast.POSITION.BOTTOM_CENTER
          })

    }
    return(
        <div style={{ backgroundImage: `url(${background})` }}>
           <div style={{marginTop:'-14px'}}>
                <div className="contact-page">
            <h3><b/>contact us</h3>
            <h5> <PhoneAndroidIcon/>tel: 0528-572495</h5>
            <h5> <AlternateEmailIcon/> email: shiranridel90@gmail.com</h5>
            <h5> <LocationOnIcon/> address: harzel 20, tel-aviv</h5>
        </div>
        <div className="w3-card-4">
            <form onSubmit={sendEmail} >
                 <div class="w3-container w3-transparet">
                <h2 class="w3-hover-text-grey">Share your thoughts with us</h2>
                 </div>
                    <div className="w3-container w3-transparet">
                        <div>
                            <input type="text" className="w3-input w3-border  w3-hover-gray w3-light-gray " placeholder="Name" name="name" required/>
                        </div>
                        <div>
                            <input type="email" className="w3-input w3-border w3-light-gray w3-hover-gray" placeholder="Email Address" name="email" required/>
                        </div>
                        <div>
                            <input type="text" className="w3-input w3-border w3-light-gray w3-hover-gray" placeholder="Subject" name="subject" required/>
                        </div>
                        <div>
                            <textarea className="w3-input w3-border  w3-hover-gray w3-light-gray" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <div>
                            <input type="submit" className="w3-btn w3-border w3-hover-text-grey w3-transparet" value="Send Message"></input>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
        </div>
    )
}




