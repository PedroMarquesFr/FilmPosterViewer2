import React from 'react';

class Search extends React.Component {
    render() {
        console.log(this.props.movie.data);
        if(this.props.movie.data.Poster === undefined){
            document.getElementById('myTitle').innerText = 'Movie Poster Not Found';
        }else{
            document.getElementById("myImg").src = '';                    
            document.getElementById('myTitle').innerText = this.props.movie.data.Title;
            this.props.movie.data.Poster ==='N/A'? document.getElementById("myImg").alt = 'Poster Not Available' : document.getElementById("myImg").src = this.props.movie.data.Poster;
            console.log(this.props.movie.data);
        }
        return (
            <div>
               <h3 id='myTitle'className='texto'> </h3>
                <img id="myImg" src="" alt="Poster"/>
            </div>
        );
    }
}

export default Search;

//{Title: "Iron Man", Year: "2008", imdbID: "tt0371746", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"}