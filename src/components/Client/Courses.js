import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import Image from './img/course.jpg';

import CourseView from "./ViewCourse";

import './assets/css/style.css';

class Courses extends Component {
    constructor(){
        super();

        this.state = {
            course: 0, 
            redirect:false
        }
    }
    handleCourse = (courseId) =>{
        // if(this.state.course){
            this.setState({
                redirect:true,
                course:courseId,
            })
        // }

    }
    static propTypes = {}

    render() {
        if(this.state.redirect){
            console.log(this.state.course);
            return(<CourseView course={this.state.course} />)
        }
        else{
    return (
        <>
            <div >
                {/* <div style={{ paddingLeft: '20%' }}> */}
                <Container fluid>
                    <Row md={4}>
                        <Col sm={6} md={4}>
                            <Card style={{ border: '2px solid #5DC560' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Header style={{ textAlign: 'center', backgroundColor:'black', opacity:'0.8', color:'#5DC560' }} 
                                    as="h5">Course Name
                                        <br />                                        <br />  
                                         {/* {isShown && ( */}
                                       {/* <> */}
                                        <Button onClick={()=>this.handleCourse('1')} style={{color:'white', backgroundColor:'#5DC560',fontSize:'0.7em', borderRadius:'15px', padding:'5px 20px'}} variant="">View</Button>
                                    {/* </> */}
                                    {/* )} */}
                                </Card.Header>
                            </Card>
                        </Col>
                        <Col sm={6} md={4}>
                            <Card style={{ border: '2px solid #5DC560' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Header style={{ textAlign: 'center', backgroundColor:'black', opacity:'0.8', color:'#5DC560' }} 
                                    as="h5">Course Name
                                        <br />                                        <br />  
                                         {/* {isShown && ( */}
                                       {/* <> */}
                                        <Button onClick={()=>this.handleCourse('1')} style={{color:'white', backgroundColor:'#5DC560',fontSize:'0.7em', borderRadius:'15px', padding:'5px 20px'}} variant="">View</Button>
                                    {/* </> */}
                                    {/* )} */}
                                </Card.Header>
                            </Card>
                        </Col>
                        <Col sm={6} md={4}>
                            <Card style={{ border: '2px solid #5DC560' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Header style={{ textAlign: 'center', backgroundColor:'black', opacity:'0.8', color:'#5DC560' }} 
                                    as="h5">Course Name
                                        <br />                                        <br />  
                                         {/* {isShown && ( */}
                                       {/* <> */}
                                        <Button onClick={()=>this.handleCourse('1')} style={{color:'white', backgroundColor:'#5DC560',fontSize:'0.7em', borderRadius:'15px', padding:'5px 20px'}} variant="">View</Button>
                                    {/* </> */}
                                    {/* )} */}
                                </Card.Header>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row md={4}>
                        <Col sm={6} md={4}>
                            <Card style={{ border: '2px solid #5DC560' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Header style={{ textAlign: 'center', backgroundColor:'black', opacity:'0.8', color:'#5DC560' }} 
                                    as="h5">Course Name
                                        <br />                                        <br />  
                                         {/* {isShown && ( */}
                                       {/* <> */}
                                        <Button onClick={()=>this.handleCourse('1')} style={{color:'white', backgroundColor:'#5DC560',fontSize:'0.7em', borderRadius:'15px', padding:'5px 20px'}} variant="">View</Button>
                                    {/* </> */}
                                    {/* )} */}
                                </Card.Header>
                            </Card>
                        </Col>
                        <Col sm={6} md={4}>
                            <Card style={{ border: '2px solid #5DC560' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Header style={{ textAlign: 'center', backgroundColor:'black', opacity:'0.8', color:'#5DC560' }} 
                                    as="h5">Course Name
                                        <br />                                        <br />  
                                         {/* {isShown && ( */}
                                       {/* <> */}
                                        <Button onClick={()=>this.handleCourse('1')} style={{color:'white', backgroundColor:'#5DC560',fontSize:'0.7em', borderRadius:'15px', padding:'5px 20px'}} variant="">View</Button>
                                    {/* </> */}
                                    {/* )} */}
                                </Card.Header>
                            </Card>
                        </Col>
                        <Col sm={6} md={4}>
                            <Card style={{ border: '2px solid #5DC560' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Header style={{ textAlign: 'center', backgroundColor:'black', opacity:'0.8', color:'#5DC560' }} 
                                    as="h5">Course Name
                                        <br />                                        <br />  
                                         {/* {isShown && ( */}
                                       {/* <> */}
                                        <Button onClick={()=>this.handleCourse('1')} style={{color:'white', backgroundColor:'#5DC560',fontSize:'0.7em', borderRadius:'15px', padding:'5px 20px'}} variant="">View</Button>
                                    {/* </> */}
                                    {/* )} */}
                                </Card.Header>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )}
    }
}

export default Courses;