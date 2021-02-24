import React, { useEffect, useState } from 'react';
import Movie from './Movie';


const API_KEY = '86909078';

const series = ['avengers','fast and furious', 'iron man', 'harry potter'];

const Movies: React.FC = props => {

    const [movies, setMovies] = useState([]);
    useEffect(()=>{
    const promises = series.map(series => {

            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}&page=1`)
            .then(res => res.json())
            
        })

        Promise.all(promises).then((movies: any) => {
            const updateMovies:Movie[] = movies.map((movie:any)=>
            movie.Search).flat(2).map((movie:any)=>({
                title:movie.Title,
                year:movie.Year,
                image:movie.Poster,
                imdb:movie.imdbID
            }))
            props.setMovies(updateMovies)
            props.setTempMovies(updateMovies)
        })
    },[])

    if(props.movies.length === 0){
        return <div className="loader">
            loader
        </div>
    }

    return <div className="movies">
        {props.movies.map((movie:Movie)=>{
            return <Movie
                    key={movie.imdbID}
                    title={movie.title}
                    year={movie.year}
                    image={movie.image}
                    />
        })
        }
    </div>
}

export default Movies;