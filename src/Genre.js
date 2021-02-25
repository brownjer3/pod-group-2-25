import { Component } from "react";



function Genre(props) {
    return(
        <div>
            <h2 className={props.className} onClick={() => props.handleGenreSelection(props.genre)}>{props.genre.name}</h2>
        </div>
    )
}

export default Genre