import React from 'react';

type Props = {
    title:string,
    year:string,
    image:string
}

const Movie: React.FC <Props>= props => {
    console.log(props)

    return <div className="movie">
        <h2>{props.title}</h2>
        <img src={props.image}/>
        <h3>{props.year}</h3>
    </div>
    
}

export default Movie;