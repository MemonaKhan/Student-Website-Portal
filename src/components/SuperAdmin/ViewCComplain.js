import React from 'react';
import { MDBDataTable } from 'mdbreact';

// import Image from './img/article.jpg';

import { Button, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

// import EditComplaint from './EditComplaint'

const ClinetComplain = (props) => {
  const { history } = props;
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/superAdmin/complain/client/reply');
    // console.log(history.path);
  }
  const data = {
    columns: [
      {
        label: 'School',
        field: 'school',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Complain',
        field: 'complain',
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
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 150
      },
    ],
    rows: [
      { 
        school: 'Regarding New Policy of Fee',
        complain: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Reply</Button></>,
      },
      {
        school: 'Regarding New Policy of Fee',
        complain: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Reply</Button></>,
      },
      {
        school: 'Regarding New Policy of Fee',
        complain: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Reply</Button></>,
      },
      {
        school: 'Regarding New Policy of Fee',
        complain: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Reply</Button></>,
      },
      {
        school: 'Regarding New Policy of Fee',
        complain: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        date: '11/18/2020 3:46:50 PM',
        action: <><Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Reply</Button></>,
      },
    ]
  };


  return (
    <div style={{ backgroundColor: 'white', padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0' }}>
      <div style={{ textAlign: 'center' }}><h2>Client Complains</h2></div>
      <Divider /><br />
      <Modal show={show} onHide={handleClose} style={{zIndex:'9999'}}>
        <Modal.Header closeButton>
          <Modal.school>Delete Complain</Modal.school>
        </Modal.Header>
        <Modal.Body>Are You Sure? You want to delete this Complaint.</Modal.Body>
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

export default ClinetComplain;