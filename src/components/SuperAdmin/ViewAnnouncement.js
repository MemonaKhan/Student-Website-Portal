import React from 'react';
import { MDBDataTable } from 'mdbreact';
//import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';


const ViewAnnouncement = (props) => {
  const { history } = props;

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/superAdmin/announcement/edit');
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
        label: 'Course',
        field: 'course',
        sort: 'asc',
        width: 150
      },
      // {
      //   label: 'post',
      //   field: 'school',
      //   sort: 'asc',
      //   width: 270
      // },
      // {
      //   label: 'Assignment',
      //   field: 'assignment',
      //   sort: 'asc',
      //   width: 200
      // },
      // {
      //   label: 'post',
      //   field: 'post Name',
      //   sort: 'asc',
      //   width: 100
      // },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 100
      },
    ],
    rows: [
      {
        date: '2011/04/25',
        course: 'Web Development',
        // post: 'Prozameen',
        action:'Classes Soon',
      },
     
     
      {
        date: '2011/04/25',
        course: 'Web Development',
        // post: 'Prozameen',
     
        action:'Classes Soon',
      },
      
     
    ]
  };

  return (
    <div  style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor:'white' }}>
      <div style={{ textAlign: 'center' }}><h2>View all post</h2></div>
                    <Divider /><br />
                    <Modal show={show} onHide={handleClose} style={{zIndex:'9999'}}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure? You want to delete this</Modal.Body>
        <Modal.Footer>
          <Button variant="" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleEdit}> Confirm </Button>
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

export default ViewAnnouncement;