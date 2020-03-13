import React from 'react';
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

function content(title, text) {
    return <> 
        <h1 className="h6">{title}</h1>
        {text}
    </>
}

export default ({position='left', title, image, children})=>(
<Container className="mt-5">
<Row className={position === 'left' ? null : 'direction-reverse' }>
    <Col md={{offset:2, span: 4}} className={position === 'left' ? 'text-image': null }>
        {position === 'left' ? image : content(title, children)}
    </Col>
    <Col md={{span: 4}} className={position === 'left' ? null:  'text-image'  }>
        {position === 'left' ? content(title, children) : image }
    </Col>  
</Row>
</Container>
);