import React from "react"
import {useParams} from "react-router-dom"
import axios from "axios";
import { useState,useEffect } from "react";


export default function SearchBar() {
   const {id}  = useParams(); 
   const [charDetail, setCharDetail] = useState({})
   useEffect(()=>{
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
      if (data.name) {
         setCharDetail(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharDetail({});

   },[id])
   return <div>
      <h2>{charDetail.name}</h2>
      <h2>{charDetail.status}</h2>
      <h2>{charDetail.species}</h2>
      <h2>{charDetail.gender}</h2>
      <h2>{charDetail.origin?.name}</h2>
      <img src={charDetail.image} alt={charDetail.name}/>
      </div>;
   
};