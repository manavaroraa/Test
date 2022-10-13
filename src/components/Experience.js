import React from "react";
import Details from './Details'
import { useParams } from "react-router-dom";

const Experience=()=>{
    let {id} = useParams();
      return(<>
      <Details id={String(id)}/>
      </>
  )
      }
export default Experience;