import React from 'react';
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function content(label, type, placeholder) {
    return <> 
            <Form.Label>{label}</Form.Label><br/>
            <Form.Control type={type} placeholder={placeholder}/>
    </>
}

export default (
    {position='right', label, type, placeholder})=>(

    <Form className="mt-5">
        <Row>
            <Form.Group as={Col} md={{offset:2, span: 4}}>
                {position !== 'left' ? content(label, type, placeholder): null }
            </Form.Group>
            <Form.Group as={Col} md={{span: 4}}>
                {position === 'left' ? content(label, type, placeholder): null }
            </Form.Group>
        </Row>
    </Form>
);