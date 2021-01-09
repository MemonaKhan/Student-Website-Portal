import React, { Component } from 'react'

import { Button, Form } from 'react-bootstrap';


import { Divider } from '@material-ui/core';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export class unassignall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    
    static propTypes = {}

    render() {
        // const { editorState } = this.state;
        return (
            <>
                <div style={{ padding: '10%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white', fontFamily: 'Times New Roman' }}>
                  <h3> Un assign all courses </h3><img alt={Image}  />

                    <div style={{ textAlign: 'left' }}></div>
                    <Divider /><br />
                    <Form>

                   
                        <br/><br/>
                        <br/><br/>
                        <Button variant="success" style={{ backgroundColor: '#5DC560',width:'30rem',height:"100%"}} type="submit"> Un assign all courses </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default unassignall;