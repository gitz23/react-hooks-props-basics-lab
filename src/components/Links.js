import React from "react";

function Links(props){
    return(
    <div>
        <h3>Links</h3>
        <a href={props.links}>{props.links}</a>
        <a href={props.links}></a> 
    </div>
    )
}

export default Links;