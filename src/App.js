import React from "react";
import "./App.css";
import PictureList from './components/PictureList'
import styled from 'styled-components'



//page styling 
const Page = styled.section`
width: 80%; 
display: flex; 
justify-content: center;
align-content: center; 
margin 20px 0; 
`;

function App() {
  return (
    <Page className="App">
      
      <PictureList/>
    </Page>
  );
}

export default App;
