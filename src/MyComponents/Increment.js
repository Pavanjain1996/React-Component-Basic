import React, { useState } from 'react'
import IncrementButton from './IncrementButton'

const Increment = (props) => {
    const [value, setValue] = useState(0);
    const increment = (val) => {
        val ? setValue(value+val) : setValue(0);
    }
    const increVal = [1, 10, 100, 1000, 0];
    return(
        <div className="container" style={{padding:"20px"}}>
            <div className="row" style={{border:"3px solid red",padding:"20px"}}>
                <div className="col-md-2" style={{textAlign:"center",fontSize:"20px",padding:"10px"}}>
                    <p>Value = {value}</p>
                </div>
                {increVal.map((val) => {
                    return (
                        <div className="col-md-2" style={{padding:"10px"}}>
                            <IncrementButton changeValue={increment} val={val}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Increment;