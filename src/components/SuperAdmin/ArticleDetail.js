import React, { Component } from 'react'
// import PropTypes from 'prop-types'


import {  Button, Form } from 'react-bootstrap';

import Image from './img/profile.jpg';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';

import { Editor } from 'react-draft-wysiwyg';
// import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
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
                    <div style={{ textAlign: 'center' }}><h2>Approve Article</h2></div>
                    <Divider /><br />
                    <img src={Image} />
                    <Form>
                        <Form.Group controlId="articleTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter Title" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="articleLongDesc">
                            <Form.Label>Description</Form.Label>
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
                        <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Reject </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default ArticleDetail;