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
              <Col sm={6} md={3} className="cards">
                <Card>
                  <Card.Img variant="top" src={Image} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="#" style={{backgroundColor:'#5DC560'}}>REGISTRATION</Button>
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
                    <Button variant="success" href="/teacher/article/add" style={{backgroundColor:'#5DC560'}}>ADD ARTICLE</Button>
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
                    <Button variant="success" href="/teacher/teacher/assignment/add" style={{backgroundColor:'#5DC560'}}>ADD ASSIGNMENT</Button>
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
                    <Button variant="success" href="/teacher/onlinetest/add" style={{backgroundColor:'#5DC560'}}>ONLINE TEST</Button>
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
                    <Button variant="success" href="/teacher/testfile/add" style={{backgroundColor:'#5DC560'}}>TEST FILE</Button>
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
                    <Button variant="success" href="/teacher/onlinetest/view" style={{backgroundColor:'#5DC560'}}>TEST</Button>
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
                    <Button variant="success" href="/teacher/notes/view" style={{backgroundColor:'#5DC560'}}>NOTES</Button>
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
                    <Button variant="success" href="/teacher/onlinetest/add" style={{backgroundColor:'#5DC560'}}>ADD NOTES</Button>
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