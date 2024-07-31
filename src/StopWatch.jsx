import {useState,useEffect,React} from "react";

const StopWatch=()=>{
    const[timerOn,setTimerOn]=useState(false)
    const[time,setTime]=useState(0)

    useEffect(()=>{
      let interval=null;
      if(timerOn){
      interval= setInterval(()=>{
           setTime(prev=>prev+1);
      },1000)
    }else{
        clearInterval(interval)
    }
    return()=>clearInterval(interval)
    },[timerOn])

    const handleStart=()=>{
        setTimerOn(true)
    }
    const handleStop=()=>{
        setTimerOn(false)
    }
    const handleReset=()=>{
        setTime(0)
        setTimerOn(false)
    }
    const formatTime=()=>{
        const minutes= Math.floor(time/60);
        const seconds= time%60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }
    return (
        <center>
        <h1>Stopwatch</h1>
        <p>Time: {formatTime()}</p>
        {!timerOn?(
        <button onClick={()=>handleStart()}>Start</button>
        ):(
            <button onClick={()=>handleStop()}>Stop</button>
        )}
        <button onClick={()=>handleReset()}>Reset</button>
        
        </center>
    )
}
export default StopWatch;
