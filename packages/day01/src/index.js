import React, {useEffect, useRef, useState} from 'react';
import settingsIcon from '../../../public/images/gear.svg';
import dayjs from 'dayjs';
import classnames from 'classnames';
import './Pomodoro.css';

function PomodoroTimer() {
    const audioEl = useRef();
    const [time, setTime] = useState(25 * 1000 * 60);
    const [currentTime, setCurrentTime] = useState(time);
    const [isRunning, setIsRunning] = useState(false);
    const [isRest, setIsRest] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const intervals = [
        {isRest: true, duration: 5 * 1000 * 60},
        {isRest: true, duration: 15 * 1000 * 60},
        {isRest: false, duration: 25 * 1000 * 60}
    ];

    let timer;
    const toggleRunStop = () => {
        setIsRunning(!isRunning);
    };

    const toggleSettingsOpen = () => {
        setPopupOpen(!isPopupOpen);
    };

    const updateTime = (interval) => () => {
        setCurrentTime(interval.duration);
        setIsRunning(false);
        setIsRest(interval.isRest);
        setTime(interval.duration);
        setPopupOpen(false);
    };

    const startInterval = () => {
        if (!timer) {
            timer = setInterval(() => {
                setCurrentTime((time) => time - 1000);
            }, 1000);
        }
    };

    if (isRunning && currentTime <= 0) {
        clearInterval(timer);
        setIsRunning(false);
        setCurrentTime(time);
        audioEl.current.play();
    }

    useEffect(() => {
        console.log(isRunning);
        if (isRunning) {
            startInterval();
        } else {
            clearInterval(timer);
        }
        return () => {
            clearInterval(timer);
        };
    }, [isRunning]);

    const r = 255;
    const progress = (currentTime / time) * 1595;

    return (
        <div className="Pomodoro-App">
            <div className="Pomodoro-timer">
                <div className={classnames('Pomodoro-timer__progress', isRest ? '_green' : '_red')}>
                    <svg height={r * 2 + 10} viewBox={`0 0 ${r * 2 + 10} ${r * 2 + 10}`} width={r * 2 + 10}>
                        <path
                            d={`M${r + 4} 4 a ${r} ${r} 0 0 1 0 ${r * 2} a ${r} ${r} 0 0 1 0 -${r * 2}`}
                            strokeDasharray="1595,1595"
                            strokeDashoffset={progress}
                        />
                    </svg>
                </div>
                <div className="Pomodoro-timer__body">
                    <div className="Pomodoro-timer__content">
                        <div className="Pomodoro-timer__time">{dayjs(currentTime).format('mm:ss')}</div>
                        <div className="Pomodoro-timer__controls">
                            <button className="Settings-button" onClick={toggleRunStop}>
                                {isRunning ? 'stop' : 'start'}
                            </button>

                            <button className="Settings-button" onClick={toggleSettingsOpen}>
                                <img alt="Settings" src={settingsIcon} />
                            </button>
                            {isPopupOpen && (
                                <ul className="Pomodoro-timer__popup">
                                    {intervals.map((interval) => (
                                        <li key={interval.duration} onClick={updateTime(interval)}>
                                            {interval.isRest ? 'Rest' : 'Work'} {dayjs(interval.duration).format('mm')}{' '}
                                            min
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <audio src={'/sounds/alert.ogg'} ref={audioEl} />
        </div>
    );
}

PomodoroTimer.propTypes = {};

PomodoroTimer.defaultProps = {};

export default PomodoroTimer;
