import $ from 'jquery';
import debounce from 'lodash/debounce';
import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import getScrollbarWidth from 'utils/ScrollbarWidth';

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

  useEffect(() => {
    const setScrollbarWidth = () =>
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${getScrollbarWidth()}px`
      );

    setScrollbarWidth();
    const handleResize = debounce(setScrollbarWidth, 200);
    $(window).on('resize', handleResize);

    return () => {
      $(window).off('resize', handleResize);
    };
  }, []);

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
