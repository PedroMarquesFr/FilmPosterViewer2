import React, {useState} from 'react';
import axios from 'axios';

function FrontPage () {
    const [poster, setPoster] = useState('');

    function posterImage(e) {
        e.preventDefault();

        axios.get('https://www.omdbapi.com/?apikey=f9ab0f40&s=' + poster)
            .then(response => {
                const MoviesArray = response.data.Search;
                if(response.data.Poster === undefined){
                    document.getElementById('myTitle').innerText = 'Movie Poster Not Found';
                }else{
                    document.getElementById("myImg").src = '';                    
                    document.getElementById('myTitle').innerText = response.data.Title;
                    response.data.Poster ==='N/A'? document.getElementById("myImg").alt = 'Poster Not Available' : document.getElementById("myImg").src = response.data.Poster;
                    console.log(response.data);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <h1 className='texto'>Film Poster Viewer</h1>
            <form action="" onSubmit={posterImage}>
                <input type="text" placeholder="Name" value={poster} onChange={e => setPoster(e.target.value)}/>
                <button type='submit'>Find</button>
            </form>
        </div>
    )
}

export default FrontPage;