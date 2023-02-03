import { useState,useEffect, React } from "react";
import Form from "./components/Form";
import Notes from "./components/Notes";
import axios from 'axios';

export default function Dashboard() {
  
  useEffect(() => {
    axios.get('http://shield.test/api/notes').then((payload)=>{
      setNotes(payload.data)
      //console.log(payload);

    }).catch((error)=>{
      console.log(error);

    })
  }, [])
  const [notes, setNotes] = useState([]);
  // const [notes, setNotes] = useState([
  //   { id: 1, title: "nota1", body: "Lorem ipsum" },
  //   { id: 2, title: "nota2", body: "Lorem ipsum" },
  //   { id: 3, title: "nota3", body: "Lorem ipsum" },
  //   { id: 4, title: "nota4", body: "Lorem ipsum" },
  //   { id: 5, title: "nota5", body: "Lorem ipsum" },
  //   { id: 6, title: "nota6", body: "Lorem ipsum" },
  // ]);
  


  // const changeState = () =>{
  //     //notes.push({id:7, title:'nota 7', body:'loren ipsun'})
  //     setNotes([...notes, {id:7, title:'nota 7', body:'loren ipsun'}]);
  // }
 
  return (
    <div className="container">
      <pre>{JSON.stringify(notes)}</pre>
      <h1 className="title has-text-centered mt-5">Listando as notas</h1>
      <Notes notes={notes} setNotes={setNotes}/>
     <Form notes={notes} setNotes={setNotes}/>
    </div>
  );
}
