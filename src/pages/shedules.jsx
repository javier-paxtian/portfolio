import React from "react";
import Watch from "./components/watch.componet";

const Shedules = () => {

    return <>
        <main className="bg-indigo-700 h-full min-h-screen w-full flex justify-center items-center gap-x-16 gap-y-16 text-center px-[5%] py-24 flex-wrap">
            <Watch
                img='https://www.worldometers.info/img/flags/mx-flag.gif' city="Ciudad de México" timeZone="America/Mexico_City" />
            <Watch
                img='https://www.worldometers.info/img/flags/us-flag.gif' city="Nueva York" timeZone="America/New_York" />
            <Watch
                img='https://www.worldometers.info/img/flags/uk-flag.gif' city="Londres" timeZone="Europe/London" />
            <Watch
                img='https://www.worldometers.info/img/flags/rs-flag.gif' city="Moscú" timeZone="Europe/Moscow" />
        </main>
    </>
}

export default Shedules