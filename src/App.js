import React from "react";
import {Route, Routes} from 'react-router-dom';
import './App.css';
import { Form } from "./components/Form";
import { Docs } from "./components/Docs";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ()=> {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Form/>}/>
          <Route exact path="/table" element={<Docs/>}/>
        </Routes>
      
      
    </div>
  );
}

export default App;
