import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Button, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
// import { generatePath } from 'react-router-dom';



const Viewclass = (props) => {
  const [show, setShow] = React.useState(false);
  
  const { history } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/principal/class/edit');
    // console.log(history.path);
  }
  const data = {
    columns: [
      {
        label: 'id', 
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'class',
        field: 'add class',
        action: 'actions',
        width: 150
      },
      // {
      //   label: 'Lecture Url',
      //   field: 'url',
      //   sort: 'asc',
      //   width: 270
      // },
      // {
      //   label: 'Course',
      //   field: 'course',
      //   sort: 'asc',
      //   width: 270
      // },
      // {
      //   label: 'Lecture Desciption',
      //   field: 'desc',
      //   sort: 'asc',
      //   width: 200
      // },
      {
        label: 'Action',
        field: 'action',
        sort: 'asc',
        width: 200
      },
    ],
    rows: [
      {
        name: 'Introduction',
        class: 'vi',
        // url: 'abc',
        // course: 'HTML',
        // desc: 'Lorem Ipsum',
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
    
   
      {
        name: 'Introduction',
        class: 'ix',
      
        action:<><Button variant="danger" onClick={handleShow} style={{backgroundColor:'#e74a3b'}} type="submit">Delete </Button>
        <Button variant="success" onClick={handleEdit} style={{backgroundColor:'#5DC560'}} type="submit">Edit </Button></>,
      },
      
      
    ]
  };

  return (
    <div  style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor:'white' }}>
      <div style={{ textAlign: 'center' }}><h2>View class</h2></div>
                    <Divider /><br />
                    <Modal show={show} onHide={handleClose} style={{zIndex:'9999'}}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Notes</Modal.Title>
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

export default Viewclass;