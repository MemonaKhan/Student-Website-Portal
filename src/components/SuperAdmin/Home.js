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
                    <Button variant="success" href="/superAdmin/announcement" style={{backgroundColor:'#5DC560'}}>ANNOUNCEMENT</Button>
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
                    <Button variant="success" href="/superAdmin/school/add" style={{backgroundColor:'#5DC560'}}>ADD SCHOOL</Button>
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
                    <Button variant="success" href="/superAdmin/event/add" style={{backgroundColor:'#5DC560'}}>EVENTS</Button>
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
                    <Button variant="success" href="/superAdmin/article/add" style={{backgroundColor:'#5DC560'}}>ARTICLE</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row md={3}>
              <Col sm={6} md={3} className="cards">
                <Card>
                  <Card.Img variant="top" src={Image} />
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="/superAdmin/blog/add" style={{backgroundColor:'#5DC560'}}>BLOG</Button>
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
                    <Button variant="success" href="/superAdmin/client/approval" style={{backgroundColor:'#5DC560'}}>CLIENT APPROVAL</Button>
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
                    <Button variant="success" href="/superAdmin/school/approval" style={{backgroundColor:'#5DC560'}}>SCHOOL APPROVAL</Button>
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
                    <Button variant="success" href="/superAdmin/course/approval" style={{backgroundColor:'#5DC560'}}>COURSE APPROVAL</Button>
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
                    <Button variant="success" href="/superAdmin/test/add" style={{backgroundColor:'#5DC560'}}>TEST</Button>
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
                    <Button variant="success" href="/superAdmin/course/add" style={{backgroundColor:'#5DC560'}}>COURSE</Button>
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
                    <Button variant="success" href="/superAdmin/team/add" style={{backgroundColor:'#5DC560'}}>TEAM</Button>
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
                    <Button variant="success" href="/superAdmin/ad/add" style={{backgroundColor:'#5DC560'}}>WEBSITE ADS</Button>
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