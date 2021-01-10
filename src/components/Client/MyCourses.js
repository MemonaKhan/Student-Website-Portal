import React from 'react';
import { MDBDataTable } from 'mdbreact';
// import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';



const MyCourses = (props) => {
    const data = {
        columns: [
            {
                label: 'Enrollment Date',
                field: 'edate',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Course Name',
                field: 'course',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Duration',
                field: 'duration',
                sort: 'asc',
                width: 150
            },
            {
                label: 'View Test',
                field: 'test',
                sort: 'asc',
                width: 200
            },
            {
                label: 'View Lectures',
                field: 'lecture',
                sort: 'asc',
                width: 200
            },
        ],
        rows: [
            {
                edate: '2011/04/25',
                course: 'abc',
                duration: '2 weeks',
                test: 'abc',
                lecture: 'abc',
            },
            {
                edate: '2011/04/25',
                course: 'abc',
                duration: '2 weeks',
                test: 'abc',
                lecture: 'abc',
            },
            {
                edate: '2011/04/25',
                course: 'abc',
                duration: '2 weeks',
                test: 'abc',
                lecture: 'abc',
            },
            {
                edate: '2011/04/25',
                course: 'abc',
                duration: '2 weeks',
                test: 'abc',
                lecture: 'abc',
            },
            {
                edate: '2011/04/25',
                course: 'abc',
                duration: '2 weeks',
                test: 'abc',
                lecture: 'abc',
            },
        ]
    };
    console.log(props);

    return (
        <div style={{ padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0', backgroundColor: 'white' }}>
            <div style={{ textAlign: 'center' }}><h2>My Courses</h2></div>
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

export default MyCourses;