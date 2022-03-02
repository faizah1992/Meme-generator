import React from "react"
import trollFace from "../images/Troll Face.png"

export default function Header(){
    return(
        <header className="header">
            <img src={trollFace} alt="troll face"/>
            <h2>
                Meme Generator
            </h2>
            <h4>
                React Course - Project 3
            </h4>
        </header>
    )
}