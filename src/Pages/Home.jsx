import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Home() {
    const [searchBy , setSearchBy] = useState("")
    // console.log(data)
    // function convertToLink(str){
    //   var link = str.replace(" " , "+")
    // }
    const handleChange = (text) =>{
      var link = text.replace(" " , "+")
      setSearchBy(link)
    }
    console.log(searchBy)
    return (
      <>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      <Link to={"/" + searchBy} > <button>Search</button> </Link> 
      </>
    )
}

export default Home
