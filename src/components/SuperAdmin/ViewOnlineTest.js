import React from 'react';
import { MDBDataTable } from 'mdbreact';

import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';



const ViewOnlineTest = (props) => {
  const [show, setShow] = React.useState(false);
  const { history } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/principal/onlinetest/edit');
    // console.log(history.path);
  }
  const data = {
    columns: [
      {
        label: 'Course',
        field: 'course',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Question',
        field: 'question',
        sort: 'asc',
        width: 300
      },
      {
        label: 'Option 1',
        field: 'option1',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Option 2',
        field: 'option2',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Option 3',
        field: 'option3',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Option 4',
        field: 'option4',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Action',
        field: 'action',
        width: 100
      }
    ],
    rows: [
      {
        course: 'React',
        question: 'What is React',
        option1: 'JS Library',
        option2: 'C Library',
        option3: 'JS Framework',
        option4: 'Python Framework',
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        course: 'React',
        question: 'What is React',
        option1: 'JS Library',
        option2: 'C Library',
        option3: 'JS Framework',
        option4: 'Python Framework',
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        course: 'React',
        question: 'What is React',
        option1: 'JS Library',
        option2: 'C Library',
        option3: 'JS Framework',
        option4: 'Python Framework',
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        course: 'React',
        question: 'What is React',
        option1: 'JS Library',
        option2: 'C Library',
        option3: 'JS Framework',
        option4: 'Python Framework',
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        course: 'React',
        question: 'What is React',
        option1: 'JS Library',
        option2: 'C Library',
        option3: 'JS Framework',
        option4: 'Python Framework',
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        course: 'React',
        question: 'What is React',
        option1: 'JS Library',
        option2: 'C Library',
        option3: 'JS Framework',
        option4: 'Python Framework',
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        course: 'React',
        question: 'What is React',
        option1: 'JS Library',
        option2: 'C Library',
        option3: 'JS Framework',
        option4: 'Python Framework',
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        course: 'React',
        question: 'What is React',
        option1: 'JS Library',
        option2: 'C Library',
        option3: 'JS Framework',
        option4: 'Python Framework',
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      
    ]
  };

  return (
    <div  style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor:'white' }}>
      <div style={{ textAlign: 'center' }}><h2>Online test View</h2></div>
                    <Divider /><br />
                    <Modal show={show} onHide={handleClose} style={{zIndex:'9999'}}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Online Test</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure? You want to delete this</Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleEdit}onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    <MDBDataTable style={{backgroundColor:'white'}}
      // striped
      // bordered
      noBottomColumns
      responsive
      hover
      data={data}
    />
    </div>
  );
}

export default ViewOnlineTest;