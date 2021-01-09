import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Images from './img/class.jpg';
import Image from './img/course.jpg';
import  IMG from './img/ann.jpg';
import pic from './img/room.jpg';
import picture from './img/img_avatar.jpg';
import pc from './img/article.jpg';
import comp from './img/complain.jpg';
import suport from './img/support.jpg';
import './assets/css/style.css';

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      
        <div >
       
          <Container fluid>
            <Row md={3}>
              <Col sm={6} md={3} className="cards">
                <Card>
                  <Card.Img variant="top" src={Images} style={{height: '10em'}}/>
                  <Card.Body >
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="/principal/class/view" style={{backgroundColor:'#5DC560'}}>CLASS</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={Image}  style={{height: '10em'}}/>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="/principal/course/add" style={{backgroundColor:'#5DC560'}}>COURSE</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={IMG}  style={{height: '10em'}}/>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="/principal/announcement/add" style={{backgroundColor:'#5DC560'}}>ANNOUNCEMENT</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={pc}  style={{height: '10em'}}/>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="/principal/article/add" style={{backgroundColor:'#5DC560'}}>ARTICLE</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <br />
            <Row md={3}>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={comp}  style={{height: '10em'}}/>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="/principal/complain/add" style={{backgroundColor:'#5DC560'}}>COMPLAIN</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={suport}  style={{height: '10em'}}/>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="/principal/section/add" style={{backgroundColor:'#5DC560'}}>SECTION</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={pic}  style={{height: '10em'}}/>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="/principal/room/add" style={{backgroundColor:'#5DC560'}}>ROOM</Button>
                    </center>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={picture}  style={{height: '10em'}}/>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <center>
                    <Button variant="success" href="/principal/student/add" style={{backgroundColor:'#5DC560'}}>STUDENT</Button>
                    </center>
                  </Card.Body>
                </Card>

              </Col>
            </Row>

          </Container>
        </div>
    
    )
  }
}

export default Home;