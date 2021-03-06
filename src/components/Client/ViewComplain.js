import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';



const ViewComplain = (props) => {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = {
        columns: [
            {
                label: 'Client Name',
                field: 'client',
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
                label: 'Reply Message',
                field: 'reply',
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
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 150
            },

        ],
        rows: [
            {
                client: 'XYZ',
                desc: 'Lorem Ipsum',
                reply: 'Lorem Ipsum',
                date: '2011/04/25',
                action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
                    <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
            },
            {
                client: 'XYZ',
                desc: 'Lorem Ipsum',
                reply: 'Lorem Ipsum',
                date: '2011/04/25',
                action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
                    <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
            },
            {
                client: 'XYZ',
                desc: 'Lorem Ipsum',
                reply: 'Lorem Ipsum',
                date: '2011/04/25',
                action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
                    <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
            },
            {
                client: 'XYZ',
                desc: 'Lorem Ipsum',
                reply: 'Lorem Ipsum',
                date: '2011/04/25',
                action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
                    <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
            },
            {
                client: 'XYZ',
                desc: 'Lorem Ipsum',
                reply: 'Lorem Ipsum',
                date: '2011/04/25',
                action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
                    <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
            },
            {
                client: 'XYZ',
                desc: 'Lorem Ipsum',
                reply: 'Lorem Ipsum',
                date: '2011/04/25',
                action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
                    <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
            },
            {
                client: 'XYZ',
                desc: 'Lorem Ipsum',
                reply: 'Lorem Ipsum',
                date: '2011/04/25',
                action: <><Button variant="danger" onClick={handleShow} style={{ backgroundColor: '#e74a3b' }} type="submit">Delete </Button>
                    <Button variant="success" style={{ backgroundColor: '#5DC560' }} type="submit">Edit </Button></>,
            },
        ]
    };
    console.log(props);  // Here you got Student Registration Number that was selected before and on the basis of student result will be shown

    return (
        <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white' }}>
            <div style={{ textAlign: 'center' }}><h2>View Complain Form</h2></div>
            <Divider /><br />
            <Modal show={show} onHide={handleClose} style={{ zIndex: '9999' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Complain</Modal.Title>
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

export default ViewComplain;