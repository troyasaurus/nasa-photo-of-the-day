import React, {useState, useEffect} from 'react'
import axios from 'axios'
import pictureCard from './pictureCard'



const pictureList = () => {
    const [photo, newPhoto] = useState({}); 

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=LyUAXHY7mEpHs5GdUDc43GhVhX2IUuuO8LC9HnP7')
        .then(response => {
            newPhoto(response.data)
        })

    }, []);



    return(
        <div>
            <pictureCard
            key={photo.id}
            date={photo.date}
            title={photo.title}
            description={photo.description}
            picture={photo.url}/>
        
        </div>
    )
}

export default pictureList;