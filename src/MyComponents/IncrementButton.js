import React from 'react'

const IncrementButton = (props) => {
    const increment = () => {
        props.changeValue(props.val);
    }
    return(
        <button onClick={increment} className="btn btn-success btn-sm" style={{width:"100%"}}>
            {props.val ? props.val : "Clear Value"}
        </button>
    );
}

export default IncrementButton;