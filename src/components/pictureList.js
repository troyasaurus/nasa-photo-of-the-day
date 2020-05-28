import React, {useState, useEffect} from 'react';
import axios from 'axios';
import pictureCard from './pictureCard';
import { Card, CardTitle, CardText, CardImg, CardBody, Button } from 'reactstrap';



const pictureList = () => {
    const [photo, newPhoto] = useState({}); 
    const [date, setDate] = useState(""); 

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=LyUAXHY7mEpHs5GdUDc43GhVhX2IUuuO8LC9HnP7')
        .then(response => {
            newPhoto(response.data);
            setDate(response.data.date);
        })

    }, []);



    return(
        <Card className="pictureContainer">
          <CardImg src={pictureCard.url} alt="Nasa Photo of the Day"/>
            <CardBody>
                <CardTitle className="card">{photo.title}</CardTitle>
                <CardText className="card">{photo.explanation}>{}</CardText>
                <CardText className="card">{photo.date}>{}</CardText>
                <Button className="button"></Button>
            </CardBody>
        </Card>
    )
}

export default pictureList;