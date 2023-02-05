import React from 'react'
import { Row,Col, Button } from 'react-bootstrap'

const DateAction = ({deleteData,viewData}) => {
  return (
    <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between">
           <Button onClick={viewData} className="btn-style p-2">show</Button>
           <Button  onClick={deleteData} className="btn-style p-2">effacer</Button>

          </Col>
        </Row>
  )
}

export default DateAction
