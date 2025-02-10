import React, { useState, useEffect } from 'react';

const dateHook= () => {
    const [now, updateDate] = useState(new Date());

    useEffect(() => {
        let clock = setInterval(() => {
            updateDate(new Date())
        }, 1000);
        
        return() => clearInterval(clock);
    }, []);

    return {date: now.toLocaleString()};
}


export default dateHook;

