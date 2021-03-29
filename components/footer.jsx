import React from "react";
import styles from '../styles/Footer.module.css';
import Link from 'next/link';




function Footer(){
    return (
        <>
        <div className={styles.footer}>
           <p className={styles.link}>Email: <a className={styles.recolor} href="mailto:info@houghtonwebdesign.co.uk">info@houghtonwebdesign.co.uk</a> Website by <a className={styles.recolor} href="https://houghtonwebdesign.co.uk/"> HWD</a></p>
           <Link href="/credit"><a className={styles.credit}>Credit</a></Link>
        </div>
      
</>
        );
    }
    
    export default Footer;