import React from 'react';
import { MDBDataTable } from 'mdbreact';

import Image from './img/article.jpg';

//import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import { Divider } from '@material-ui/core';

// import EditArticle from './EditArticle'

const ArticleApproval = (props) => {
  const { history } = props;
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () =>{
    history.push('/superAdmin/article/detail');
    // console.log(history.path);
  }
  const data = {
      columns: [
        {
          label: 'Date',
          field: 'date',
          sort: 'asc',
          width: 100
        },
      {
        label: 'Article Title',
        field: 'title',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Description',
        field: 'desc',
        sort: 'asc',
        width: 200
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
        date: '11/18/2020 3:46:50 PM',
        title: 'Digital Transformation In Companies',
        desc: 'If necessity is the mother of invention,&nbsp;coronavirus (COVID-19) forced many rounds the sector to rethink our every day lives from paintings to high school to amusement.',
        action: <Button variant="success" onClick={handleEdit} style={{ backgroundColor: '#5DC560' }} type="submit">Detail </Button>,
      },
     

     
    ]
  };


  return (
    <div style={{ backgroundColor: 'white', padding: '5%', boxShadow: '0 0 5px 2px #C0C0C0' }}>
      <div style={{ textAlign: 'center' }}><h2>Approval Article View</h2></div>
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

export default ArticleApproval;