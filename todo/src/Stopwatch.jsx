import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0)
    const [forward, setForward] = useState(false)
    const [stop, setStop] = useState(true)

    useEffect(() => {
        const intarval = setInterval(() => {
            if (stop) return
            setTime(prev => forward ? prev + 1 : prev - 1)
        }, 200)

        return (() => clearInterval(intarval))
    }, [forward, stop])

    const handleForward = () => {
        setStop(false)
        setForward(true)
    }
    const handleBackward = () => {
        setStop(false)
        setForward(false)
    }
    const handleStop = () => {
        setStop(true)
        setForward(false)
    }

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:"800px"}}>
            <div style={{backgroundColor:"green",display:'flex',flexDirection:'column',width:"200px",height:"200px",alignItems:"center"}}>
                <h2> Stopwatch</h2>
                <div style={{color:"red"}}>{time}</div>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    <button onClick={handleForward}>Forward</button>
                    <button onClick={handleStop}>Stop</button>
                    <button onClick={handleBackward}>Backward</button>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch