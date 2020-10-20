import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
function ThemePreview({ source, children }) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="primary" size={"sm"} onClick={handleShow}>
        {children}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size={"lg"}
        dialogClassName="theme-preview"
        centered={true}
      >
        <Modal.Body className="d-flex" style={{ flex: 1 }}>
          <iframe src={source} style={{ flex: 1, border: 0 }}></iframe>
        </Modal.Body>
        <Modal.Footer>
          <a
            href="https://yevgenysim.github.io/incline/"
            className="btn btn-outline-primary mr-auto"
            target="_blank"
          >
            Preview
          </a>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ThemePreview
