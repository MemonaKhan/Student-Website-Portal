import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import Image from './img/img_avatar.jpg';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from '@material-ui/core';


export class EditOnlineTest extends Component {
    constructor(){
        super();

        this.state = {
            option: [],
            val:''
        }
    }
    static propTypes = {}

    addOption(){
console.log(this.state.option);
// console.log(this.state.option);
const value = this.state.val;
// const element = <p>{value}</p>;
if(this.state.val!=''){

    this.setState({
        option:[...this.state.option,value], 
        val:'',
    })
}
else{
    alert('Please fill the option First');
}
    }

    render() {

        return (
            <>
                <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily:'Times New Roman' }}>
                    <div style={{ textAlign: 'center' }}><h2>Test</h2></div>
                    <Divider /><br />
                    <Form>
                        <Form.Group controlId="courses">
                            <Form.Label>Course</Form.Label>
                            <Form.Control as="select" required>
                                <option>-- Select Course --</option>
                                <option>one</option>
                                <option>two</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="question">
                            <Form.Label>Question</Form.Label>
                            <Form.Control as="textarea" rows={3}  placeholder="Enter Short Description" required/>
                        </Form.Group>
                        <Form.Group controlId="option">
                            <Form.Label>Option</Form.Label>
                            <Form.Control onChange={(e) => this.state.val = e.target.value} type="text" placeholder="Enter Option Name" required/>
                            <Form.Text className="text-muted" >
                            </Form.Text>
                        </Form.Group>
                        <Button variant="success" style={{backgroundColor:'#5DC560'}} type="button" onClick={()=>this.addOption()}>Add Option </Button>
                        <br />
                        <br />
                        <div className="options" id="options">
                            {
                                this.state.option.map(function(item, i){
                                    return <><Divider /><li style={{listStyle:'none'}}key={i}>{item}</li><br /></>
                                  })
                            }
                        
                        </div>
                        <br />
                        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Submit </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default EditOnlineTest;