import React, { useState, useEffect } from "react";
import styles from '../styles/Header.module.css'



function HomeTop(){
    const [scroll, setScroll] = useState(false);
   useEffect(() => {
     window.addEventListener("scroll", () => {
       setScroll(window.scrollY > 650);
     });
   }, []);

   


    
    return (
        <div className={styles.header}>
           
            <ul>
                <li><a className={scroll ? "about2" : "about"} href="#about">About </a> </li>
                <li><a className={scroll ? "employment2" : "employment"} href="#employment">Employment </a></li>
                <li><a className={scroll ? "education2" : "education"} href="#education">Education</a> </li>
            </ul>


            
        
        </div>
    );
}

export default HomeTop;