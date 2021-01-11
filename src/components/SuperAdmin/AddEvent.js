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

export class AddEvent extends Component {
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
                    <div style={{ textAlign: 'center' }}><h2>Event Form</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="eventTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Event Title" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="eventImage" label="Image" />
                        </Form.Group>
                        <Form.Group controlId="eventVanue">
                            <Form.Label>Vanue</Form.Label>
                            <Form.Control type="text" placeholder="Enter Event Vanue" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="eventVideoUrl">
                            <Form.Label>Video Url</Form.Label>
                            <Form.Control type="text" placeholder="Enter Event Video Url" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="eventStartTime">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="time" placeholder="Enter Event Start Time" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="eventEndTime">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="time" placeholder="Enter Event End Time" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="eventShortDesc">
                            <Form.Label>Short Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Short Description" required />
                        </Form.Group>
                        <Form.Group controlId="eventStartDate">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter Event Start Date" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="eventEndDate">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control type="date" placeholder="Enter Event End Date" required />
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

export default AddEvent;