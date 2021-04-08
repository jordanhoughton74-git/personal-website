import React from "react";
import styles from '../styles/About.module.css'



function About(){
    return (
        <div id="about" className={styles.aboutDiv}>
        <div className={styles.addShadow}>
            <h2>Who am I?</h2>
                <p>My name is Jordan Houghton. I am a Web Designer and Developer based in Kent, United Kingdom. 
                    I have a strong passion for creating and designing the best User Interfaces and the most 
                    incredible User Experience possible. I am now open to working on new freelance projects! 
                    <a className="contact" href="mailto:jordanhoughton74@gmail.com"> Let's get started</a></p>
        </div>
        </div>
        );
    }
    
    export default About;