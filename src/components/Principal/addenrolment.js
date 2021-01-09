import React, { Component } from 'react'
// import PropTypes from 'prop-types'


import { Button, Form } from 'react-bootstrap';

// import Image from './img/profile.jpg';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';

// import { Editor } from 'react-draft-wysiwyg';
// import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class addenrolment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    
    static propTypes = {}

    render() {
        // const { editorState } = this.state;
        return (
            <>
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily: 'Times New Roman' }}>
                    <img alt={Image} />

                    <div style={{ textAlign: 'left' }}></div>
                    <Divider /><br />
                    <Form>

                    <Form.Group controlId="registration no.">
                            <Form.Label>registration number</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Name" required />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>



                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Name" required />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="contact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Contact" required />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  placeholder="Enter Email" required />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="pass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" required />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="class">
                            <Form.Label>select class</Form.Label>
                            <Form.Control as="select" required>
                                <option>-- Select class--</option>
                                <option>one</option>
                                <option>two</option>
                            </Form.Control>
                        </Form.Group>

                        <br/><br/>
                        <Form.Group>
                            <Form.File id="image" label="Profile Image" />
                        </Form.Group>
                        <br/><br/>
                        <br/><br/>
                        <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Save Changings </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default addenrolment;