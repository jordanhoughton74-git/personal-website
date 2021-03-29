import Head from 'next/head';
import React from "react";
import styles from '../styles/Credit.module.css';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/footer'




function Credits (){
    return (

 

<>
<Head>
    <title>Jordan Houghton | Credits</title>
    <meta name="robots" content="noindex"/>
</Head>
<div className={styles.credit}>
    <ul className={styles.top}>
        <li><Link href="/#about"><a className="about2">About </a></Link></li>
        <li><Link href="/#employment"><a className="employment2">Employment </a></Link></li>
        <li><Link href="/#education"><a className="education2">Education</a></Link></li>
    </ul>
<div className={styles.topPad}>

    <h1>With special thanks</h1>
        <Container className={styles.anchor}>
            <p className={styles.center}>
                <a className={styles.anchor} href="https://storyset.com/marketing">Illustration by Freepik Storyset</a>
            </p>
            <p>
                <a className={styles.anchor} href='https://www.freepik.com/vectors/idea'>Idea vector created by stories - www.freepik.com</a>
            </p>
            <p>
                <a className={styles.anchor} href='https://www.freepik.com/vectors/business'>Business vector created by stories - www.freepik.com</a>
            </p>
        </Container>
</div>
</div>
<Footer />
</>
)
}

export default Credits;