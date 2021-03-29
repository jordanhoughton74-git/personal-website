import React from "react";
import styles from '../styles/Employment.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Education(){
    return (
        <>
    <div id="education" className={styles.background}>
    <div>

         <Container fluid className={styles.div}> 
            <Row>
                <Col className={styles.addShadow} lg={6} md={12}>    
                    <div>
                        <h2 className={styles.title}>Education</h2>
                        <h3>Bsc Hons Business Studies 2.1 | Canterbury Christ Church University. </h3>
                                <p>Graduating with with a 2.1 learning the functions of a business.  How and why they operate like they do.
                                    How important digital marketing is, with the future being computer based.
                                </p>
                                <h3>Level 3 BTEC Business Studies | Distinction</h3>
                                <p></p>
                                <h3>BTEC First Diploma OCR I.T | Distinction</h3>
                                <h3>BTEC Level 2 Certificate Engineering | Merit</h3>
                                <h3>5 GCSE B Grades</h3>
                                <p>
                                    
                                </p>
                    </div>
                </Col>
                <Col className={styles.imgDiv} lg={6} md={12}> 
                <img className={styles.workImg} src="/images/work.png" alt="education inspiration"/>
                </Col>
            </Row>
        </Container> 
        </div>

    </div>
      
        </>
        );
    }
    
    export default Education;