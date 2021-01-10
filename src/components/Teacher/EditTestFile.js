import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import {  Button, Form } from 'react-bootstrap';

// import Image from './img/img_avatar.jpg';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';


export class EditTestFile extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily:'Times New Roman' }}>
                    <div style={{ textAlign: 'center' }}><h2>Test Create</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="course">
                            <Form.Label>Course</Form.Label>
                            <Form.Control as="select">
                                <option>-- Select Course --</option>
                                <option>one</option>
                                <option>two</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="duration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control type="text" placeholder="Enter Duration" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="file" label="Select File" />
                        </Form.Group>
                        
                        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Add </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default EditTestFile;