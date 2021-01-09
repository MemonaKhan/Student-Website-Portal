import React from 'react';
import { MDBDataTable } from 'mdbreact';

// import Image from '../img/user.jpg';

//import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

// import EditArticle from './EditArticle'

const Viewteacher = (props) => {
  const { history } = props;
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/principal/teacher/edit');
    // console.log(history.path);
  }
  const data = {
    columns: [
      {
        label: ' Teacher name',
        field: 'Name',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Image',
        field: 'image',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Address',
        field: 'address..',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 100
      },
      {
        label: 'designation',
        field: 'Designation',
        sort: 'asc',
        width: 100
      },

      {
        label: 'email',
        field: 'Email',
        sort: 'asc',
        width: 100
      },
      {
        label: 'class',
        field: 'Class',
        sort: 'asc',
        width: 50
      },

      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 150
      },
    ],
    rows: [
      { 
        
        Name: 'mike',
        image: <img height="75%" width="75%" alt={Image} />,
        address: 'near amusement park.',
        Email: '11/18/2020 3:46:50 PM',
        Date: '11/18/2020 3:46:50 PM',
        Class: 'v',
        Designation:'profesor',
        action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
          <Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
      },

      { 
        
        Name: 'kawasaki',
        image: <img height="75%" width="75%" alt={Image} />,
        address: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        Email: '11/18/2020 3:46:50 PM',
        Date: '11/18/2020 3:46:50 PM',
        Class: 'v',
        Designation:'profesor',
        action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
          <Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
      },
   
  
      
    
    ]
  };


  return (
    <div style={{ backgroundColor: 'white', padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0' }}>
      <div style={{ textAlign: 'center' }}><h2>Teacher View</h2></div>
      <Divider /><br />
      <Modal show={show} onHide={handleClose} style={{zIndex:'9999'}}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure? You want to delete this</Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      <MDBDataTable style={{ backgroundColor: 'white' }}
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

export default Viewteacher;