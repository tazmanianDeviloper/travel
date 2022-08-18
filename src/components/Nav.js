import React from "react";
import {BiWorld} from "react-icons/bi";


export default function Nav(props){
    return(
        <div className="nav--bar">
            <p className="logo--section"><BiWorld className="nav--logo"/></p>
            <p className="nav--text">my travel journal</p>
        </div>
    )
}