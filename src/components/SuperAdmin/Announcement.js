import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button} from 'react-bootstrap';
import { Divider } from '@material-ui/core';



const Announcements = (props) => {
  const data = {
    columns: [
      {
        label: 'Date',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: 'type',
        field: 'type',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Announcement',
        field: 'announcement',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
      {
        date: '2011/04/25',
        type: 'React',
        announcement: 'lorem Ipsum',
        action:<><Button variant="danger"  style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        date: '2011/04/25',
        type: 'React',
        announcement: 'lorem Ipsum',
        action:<><Button variant="danger"  style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        date: '2011/04/25',
        course: 'React',
        announcement: 'lorem Ipsum',
        action:<><Button variant="danger"  style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        date: '2011/04/25',
        type: 'React',
        announcement: 'lorem Ipsum',
        action:<><Button variant="danger"  style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        date: '2011/04/25',
        type: 'React',
        announcement: 'lorem Ipsum',
        action:<><Button variant="danger"  style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        date: '2011/04/25',
        type: 'React',
        announcement: 'lorem Ipsum',
        action:<><Button variant="danger"  style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        date: '2011/04/25',
        type: 'React',
        announcement: 'lorem Ipsum',
        action:<><Button variant="danger"  style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      {
        date: '2011/04/25',
        type: 'React',
        announcement: 'lorem Ipsum',
        action:<><Button variant="danger"  style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success"  style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },    
    ]
  };

  return (
    <div  style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor:'white' }}>
      <div style={{ textAlign: 'center' }}><h2>POST ANNOUNCEMENTS</h2></div>
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

export default Announcements;