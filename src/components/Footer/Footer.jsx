import React from 'react'
import style from "./footer.module.css"
import {SlSocialGoogle,SlSocialInstagram,SlSocialLinkedin,SlSocialFacebook,SlSocialTwitter,SlSocialYoutube} from "react-icons/sl"
const Footer = () => {
  return (
    <div className={style.footerContainer}>
        <div className={style.company}>
            <h1>Company</h1>
            <ul>
                <li>About Us</li>
                <li>Press</li>
                <li>Employee Wellness</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions </li>
               
            </ul>
        </div>
        <div className={style.company}>
            <h1>Members</h1>
            <ul>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Events and Gallery</li>
                

            </ul>
        </div>
        <div className={style.company}>
            <h1>Gym</h1>
            <ul>
                <li>Find a gym</li>
                <li>Own a gym</li>
                <li>Partner With us</li>
                

            </ul>
        </div>
        <div className={style.icons}>
            <SlSocialGoogle size={45}/>
            <SlSocialInstagram size={45}/>
            <SlSocialFacebook size={45}/>
            <SlSocialLinkedin size={45}/>
            <SlSocialTwitter size={45}/>
            <SlSocialYoutube size={45}/>
        </div>

    </div>
  )
}

export default Footer
