import { Button, Col, Container, Row } from "react-bootstrap";
import { per } from "./data";
import DateFile from "./components/DateFile";
import TodoList from "./components/TodoList";
import DateAction from "./components/DateAction";
import { useEffect, useState } from "react";
function App() {
 const [perData, setParData]= useState(per)
 const onDelete=()=>{
  setParData([])
 }
 const viewData=()=>{
  setParData(per)
 }
 useEffect(()=>{
  setParData([])
 },[])
  return (
    <div className="font color-body" >
      <Container className="py-5">
        <DateFile per={perData} />
        <TodoList per={perData} />
        <DateAction deleteData={onDelete} viewData={viewData}/>
      </Container>
    
    </div>
  );
}

export default App;
