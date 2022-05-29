import React, { useEffect, useState } from 'react'
import NumberButton from './NumberButton'

const NumberGame = (props) => {
    const colStyle = { textAlign: "center", fontSize: "20px", padding: "10px" }
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [start, setStart] = useState(0)
    const [total, setTotal] = useState(0)
    const [text, setText] = useState('Welcome to the Game! Click on start')
    const [finalNum, setFinalNum] = useState(NaN);
    useEffect(() => {
        setFinalNum(Math.floor(Math.random() * 100) + 1)
    }, [start]);
    const startGame = () => {
        setStart(1);
    }
    const numberButtonHandler = (val) => {
        setTotal(total + val)
    }
    const handleRestart = () => {
        setStart(0)
        setText("Ended your previous game, Click to start a new game")
        setTotal(0)
    }
    useEffect(() => {
        if (total === finalNum) {
            setStart(0)
            setText("Hurray! You summed up to the total, Click start to play again")
            setTotal(0)
        }
        if (total > finalNum) {
            setStart(0)
            setText("Damn! You summed up greater, Try Again")
            setTotal(0)
        }
    }, [total])

    return (
        <div className='container' style={{ padding: "20px" }}>
            <div className="row" style={{ border: "3px solid red", padding: "20px" }}>
                {
                    start ? <>
                        <div className="col-md-2" style={colStyle}>
                            <p>Target Number</p>
                            <p style={{ fontSize: "80px" }}>{finalNum}</p>
                        </div>
                        <div className="col-md-2" style={colStyle}>
                            <p>Your Total</p>
                            <p style={{ fontSize: "80px" }}>{total}</p>
                        </div>
                        <div className="col-md-6" style={colStyle}>
                            {
                                numbers.map((val) => {
                                    return <NumberButton val={val} numberButtonHandler={numberButtonHandler} />
                                })
                            }
                        </div>
                        <div className="col-md-2" style={colStyle}>
                            <button className='btn btn-danger' onClick={handleRestart}>Restart</button>
                        </div></> :
                        <div className='col-md-12' style={colStyle}>
                            <div>{text}</div><br />
                            <button className='btn btn-success' onClick={startGame} style={{ width: "100px" }}>Start</button>
                        </div>
                }
            </div>
        </div>
    );
}

export default NumberGame;