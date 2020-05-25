import React from "react"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function content(title, text) {
  return (
    <>
      <h1 className="text-header">{title}</h1>
      {text}
    </>
  )
}

export default ({ position = "left", title, image, children }) => (
  <Container fluid className="mt-5 text-content">
    <Row className={position === "left" ? null : "direction-reverse"}>
      {image ? (
        <>
          <Col
            md={{ offset: 2, span: 4 }}
            className={position === "left" ? "text-image" : null}
          >
            {position === "left" ? image : content(title, children)}
          </Col>
          <Col
            md={{ span: 4 }}
            className={position === "left" ? null : "text-image"}
          >
            {position === "left" ? content(title, children) : image}
          </Col>{" "}
        </>
      ) : (
        <Col
        md={{ offset: 2, span: 8 }}
        className={position === "left" ? "text-image" : null}
      >
        {content(title, children)}
        </Col>
      )}
    </Row>
  </Container>
)
