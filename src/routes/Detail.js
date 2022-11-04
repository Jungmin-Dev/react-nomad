import React, {useEffect} from 'react';
import {useParams} from "react-router";
import axios from "axios";

const Detail = () => {

  const {id} = useParams();

  const getMovie = async () =>{
    const json = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`).then(res => res.data)
    console.log(json)
    console.log(id)
  }

  useEffect(()=>{
    getMovie();
  },[id])

  return (
    <h1>
      Detail
    </h1>
  );
};

export default Detail;
