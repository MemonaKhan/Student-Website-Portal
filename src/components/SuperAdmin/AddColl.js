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

export class AddCollaboration extends Component {
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
        // const { editorState } = this.state;
        return (
            <>
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily: 'Times New Roman' }}>
                    <div style={{ textAlign: 'center' }}><h2>Collaboration Form</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Course Name" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="Title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="image" label="Image" />
                        </Form.Group>
                        <Form.Group controlId="shortDesc">
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Short Description" required />
                        </Form.Group>
                        <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Add </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default AddCollaboration;