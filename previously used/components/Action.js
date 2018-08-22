import React from 'react';

//Stateless Functional Component of Action
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What Should I Do?
            </button>
        </div>
    );
};

export default Action;