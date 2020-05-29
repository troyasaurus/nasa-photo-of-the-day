import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PictureCard from './PictureCard';


export default function PictureList (){
    const [photo, newPhoto] = useState({}); 
   

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=LyUAXHY7mEpHs5GdUDc43GhVhX2IUuuO8LC9HnP7')
        .then(response => {
            console.log(response.data)
            newPhoto(response.data);
           
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })

    }, []);



    return(
        <div>
            <h1>NASA Photo of the Day!</h1>
            <PictureCard photo = {photo}/>
        </div>
    )
}

