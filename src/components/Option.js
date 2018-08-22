import React from 'react';

//Stateless Functional Component of Option
const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
            className="button button--link"
            onClick={(e) => {
                props.handelDeleteOption(props.optionText);
            }}
        >
            Remove
        </button>
    </div>
);

export default Option;