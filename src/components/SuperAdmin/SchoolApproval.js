import React from 'react';
import { MDBDataTable } from 'mdbreact';

import Image from './img/article.jpg';

//import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

// import EditArticle from './EditArticle'

const ViewEvent = (props) => {
  const { history } = props;
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/superAdmin/event/edit');
    // console.log(history.path);
  }
  const data = {
    columns: [
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Venue',
        field: 'venue',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Description',
        field: 'desc',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Image',
        field: 'image',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Video',
        field: 'video',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Start Date',
        field: 'sdate',
        sort: 'asc',
        width: 100
      },
      {
        label: 'End Date',
        field: 'edate',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Start Time',
        field: 'stime',
        sort: 'asc',
        width: 100
      },
      {
        label: 'End Time',
        field: 'etime',
        sort: 'asc',
        width: 100
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
        title: 'Lorem ipsum',
        venue: 'Lorem ipsum',
        desc: 'Lorem ipsum',
        image: <img height="75%" width="75%" alt={Image} />,
        video: 'Lorem ipsum',
        sdate: '11/18/2020',
        edate: '11/18/2020',
        stime: '3:46:50 PM',
        etime: '3:46:50 PM',
        action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
          <Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
      },
     

     
    ]
  };


  return (
    <div style={{ backgroundColor: 'white', padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0' }}>
      <div style={{ textAlign: 'center' }}><h2>Event View</h2></div>
      <Divider /><br />
      <Modal show={show} onHide={handleClose} style={{zIndex:'9999'}}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Event</Modal.Title>
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

export default ViewEvent;