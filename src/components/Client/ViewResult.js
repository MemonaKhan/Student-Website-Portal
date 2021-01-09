import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';



const ViewResults = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      
      {
        label: 'Duration',
        field: 'duration',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Apply for Certificate Payment Form',
        field: 'apply',
        sort: 'asc',
        width: 150
      },
      
    ],
    rows: [
      {
        course: 'React',
        date: '2011/04/25',
        duration: '2 weeks',
        apply: 'yes',
        },
      {
        course: 'React',
        date: '2011/04/25',
        duration: '2 weeks',
        apply: 'yes',
        },
      {
        course: 'React',
        date: '2011/04/25',
        duration: '2 weeks',
        apply: 'yes',
        },
      {
        course: 'React',
        date: '2011/04/25',
        duration: '2 weeks',
        apply: 'yes',
        },
      {
        course: 'React',
        date: '2011/04/25',
        duration: '2 weeks',
        apply: 'yes',
        },
      {
        course: 'React',
        date: '2011/04/25',
        duration: '2 weeks',
        apply: 'yes',
        },    
    ]
  };
  console.log(props);  // Here you got Student Registration Number that was selected before and on the basis of student result will be shown

  return (
    <div  style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor:'white' }}>
      <div style={{ textAlign: 'center' }}><h2>Result View</h2></div>
                    <Divider /><br />
                    <Modal show={show} onHide={handleClose} style={{zIndex:'9999'}}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Result</Modal.Title>
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

export default ViewResults;