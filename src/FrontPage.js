import React, {useState} from 'react';
import axios from 'axios';
import Search from './Search';

function FrontPage () {
    const [poster, setPoster] = useState('');
    let moviesArray = [{Title: "Iron Man", Year: "2008", imdbID: "tt0371746", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"}];

    function posterImage(e) {
        e.preventDefault();

        axios.get('https://www.omdbapi.com/?apikey=f9ab0f40&s=' + poster)
            .then(response => {
                moviesArray = response.data.Search;
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
            <Search movie={moviesArray[0]}/>
        </div>
    )
}

export default FrontPage;