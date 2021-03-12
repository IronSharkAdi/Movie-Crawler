import axios from 'axios';
import React , {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
 

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
        <div>
            <h1>Show Page</h1>
            {loading ? "loading" : (
                <><div>
                        <h1  >{data.Title}</h1>
                        <img src={data.Poster} alt={data.Title}/>
                </div>
            </>
            )} 
        </div>
    )
}

export default Id
