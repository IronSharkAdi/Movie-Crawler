import axios from 'axios';
import React , {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import './Id.css'

function Id() {
    let { id } = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=969c939f&t=${id}`)
    .then(function (response) {
        console.log(response.data)
        setData(response.data)
        setLoading(false)
        console.log(data)
        // console.log(data["Title"])
        })
      }, [] );

    return (
        <div className="id">
            {loading ? "loading" : (
                <><div className="id_container">
                        <h1 className="title" >{data.Title} ({data.Year}) </h1>
                        <img src={data.Poster} className="poster" alt={data.Title}/>
                        <h3 className="plot" >{data.Plot} </h3>
                        <h4 className="genre">{data.Genre}</h4>
                        <p className="rating"> {data.imdbRating} </p>
                        <h4 className="actors" > {data.Actors} </h4>
                </div>
            </>
            )} 
        </div>
    )
}

export default Id
