import React from 'react';
import { Modal, Nav } from 'react-bootstrap';

function EventsSuspendedModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      restoreFocus={false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Events Suspended
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          We are sorry to inform you that we are suspending all planned events
          due to COVID-19 outbreak. Please check back later!
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default function EventsNavLink() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <li>
        <Nav.Link onClick={() => setModalShow(true)}>Events</Nav.Link>
      </li>
      <EventsSuspendedModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
