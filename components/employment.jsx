import React from "react";
import styles from '../styles/Employment.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Employment(){
    return (
     <>
     <div id="employment" className="relative">
     <div>

    <Container fluid className={styles.div2}> 
    <Row className="flex-row-reverse">
        
       <Col className={styles.addShadow} lg={6} md={12}>     
            <div>
                <h2 className={styles.title}>Employment History</h2>
                <h3>Web Designer | Houghton Web Design.  Feb 2021-Present</h3>
                <p>Web Design and Developemt starting from the ground up.  Using React.JS and Next.JS 
                    as the main resource and building blocks.  Customising sites to customer specs as well
                    industry best pactrices regarding SEO and mobile repsoniveness.</p>
                <h3>PPI Quality Controller | December 2016-September 2020</h3>
                <p>Responsible for feedback and coaching on a one to one basis, identifying and highlighting any issues.
                Maintaining all quality records for team members on a daily basis.  
                Supporting and assisting with the departmental recruitment process 
                </p>
                <h3>PPI Premiums Administrator | February 2015 – December 2016:</h3>
                    <p>Working with accuracy and speed as to meet set SLAs to avoid financial penalties for the company. 
                        Meeting strict GDPR rules to avoid the loss of sensitive data.
                        </p> 
            </div>
            </Col>

            <Col className={styles.imgDiv} lg={6} md={12}>
                <img className={styles.workImg} src="/images/education2.png" alt="work set up"/>
            </Col>
        </Row>
        </Container>
        </div>

        
        </div>

        
    

      
</>
        );
    }
    
    export default Employment;