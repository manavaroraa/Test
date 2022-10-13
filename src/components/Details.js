import React, {useState, useEffect } from "react";
import axios from "axios";
import "./Details.css";



const Experience=(props)=>{
    
   const baseURL = "https://api.tvmaze.com/search/shows?q=all"
      const [post, setPost] = useState(null);
   

  useEffect(() => {
    axios
  .get(`${baseURL}`)
  .then(response => {
    return response.data
     }
  )
  .then(data => {
    // console.log(data);
    const Details =  data.find(element => {
        // console.log(element.show.id) 
        // console.log("props",props.id);
       return element.show.id == props.id
    });
    console.log(Details);
    setPost(Details)
  })
  .catch(error => {
     console.log(error.response.data.error)
  })
  }, []);
  if (!post) return null;
      
  
  return(
      <>
     
<div className="container">

   <h3 className="title">Movie Details </h3>

   <div className="products-container">

      <div className="product" data-name="p-1">
        
        <h3> {post.show?.name || ""}</h3>
         <img src={post.show?.image.original || "Image not coming"} alt="" />
         <h1>{`Language ${post.show?.language || "Not"}`}</h1>
           <h3> Rating {post.show.rating?.average || ""}</h3>
           <a href={post.show.officialSite}> Official Site</a>
         <div className="price">{post.show?.summary || "...."}</div>

      </div>

     

   </div>

</div>

      </>
    )}
export default Experience;