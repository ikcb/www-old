import 'assets/styles/_sectionContact.scss';

import $ from 'jquery';
import React, { useEffect } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import useWindowDimensions from 'utils/WindowDimensions';

export default function SectionContact() {
  useEffect(() => {
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
      $.ajax({
        url:
          'https://cors-anywhere.herokuapp.com/docs.google.com:443/forms/d/e/1FAIpQLSdZZjCcFiOWlpvENNgojH9tFqY1DX-1aV9ZNl9pUNe8BHrZWQ/formResponse',
        method: 'POST',
        data: $(this).serialize(),
        success: () => {
          $('#contactForm').trigger('reset');
          alert(
            'Thank you for contacting us. We will get back to you as soon as possible!'
          );
        },
        error: () =>
          alert(
            'Sorry! Your request cannot be processed right now. Please try again later!'
          )
      });
    });
    return () => {
      $('#contactForm').off('submit');
    };
  }, []);

  const { width } = useWindowDimensions();

  return (
    <Container className="section-contact text-light">
      <Row>
        <Col lg={5} className="mt-auto mb-lg-auto">
          <h2 className="display-4 text-center py-4 m-0 pt-sm-0 pb-sm-5">
            Get in Touch
          </h2>
          <p className="lead">
            We are a welcoming community and love to have others working with us
            regardless of their skill levels. If you have a nice project idea
            and think that we all together can make it real and big then do
            contact us.
          </p>
        </Col>
        <Col lg={1} className="d-none d-lg-block p-0" />
        <Col lg={6} className="mb-auto mt-lg-auto">
          <Form id="contactForm" className="pb-3">
            <Form.Row>
              <Form.Group as={Col} lg="6" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="namePrepend">
                      <AiOutlineUser />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="text"
                    placeholder={
                      width > 992
                        ? 'Enter your name'
                        : 'Please enter your name here…'
                    }
                    aria-describedby="namePrepend"
                    name="entry.2005620554"
                    pattern="[a-zA-Z ,.'-]+"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} lg="6" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="emailPrepend">
                      <AiOutlineMail />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="email"
                    placeholder={
                      width > 992
                        ? 'Enter your email'
                        : 'And your email address here…'
                    }
                    aria-describedby="emailPrepend"
                    name="entry.1045781291"
                  />
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={width < 375 ? 3 : 4}
                  placeholder="Write your message here… Our inbox is always open!"
                  name="entry.839337160"
                  required
                />
              </Form.Group>
            </Form.Row>
            <Form.Row className="pt-3 pt-sm-4">
              <Col className="mx-auto text-center">
                <Button
                  variant="light"
                  type="submit"
                  size="lg"
                  onClick={e => e.target.blur()}
                  className="rounded-0"
                >
                  Send Message
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
