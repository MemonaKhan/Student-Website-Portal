import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Image from './img/img_avatar.jpg';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class PaymentForm extends Component {
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
                    <div style={{ textAlign: 'center' }}><h2>Payment Form</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="bankName">
                            <Form.Label>Bank Name</Form.Label>
                            <Form.Control as="select" required>
                                <option>-- Select Bank Name --</option>
                                
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="accNo">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Account Number" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="mode">
                            <Form.Label>Mode of Transaction</Form.Label>
                            <Form.Control as="select" required>
                                <option>-- Select Type --</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="slipNo">
                            <Form.Label>Transaction Slip Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Transaction Slip Number" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="iban">
                            <Form.Label>IBAN</Form.Label>
                            <Form.Control type="text" placeholder="Enter IBAN" required />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="file" label="File" />
                        </Form.Group>
                        
                    
                        <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Submit </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default PaymentForm;