import React, { useEffect, useState } from "react";

const Watch = (props) => {
    const { city = 'Ciudad de México', timeZone = 'America/Mexico_City', img = 'https://www.worldometers.info/img/flags/mx-flag.gif' } = props
    const [hour, setHour] = useState('')

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: timeZone });
            setHour(currentTime);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeZone]);

    return <>
        <div className="text-white flex flex-col items-center gap-y-6">
            <img className="w-48 h-36 object-cover rounded-md" src={img} alt="" />
            <h1 className="text-4xl font-extrabold">{hour}</h1>
            <h2 className="text-xl font-semibold">{city}</h2>
            <p className="text-xs font-light">{timeZone}</p>
        </div>
    </>
}

export default Watch