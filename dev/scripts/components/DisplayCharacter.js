import React from 'react';
import ReactDOM from 'react-dom';

const DisplayCharacter = (props) => {
    
    let type = "";
    const character = props.character;
    // let location = props.character.location.name;
    const location = ((props.character || {}).location || {}).name;
    const origin = ((props.character || {}).origin || {}).name;
    if (character.type === ""){
        type = 'Not that important';
    } else {
        type = character.type;
    }



    // const location = {props.character.location && props.character.location.name};
    console.log(location);
    if (!character) {
        return <div><p>LOADING</p></div>
        }

    // const handleClickStatus3 = (e) => {
    //     e.preventDefault();
    //     let alive = 'hidden';
    //     console.log(character);
    //     if (character.status === 'Alive') {
    //         alive = 'visible'
    //     } else if (character.status == 'Dead') {
    //         dead = 'visible';
    //     } else {
    //         unknown = 'visible';
    //     }
    // }
    const handleClickStatus = (e) => {
        e.preventDefault();
        console.log(character.status)
        // let alive = 'hidden';
        // console.log(character);
        // if (character.status === 'Alive') {
        //     alive = 'visible'
        // } else if (character.status == 'Dead') {
        //     dead = 'visible';
        // } else {
        //     unknown = 'visible';
        // }
    }

    return (

        <div className="main-display-card-ind">
            <div className="main-display-card-ind-top">
                <div className="main-display-card-ind-img">
                    <img src={character.image} alt=""/>
                    <div className="status-alive" >Alive</div>
                    <div className="status-dead" >Dead</div>
                    <div className="status-unknown" >Unknown</div>
                
                </div>
                <div className="main-display-card-ind-side">
                    <div className="main-display-card-ind-name">
                        <p> <span className="bold"> {character.name} </span> </p>
                    </div>
                    <div className="main-display-card-ind-info">
                        <p> <span className="bold"> Species:</span> {character.species}</p>
                        <p> <span className="bold"> Type: </span> {type}</p>
                        <p> <span className="bold"> Gender:</span> {character.gender}</p>
                        <p> <span className="bold"> Current Location:</span> {location}</p>
                        <p> <span className="bold"> Origin: </span> {origin}</p>
                    
                    </div>
                    <div className="main-display-card-ind-bottom">
                        <p>Status: </p>
                        <button onClick={handleClickStatus} >hey now</button>
                    </div>
                </div>
            
            </div>
            
            
        </div>
    )
};
export default DisplayCharacter;
