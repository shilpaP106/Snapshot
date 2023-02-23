import React from "react";
import { Container } from "../container/Container";
import { useContext } from "react";

function Image(props) {
    const { search } = useContext(Container);
    const url = props.imageUrl ? props.imageUrl : `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
    return(  <img src={url} alt={search}  style={{objectFit:"contain",width:"200px",height:"200px"}} />) 
}

export default Image;
