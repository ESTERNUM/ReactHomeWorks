import { useEffect, useState } from "react"


const useTimer = () => {
    
    const [time, setTime] = useState(0);
    const [stopTime, setStopTime] = useState(null)


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1)
        }, 10000)
        return () => {
            clearInterval(timer)
        }

    }, [])


        const start = () => {
        setTime(prevTime => prevTime + 1)
    }

    const stop = () => {
            if(time > 0)
            setTime(null);
    }

    

    const reset = () => {
    setTime(0)
    }

    return(

        
        {time, start, stop, reset}
        
    ) 
     
}




export default useTimer
