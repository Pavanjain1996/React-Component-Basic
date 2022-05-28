import React, { useState } from 'react'

const TitleChange = (props) => {
    const [text, setText] = useState("")
    const [data, setData] = useState("")
    const handleClick = () => {
        setText(data)
        setData("")
    }
    return (
        <div className='container' style={{ padding: "20px" }}>
            <div className='row' style={{ border: "3px solid red", padding: "20px" }}>
                <div className='col-md-6' style={{ padding: "10px" }}>
                    <p>Write something in the text field</p>
                    <p>{text}</p>
                </div>
                <div className='col-md-4' style={{ padding: "10px" }}>
                    <input
                        className='form-control'
                        value={data}
                        onChange={(e) => { setData(e.target.value) }} />
                </div>
                <div className='col-md-2' style={{ padding: "10px" }}>
                    <button className='btn btn-danger' onClick={handleClick}>Copy</button>
                </div>
            </div>
        </div>
    );
}

export default TitleChange;