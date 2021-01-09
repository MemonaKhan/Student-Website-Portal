import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Image from './img/img_avatar.jpg';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';


export class AddNotes extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily:'Times New Roman' }}>
                    <div style={{ textAlign: 'center' }}><h2>Lecture Form</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="lectureName">
                            <Form.Label>Lecture Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Lecture Name" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="course">
                            <Form.Label>Title</Form.Label>
                            <Form.Control as="select" required>
                                <option>-- Select Course --</option>
                                <option>one</option>
                                <option>two</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="file" label="Lecture Url" required/>
                        </Form.Group>
                        <Form.Group controlId="lectureDesc">
                            <Form.Label>Lecture Description</Form.Label>
                            <Form.Control as="textarea" rows={3}  placeholder="Enter lecture Description" required/>
                        </Form.Group>
                        <Form.Group controlId="video">
                            <Form.Label>Video Url</Form.Label>
                            <Form.Control type="text" placeholder="Enter Lecture Url" required />
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

export default AddNotes;