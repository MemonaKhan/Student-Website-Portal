import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import Image from './img/img_avatar.jpg';

import './assets/css/style.css';

export class Home extends Component {

  static propTypes = {}

  render() {
    return (
      <>
        {/* <SideNavBar /> */}
        {/* <div> */}
        <div >
          {/* <div style={{ paddingLeft: '20%' }}> */}
          <Container fluid>
            <Row md={3}>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={Image} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                      <Button variant="success" href="/parent/complaint/add" style={{ backgroundColor: '#5DC560' }}>ADD COMPLAINT</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={Image} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                      <Button variant="success" href="/parent/ClassSchdule/view" style={{ backgroundColor: '#5DC560' }}>CLASS SCHDULE</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={Image} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                      <Button variant="success" href="/parent/Attendance/view" style={{ backgroundColor: '#5DC560' }}>ATTENDANCE</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={Image} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                      <Button variant="success" href="/parent/Enrolled" style={{ backgroundColor: '#5DC560' }}>ENROLLMENT</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row md={3}>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={Image} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                      <Button variant="success" href="/parent/announcement" style={{ backgroundColor: '#5DC560' }}>ANNOUNCEMENTS</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={Image} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                      <Button variant="success" href="/parent/result" style={{ backgroundColor: '#5DC560' }}>RESULTS</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

          </Container>
        </div>
      </>
    )
  }
}

export default Home;