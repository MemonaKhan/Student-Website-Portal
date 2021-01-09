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
        label: 'Subject',
        field: 'subject',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Total Marks',
        field: 'tmarks',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Obtained Marks',
        field: 'omarks',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Result',
        field: 'result',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
      {
        subject: 'React',
        date: '2011/04/25',
        tmarks: '50',
        omarks: '45',
        result:<> <Button variant="success"  style={{backgroundColor:'#5DC560'}}>Passed </Button></>,
      },
      {
        subject: 'React',
        date: '2011/04/25',
        tmarks: '50',
        omarks: '45',
        result:<> <Button variant="danger" style={{backgroundColor:'#e74a3b'}}>Failed </Button></>,
      },
      {
        subject: 'React',
        date: '2011/04/25',
        tmarks: '50',
        omarks: '45',
        result:<> <Button variant="danger" style={{backgroundColor:'#e74a3b'}}>Failed </Button></>,
      },
      {
        subject: 'React',
        date: '2011/04/25',
        tmarks: '50',
        omarks: '45',
        result:<> <Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}}>Failed </Button></>,
      },
      {
        subject: 'React',
        date: '2011/04/25',
        tmarks: '50',
        omarks: '45',
        result:<> <Button variant="danger" style={{backgroundColor:'#e74a3b'}}>Failed </Button></>,
      },
      {
        subject: 'React',
        date: '2011/04/25',
        tmarks: '50',
        omarks: '45',
        result:<> <Button variant="success"  style={{backgroundColor:'#5DC560'}}>Passed </Button></>,
      },    
    ]
  };
  console.log(props);  // Here you got Student Registration Number that was selected before and on the basis of student result will be shown

  return (
    <div  style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor:'white' }}>
      <div style={{ textAlign: 'center' }}><h2>Result View</h2></div>
                    <Divider /><br />
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