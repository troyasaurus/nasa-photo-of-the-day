import React from "react";
import "./App.css";
import PictureList from './components/PictureList'
import styled from 'styled-components'



//page styling 
const Page = styled.section`
width:100%; 
display: flex; 
justify-content: center;
align-content: center; 
margin: 40px;
.centerStuff{
  width: 50%;
}
`;

function App() {
  return (
    <Page className="App">
      <div className= "centerStuff">
        <PictureList/>
      </div>
      
    </Page>
  );
}

export default App;
