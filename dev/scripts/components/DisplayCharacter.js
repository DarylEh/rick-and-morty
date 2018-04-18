import React from 'react';
import ReactDOM from 'react-dom';

const DisplayCharacter = (props) => {
    
    let type = "";
    const character = props.character;
    const location = ((props.character || {}).location || {}).name;
    const origin = ((props.character || {}).origin || {}).name;
    if (character.type === ""){
        type = 'Not that important';
    } else {
        type = character.type;
    }
    // const location = {props.character.location && props.character.location.name};
    console.log(type);
    if (!character) {
        return <div><p>LOADING</p></div>
        }
    return (
        <div className="main-display-card-ind">
            <img src={character.image} alt=""/>
            <p>Name: {character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Type: {type}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {origin}</p>
            <p>Current Location: {location}</p>
            
        </div>
    )
};
export default DisplayCharacter;
