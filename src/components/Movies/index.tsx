import React, { useEffect } from 'react';



const Movies: React.FC = props => {
    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=86909078`)
        .then(res => res.json())
        .then(res => console.log(res))
    },[])

    return null;
}

export default Movies;