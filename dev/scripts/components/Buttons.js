import React from 'react';
import ReactDOM from 'react-dom';

const Buttons = (props) => {
    return (
        <div className="main-display-list-buttons">
            <button onClick={props.handleClickPrev} className="btn prev">Prev</button>
            <button onClick={props.handleClickNext} className="btn next">Next</button>
        </div>
    )
};
export default Buttons;