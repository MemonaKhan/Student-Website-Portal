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
                    <Button variant="success" href="#" style={{backgroundColor:'#5DC560'}}>HOME</Button>
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
                    <Button variant="success" href="/client/article/add" style={{backgroundColor:'#5DC560'}}>ARTICLE</Button>
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
                    <Button variant="success" href="/client/courses" style={{backgroundColor:'#5DC560'}}>COURSE</Button>
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
                    <Button variant="success" href="/client/paymentform" style={{backgroundColor:'#5DC560'}}>PAYMENT</Button>
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
                    <Button variant="success" href="/client/feedback/add" style={{backgroundColor:'#5DC560'}}>ADD FEEDBACK</Button>
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
                    <Button variant="success" href="/client/complain/add" style={{backgroundColor:'#5DC560'}}>ADD COMPLAIN</Button>
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
                    <Button variant="success" href="/client/complain/view" style={{backgroundColor:'#5DC560'}}>COMPLAIN FORM</Button>
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
                    <Button variant="success" href="/client/complain/detail" style={{backgroundColor:'#5DC560'}}>DETAIL COMPLAIN</Button>
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