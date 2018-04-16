import React from 'react';
import ReactDOM from 'react-dom';

const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.handleClickPrev} className="prev">Prev</button>
            <button onClick={props.handleClickNext} className="next">Next</button>
        </div>
    )
};
export default Buttons;