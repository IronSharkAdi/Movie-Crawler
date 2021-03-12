import React , {useState} from 'react'
import { useParams } from 'react-router-dom';
 

function Id() {
    let { id } = useParams();
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)


    return (
        <div>
            <h1>Id</h1>
        </div>
    )
}

export default Id
