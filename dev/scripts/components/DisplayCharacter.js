import React from 'react';
// import ReactDOM from 'react-dom';

//Display character component
const DisplayCharacter = (props) => {
    //passing selected character from state via props
    const character = props.character;
    //used to access nested obkects so we do not get undefined
    const location = ((props.character || {}).location || {}).name;
    const origin = ((props.character || {}).origin || {}).name;
    // if type property is blank, throw in replacement text
    let type = "";
    if (character.type === ""){
        type = 'Not that important';
    } else {
        type = character.type;
    }
    // if data is not gathered throw up a Loading message until data is retreived
    if (!character) {
        return <div><p>LOADING...</p></div>
    }

    return (
        <div className="main-display-card-ind">
            <div className="main-display-card-ind-img">
                <img src={character.image} alt=""/>
            </div>
            <div className="main-display-card-ind-side">
                <div className="main-display-card-ind-name">
                    <p className="name-result" > <span className="bold"> {character.name} </span> </p>
                    <p className="status-result" > <span className="bold"> Status: </span> {character.status}</p>
                </div>
                <div className="main-display-card-ind-info">
                    <p> <span className="bold"> Species:</span> {character.species}</p>
                    <p> <span className="bold"> Type: </span> {type}</p>
                    <p> <span className="bold"> Gender:</span> {character.gender}</p>
                    <p> <span className="bold"> Current Location:</span> {location}</p>
                    <p> <span className="bold"> Origin: </span> {origin}</p>
                </div>
            </div>        
        </div>
    )
};
export default DisplayCharacter;
