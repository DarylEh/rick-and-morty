import React from 'react';
import ReactDOM from 'react-dom';



const StatusButton = (props) => {
    const status = (props || {}).status;
    const handleClickStatus = props.handleClickStatus;
    console.log(status);
    // ((props.character || {}).origin || {}).name;
    
    const handleClickStatus2 = () => {
        console.log(status)
        if (this.status.status == 'Alive'){
			console.log("alive")
        } else if (this.status.status == 'Dead') {
			console.log('dead')
		}else {
			console.log('unknown')
		}
    }
    
    return (
        <div className="status">
            <button onClick={handleClickStatus2} className="status-button">Status</button>
        </div>

    )
};
export default StatusButton;