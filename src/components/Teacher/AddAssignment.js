import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Image from './img/img_avatar.jpg';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';


export class AddAssignment extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                {/* <SideNavBar /> */}
                {/* <div> */}
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily:'Times New Roman' }}>
                    <div style={{ textAlign: 'center' }}><h2>Assignment Form</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Assignment Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Assignment Name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="course">
                            <Form.Label>Course</Form.Label>
                            <Form.Control as="select">
                                <option>-- Select Course --</option>
                                <option>one</option>
                                <option>two</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="url" label="Assignment Url" />
                        </Form.Group>
                        <Form.Group controlId="duration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="text" placeholder="Enter Duration" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Submit </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default AddAssignment;