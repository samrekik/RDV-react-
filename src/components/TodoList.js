import React from 'react'
import { Col, Row } from 'react-bootstrap'

const TodoList = ({per}) => {
  return (
    <Row className="justify-content-center">
         <Col sm="8" className="">
           <div className="rectangle p-2 ">
            {per.length ? (per.map((item)=>{
              return(
             <div key={item.id} className="d-flex border-bottom mx-3">
              <img className="img-avatar" alt="dddd" src={item.img}/>
                <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                  <p className="fs-6">{item.date}</p>
                </div>
             </div>
              )
              })) : <h2 className="p-5 text-center variant=danger "> pasde rendez-vous</h2>}
            </div>          
        </Col>
    </Row>
  )
}

export default TodoList
