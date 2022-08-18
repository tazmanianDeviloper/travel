import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import Location from "./components/Location";
import Nav from "./components/Nav";
import "./style.css"

export default function App(){
    return(
        <div>
            <Nav/>
            <div>
                {
                    data.map(
                        i=>
                            <Location
                                i={i}
                            />
                    )
                }
            </div>
        </div>
    )
}