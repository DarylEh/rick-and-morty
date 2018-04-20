import React from 'react';
//Button component that receives handleClickPrev and handleClickNext 
//Runs said functions located in App
const Buttons = (props) => {
    return (
        <div className="main-display-list-buttons">
            <button onClick={props.handleClickPrev} className="btn prev">Prev</button>
            <button onClick={props.handleClickNext} className="btn next">Next</button>
        </div>
    )
};
export default Buttons;