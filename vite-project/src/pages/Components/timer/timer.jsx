import { useState, useEffect } from 'react';
import './timer.css';

function Timer({ time: initialTime = 0 }) {
    
    const [isActive, setIsActive] = useState(false);
    const [seconds, setSeconds] = useState(initialTime);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(prevTime => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const formatTime = (sec) => {
        const days = Math.floor(sec / 86400);
        const hours = Math.floor((sec % 86400) / 3600);
        const minutes = Math.floor((sec % 3600) / 60);
        const remainingSec = sec % 60;

        if (days > 0) return `${days}d ${hours}h ${minutes}m ${remainingSec}s`;
        if (hours > 0) return `${hours}h ${minutes}m ${remainingSec}s`;
        if (minutes > 0) return `${minutes}m ${remainingSec}s`;
        return `${remainingSec}s`;
    };

    return (
        <div className="timer">
            <h3>Timer</h3>
            <input type="text" readOnly value={formatTime(seconds)} />
            <div className="buttons">
                <button className='btn btn-danger' onClick={() => { setIsActive(false); setSeconds(0); }}>Reset</button>
                <button className={'btn ' + (isActive ? 'btn-warning' : 'btn-success')} onClick={() => setIsActive(!isActive)}>
                    {isActive ? 'Pause' : 'Run'}
                </button>
            </div>
        </div>
    );
}

export default Timer;

