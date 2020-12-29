import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Users from "./components/Users";

const App = () => {

    let title ="Kişi işleri"
  return (
    <div className="container" style={{marginTop:50}}>
        <h5>{title}</h5>
        <hr/>
        <Users/>
    </div>
  );
}

export default App;
