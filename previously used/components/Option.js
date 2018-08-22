import React from 'react';

//Stateless Functional Component of Option
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handelDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export default Option;