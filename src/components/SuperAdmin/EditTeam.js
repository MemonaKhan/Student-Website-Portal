import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Button, Form } from 'react-bootstrap';

// import Image from './img/img_avatar.jpg';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class EditTeam extends Component {
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
                    <div style={{ textAlign: 'center' }}><h2>Edit Team Form</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="teamType">
                            <Form.Label>Department</Form.Label>
                            <Form.Control as="select" required>
                                <option>-- Select Team Department Type --</option>
                                <option>abcd</option>
                                <option>xyz</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="teamName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="teamDesignation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter Designation" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="teamImage" label="Image" />
                        </Form.Group>
                        <Form.Group controlId="teamLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control type="text" placeholder="Enter Location" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="teamLongDesc">
                            <Form.Label>Long Description</Form.Label>

                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                wrapperStyle={{}}
                                editorStyle={{border:'solid #C0C0C0 1px'}}
                                toolbarStyle={{}}
                                onEditorStateChange={this.onEditorStateChange}
                            />
                        </Form.Group>
                        <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Update </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default EditTeam;