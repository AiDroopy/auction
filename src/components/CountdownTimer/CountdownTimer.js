import React, {useState, useEffect} from 'react';
import {getRemainingTimeUntilMsTimestamp} from './CountdownTimerUtils';


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const CountdownTimer = ({countdownTimestampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    //update time every secound
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    },[countdownTimestampMs]);
    
    // to update the remaining time variable
    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return(
        <div className="countdown-timer">
            <span>{remainingTime.days}</span>
            <span>d</span>
            <span className="two-numbers">{remainingTime.hours}</span>
            <span>h</span>
            <span className="two-numbers">{remainingTime.minutes}</span>
            <span>m</span>
            <span className="two-numbers">{remainingTime.seconds}</span>
            <span>s</span>
        </div>
    );
}

export default CountdownTimer;