import React from 'react';
import { MDBDataTable } from 'mdbreact';

import Image from './img/article.jpg';

//import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
// import { Button, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

// import EditArticle from './EditArticle'

const ViewCollaboration = (props) => {
  const { history } = props;
  const [show, setShow] = React.useState(false);

  const data = {
    columns: [
      {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Image',
        field: 'image',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Description',
        field: 'desc',
        sort: 'asc',
        width: 200
      },
      
    ],
    rows: [
      { 
        name: 'Digital Transformation In Companies',
        title: 'Digital Transformation In Companies',
        image: <img height="75%" width="75%" alt={Image} />,
        desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
      },
     

     
    ]
  };


  return (
    <div style={{ backgroundColor: 'white', padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0' }}>
      <div style={{ textAlign: 'center' }}><h2>Article View</h2></div>
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

export default ViewCollaboration;