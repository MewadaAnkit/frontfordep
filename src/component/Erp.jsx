import React from "react";
import Header from "../component/Header";
import {Link} from "react-router-dom"
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from '../component/HomePage/Navbar'
import Footer from '../component/HomePage/Footer'
const Erp = () => {
  return (
    <div>
      <Navbar/>

      <Container className="my-5 mb-5 bg-grey">
        <Row>
           <Col md={6}>
              <Link to="/studentlogin"> {/* Add this Link component */}
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title>Student Login</Card.Title>
                    <Card.Text>
                      This is a student login you can click here and go to Student Login.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col md={6}>
              <Link to="/adminlogin"> {/* Add this Link component */}
                <Card className="shadow">
                  <Card.Body>
                    <Card.Title className="black">Faculty Login</Card.Title>
                    <Card.Text>
                    This is a Hod login you can click here and go to Hod Login.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default Erp;