import React from 'react'
import { Col, Row } from 'react-bootstrap'

const DateFile = ({per}) => {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">
            tu es {per.length}  RDV
          </Col>
        </Row>
  )
}

export default DateFile
