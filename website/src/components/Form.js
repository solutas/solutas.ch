import React from "react"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
// import Button from "react-bootstrap/Button"

function content() {
  return (
    <>
      <Form data-netlify="true" name="solutas-contact-form">
        <input type="hidden" name="name" value="solutas-contact-form" />
        <Row>
          <Col md={{ offset: 2, span: 4 }}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                name="name"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>E-Mail</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                required
                name="email"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                name="company"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                name="phone"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={{ span: 4 }}>
            <Form.Group>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                required
                name="subject"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                placeholder=""
                required
                name="message"
              ></Form.Control>
            </Form.Group>

            <Button type="submit" size="sm">
              Send Message
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default () => <Container className="mt-5">{content()}</Container>
