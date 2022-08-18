import React from "react";
import {MdLocationOn} from "react-icons/md";

export default function Location(props){
    return(
        <div className="loc--line">
            <div className="all--locations">
                <img src={require(`../images/${props.i.imageUrl}`)} alt="" className="location--image"/>
                <div className="location--info">
                    <p className="location--line">
                        <MdLocationOn className="location--icon"/>
                        <span className="location--country">{props.i.location}</span>
                        <a className="location--link" href={props.i.googleMapsUrl}>View on Google Maps</a>
                    </p>
                    <h1 className="location--title">{props.i.title}</h1>
                    <p className="location--dates">{props.i.startDate}-{props.i.endDate}</p>
                    <p className="location--description">{props.i.description}</p>
                </div>
            </div>
            <hr className="horizontal--line"/>
        </div>
    )
}