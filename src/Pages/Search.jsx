import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom';

function Search() {
    let { id } = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=969c939f&s=${id}`)
    .then(function (response) {
        console.log(response.data.Search)
        setData(response.data.Search)
        setLoading(false)
        console.log(data)
        // console.log(data["Title"])
        })
      }, [] );
    return (
        <div>
            <h1>Search</h1>
            {loading ? "loading" : data.map((object , key) =>{return(
                <><div>
                    <Link to={`/movie/${object.imdbID}`}>
                        <h1 key={key} >{object.Title}</h1>
                        <img src={object.Poster} alt={object.Title}/>
                    </Link>
                </div>
            </>
            )}) }
        </div>
    )
}

export default Search
