import React from 'react';
import {
    Card, 
    CardTitle,
    CardImg,
    CardBody,
    CardText,
    } from 'reactstrap';
    



 

 const PictureCard=({photo})=>{


    return(
    <Card className="pictureContainer">
    <CardImg src={photo.url} alt="Nasa Photo of the Day"/>
      <CardBody>
          <CardTitle className="card">{photo.title}</CardTitle>
          <CardText className="card">{photo.explanation}>{}</CardText>
          <CardText className="card">{photo.date}>{}</CardText>
      </CardBody>
    </Card>
    );
 };
export default PictureCard;