import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import Image from '../img/img_avatar.jpg';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';
import { Button, Form } from 'react-bootstrap';

//import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class addteacher extends Component {
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
        return (
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily: 'Times New Roman' }}>
                    <div style={{ textAlign: 'center' }}><h2> Add teacher</h2></div>
                    <Divider /><br />
                    <Form>
                    <Form.Group controlId=" teacher name">
                            <Form.Label>Nmae</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="phone">
                            <Form.Label>contact</Form.Label>
                            <Form.Control type="text" placeholder="Enter contact" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="class">
                            <Form.Label>classe</Form.Label>
                            <Form.Control as="select" required>
                                <option>-- Select class --</option>
                                <option>one</option>
                                <option>two</option>
                            </Form.Control>
                        </Form.Group>


                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter mail" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="Image" label="Image" />
                        </Form.Group>

                        <Form.Group controlId=" designation">
                            <Form.Label>Designation</Form.Label>
                            <Form.Control type="text" placeholder="Enter designation" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="ShortDesc">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter Short Description" required />
                        </Form.Group>

                        <Form.Group controlId="pass">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Enter password" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        {/* <Form.Group controlId="articleLongDesc"> */}
                            {/* <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Enter Long Description</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}
                            {/* <Form.Label>Long Description</Form.Label>

                            <Editor
                                editorState={editorState}
                                toolbarClassName="toolbarClassName"
                                wrapperClassName="wrapperClassName"
                                editorClassName="editorClassName"
                                wrapperStyle={{}}
                                editorStyle={{border:'solid #C0C0C0 1px'}}
                                toolbarStyle={{}}
                                onEditorStateChange={this.onEditorStateChange}
                            /> */}
                        {/* </Form.Group> */}

                        <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Add teacher </Button>
                    </Form>
                </div>
            
        )
    }
}

export default addteacher;