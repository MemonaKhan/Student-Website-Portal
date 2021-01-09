import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import SideNavBar from "./SideNavBar";

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Image from './img/course.jpg';
import { Divider } from '@material-ui/core';


export class CourseView extends Component {
    constructor(){
        super();

        this.state = {
            
        }
    }
    
    static propTypes = {}

    render() {

            return (
                <>
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily:'Times New Roman' }}>
                <div><h2>Course</h2></div>
                    <Divider /><br />
                    <img src={Image} style={{width:'30%'}}/>
                    <Form>
                        <Form.Group controlId="courseName">
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control type="text" value="English" disabled placeholder="" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                            </Form.Group>
                        <Form.Group controlId="courseDesc">
                                <Form.Label>Course Description</Form.Label>
                                <Form.Control type="text" value="Lorem Ipsum" disabled placeholder="" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                            </Form.Group>
                            <Button variant="success" type="submit">Enroll </Button>
                        </Form>
                    </div>
                </>
            )
        
    }
}

export default CourseView;