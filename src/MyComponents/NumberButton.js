import React from 'react'

const NumberButton = (props) => {
    return (
        <span style={{padding:"10px"}}>
            <button className='btn btn-info' onClick={() => {props.numberButtonHandler(props.val)}} style={{width:"100px"}}>+{props.val}</button>
            {props.val%3===0 ? <><br /><br/></> : ""}
        </span>
    );
}

export default NumberButton;