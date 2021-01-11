import React from 'react';
import { MDBDataTable } from 'mdbreact';

import Image from './img/article.jpg';

//import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

// import EditArticle from './EditArticle'

const CourseApproval = (props) => {
  const { history } = props;
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/superAdmin/course/detail');
    // console.log(history.path);
  }
  const data = {
    columns: [
        {
            label: 'Date',
            field: 'date',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Client Name',
            field: 'name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Course Name',
            field: 'course',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Course',
            field: 'status',
            sort: 'asc',
            width: 150
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
        date: '11/18/2020',
        name: 'Lorem ipsum',
        course: 'Lorem ipsum',
        status: 'Lorem ipsum',
        action: <><Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Approve </Button>
          <Button variant="danger" style={{ backgroundColor: '#e74a3b' }} type="submit">Reject </Button></>,
      },
     

     
    ]
  };


  return (
    <div style={{ backgroundColor: 'white', padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0' }}>
      <div style={{ textAlign: 'center' }}><h2>Approve Course View</h2></div>
      <Divider /><br />
      
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

export default CourseApproval;