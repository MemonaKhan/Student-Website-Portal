import React, { Component } from 'react'
// import PropTypes from 'prop-types'


import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Image from './img/profile.jpg';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class SchoolDetail extends Component {
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
                    <div style={{ textAlign: 'center' }}><h2>Approve School</h2></div>
                    <Divider /><br />
                    <img src={Image} />
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"  placeholder="Enter Name" required readOnly />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  placeholder="Enter Email" required readOnly />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="pass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" required readOnly />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="type">
                            <Form.Label>Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter Tyoe" required readOnly />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="contact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text"  placeholder="Enter School Contact" required readOnly />
                            <Form.Text className="">
                            </Form.Text>
                        </Form.Group>
                        <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Reject </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default SchoolDetail;