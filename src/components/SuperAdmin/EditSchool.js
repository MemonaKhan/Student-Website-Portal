import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Button, Form } from 'react-bootstrap';

// import Image from './img/img_avatar.jpg';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';

// import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class EditSchool extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    static propTypes = {}

    render() {
        const { editorState } = this.state;
        return (
            <>
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily: 'Times New Roman' }}>
                    <div style={{ textAlign: 'center' }}><h2>Edit School Form</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="sName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter School Name" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="sImage" label="Image" />
                        </Form.Group>
                        <Form.Group controlId="sContact">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter School Contact Number" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="sAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter School Address" required />
                        </Form.Group>
                        <Form.Group controlId="sEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter School Email" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="sPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter School Password" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        
                        
                        <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Apply </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default EditSchool;