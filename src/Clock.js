import React from "react";
import { useState } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());
    setInterval(()=>setTime(new Date()), 1000);
    return (
        <h2>
            {time.toLocaleTimeString()}
        </h2>
    )
}

export default Clock;