import React from 'react';

//Stateless Functional Component of Action
const Action = (props) => (
    <div>
        <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            className="big-button"
            >
            What Should I Do?
        </button>
    </div>
);

export default Action;