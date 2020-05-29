import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PictureCard from './PictureCard';




export default function PictureList (){
    const [photo, newPhoto] = useState([]); 
   

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=LyUAXHY7mEpHs5GdUDc43GhVhX2IUuuO8LC9HnP7')
        .then(response => {
            newPhoto(response.data);
            
        })
        .catch(error => {
            console.log("The data was not returned", error);
        })

    }, []);



    return(
    <div>
        {/* {photo.map(photos => {
           return <PictureCard photos={photo} key={photo.id}/>; */}
       })}

    </div>
       
    )
}

