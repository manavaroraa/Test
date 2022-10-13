import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from './axios';
import './Row.css';


const Row = ({title ,fetchUrl},props) => {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData () {
            const request = await axios.get(fetchUrl);
            setMovies(request.data);
            return request; 
        }
    fetchData();
    },[fetchUrl]);
    const truncate = (str,n) =>{
  return str?.length > n ? str.substr(0,n-1) + "..." : str;
}
    // console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
        {/* Row poster */}
        <div className='row__posters'>
             {movies.map(movie =>
             (
            <div key={movie.show?.id}>
                   <Link
                        className="navbar-brand"
                        to={`/detail/${movie.show?.id}`}
                        state={{ id: movie.show?.id }}
                      >
                 <h5> {movie.show.name}</h5>
                <img  className="row__poster" src={movie.show?.image.original || "Image not coming"} alt="Error"/>  
                </Link>
                <h6 className='card_title'> {truncate(movie.show?.summary || "....",30)}</h6>  
                </div>     
        ))}
        {/* <img key={movie.show?.id} className="row__poster" src={SharedWorker.image?.original} alt={movie.name}/> */}
           
        
        </div>
       </div>
  )
};

export default Row;