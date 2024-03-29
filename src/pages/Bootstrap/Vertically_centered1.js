import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';



  
  function MydModalWithGrid(props) {
    return (
        <div>



<Modal {...props} aria-labelledby="contained-modal-title-vcenter">
<Modal.Header closeButton>
  <Modal.Title id="contained-modal-title-vcenter">
    Using Grid in Modal
  </Modal.Title>
</Modal.Header>
<Modal.Body className="show-grid">
  <Container>
    <Row>
      <Col xs={12} md={8}>
        .col-xs-12 .col-md-8
      </Col>
      <Col xs={6} md={4}>
        .col-xs-6 .col-md-4
      </Col>
    </Row>

    <Row>
      <Col xs={6} md={4}>
        .col-xs-6 .col-md-4
      </Col>
      <Col xs={6} md={4}>
        .col-xs-6 .col-md-4
      </Col>
      <Col xs={6} md={4}>
        .col-xs-6 .col-md-4
      </Col>
    </Row>
  </Container>
</Modal.Body>
<Modal.Footer>
  <Button onClick={props.onHide}>Close</Button>
</Modal.Footer>
</Modal>
</div>
    );
  }

  export default function Vertically_centered1() {
    // const [modalShow, setModalShow] = React.useState(false);
    const [modalShow, setModalShow] = useState(false);
  
    return (
      
      <div>
       <>
       <Button variant="primary" onClick={() => setModalShow(true)}>
         Launch modal with grid
       </Button>
 
       <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
     </>

     </div>
    );
  }
