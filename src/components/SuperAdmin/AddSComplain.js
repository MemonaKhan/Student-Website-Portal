import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Image from './img/img_avatar.jpg';
import { MDBContainer, MDBRating } from 'mdbreact';


import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import BeautyStars from 'beauty-stars';


export class SComplainReply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
            value: 0,
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
                    <div style={{ textAlign: 'center' }}><h2>School Complain Form</h2></div>
                    
                    
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="mesaage">
                            <Form.Label>Reply</Form.Label>
                            <Form.Control as="textarea" rows={8} placeholder="Enter Complain Reply" required />
                        </Form.Group>

                        <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Submit Complain</Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default SComplainReply;