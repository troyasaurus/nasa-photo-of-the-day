import React from "react";
import "./App.css";
import PictureList from './components/PictureList'
import {Button} from 'reactstrap';


function App() {
  return (
    <div className="App">
      <Button> tester button </Button>
      <PictureList/>
    </div>
  );
}

export default App;
