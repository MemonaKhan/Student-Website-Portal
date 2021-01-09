import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// import {  Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import {  Button , Form } from 'react-bootstrap';

// import Image from './img/img_avatar.jpg';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';


export class addAnnouncement extends Component {
    static propTypes = {}

    render() {
        return (
            <>
                {/* <SideNavBar /> */}
                {/* <div> */}
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily:'Times New Roman' }}>
                    <div style={{ textAlign: 'center' }}><h2>Add Announcement</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>type</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group controlId="type">
                            <Form.Label>typee</Form.Label>
                            <Form.Control as="select">
                                <option>-- Select type --</option>
                                <option>one</option>
                                <option>two</option>
                                <option>three</option>
                                <option>four</option>
                            </Form.Control>
                        </Form.Group>
                        {/* <Form.Group>
                            
                            <Form.File id="url" label="Announcement Url" />
                        </Form.Group> */}

                        
                        <Form.Group controlId="post">
                            <Form.Label>post</Form.Label>
                            <Form.Control type="text" placeholder="Enter post" />
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

export default addAnnouncement;