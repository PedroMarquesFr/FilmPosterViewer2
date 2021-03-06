import React, {useState} from 'react';
import axios from 'axios';

function Search(props) {

    const [poster, setPoster] = useState('');

    function posterImage(e) {
        e.preventDefault();

        axios.get('https://www.omdbapi.com/?apikey=f9ab0f40&s=' + poster)
            .then(response => {
                console.log(response.data);
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
            <h3 id='myTitle'className='texto'> </h3>
            <img id="myImg" src="" alt="Poster"/>
        </div>
    )
}

export default Search;