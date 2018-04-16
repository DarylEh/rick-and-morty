import React from 'react';
import ReactDOM from 'react-dom';

const DisplayCharacter = (props) => {
    const character = props.character;
    if (!character) {
            return <div>Loading...</div>
        }
    return (
        <div className="display-card">
            <img src={character.image} alt=""/>
        </div>
    )
};
export default DisplayCharacter;
