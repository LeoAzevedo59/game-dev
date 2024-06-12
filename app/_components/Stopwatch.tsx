'use client'

import React, { useEffect, useState } from 'react'

type StopwatchProps = {
    startDate: Date
    endDate: Date
}


type TimeProps = {
    hours: number,
    minutes: number,
    seconds: number
}

export function Stopwatch({ startDate, endDate }: StopwatchProps) {
    const calculateTimeLeft = (): TimeProps => {
        const now = new Date();

        //@ts-ignore
        const difference = endDate - now;
        let timeLeft = {} as TimeProps;

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = {
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }

        return timeLeft;
    };


    const [timeLeft, setTimeLeft] = useState<TimeProps>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    return (
        <span>
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
        </span>
    )
}