import React from 'react'
import onepiece from "../assets/1.jpg"
import blackclover from"../assets/black.jpg"
import bleach from"../assets/bleach.jpg"
import jojo from "../assets/jojo.jpg"
import dragonball from"../assets/dra.jpg"
import hunterxhunter from"../assets/hunter.jpg"
import './moviecard.css'

function MovieCard({Mtitle}) {
  return (
    <div className="movies">
      <h1>{Mtitle}</h1>
      <div className="list">
        <img src={onepiece} alt="" />
        <img src={blackclover} alt="" />
        <img src={bleach} alt="" />
        <img src={jojo} alt="" />
        <img src={dragonball} alt="" />
         <img src={hunterxhunter} alt="" />
      </div>
    </div>
  )
}

export default MovieCard