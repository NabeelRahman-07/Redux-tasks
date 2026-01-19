import React, { useEffect, useState } from 'react'

function Traffic() {
    const lights = ["red", "yellow", "green"];
    const [bright, setBright] = useState(-1);
    const [start, setStart] = useState(false);
    const [delay, setDelay] = useState(0);


    useEffect(() => {
        if (!start) return;
        const interval = setInterval(() => {

            setBright(prev => (prev + 1) % lights.length)
        }, delay ? delay * 1000 : 1000)
        return () => clearInterval(interval);
    }, [start, delay])
    return (
        <>
            <div style={{ backgroundColor: "black", width: "250px", height: "600px", display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                {lights.map((light, index) => (<div style={{ backgroundColor: light, borderRadius: 100, width: "150px", height: "150px", opacity: bright == index ? 1 : 0.2 }}></div>))}
            </div>
            <input type="number" placeholder='Enter interval(in seconds)' value={delay} onChange={(e) => setDelay(e.target.value)} />
            <button style={{ width: "80px", height: "50px", marginLeft: 50, marginTop: 20 }} onClick={() => setStart(start => !start)}>{start ? "stop" : "start"}</button>
        </>
    )
}

export default Traffic