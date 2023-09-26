import { useState, useEffect } from "react";
import { Time } from "./styled";

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(IntervalId);
        };
    }, []);

    return (
        <Time>
            Dzisiaj jest {date.toLocaleDateString("pl", { weekday: "long", day: "numeric", month: "long" })}, {date.toLocaleTimeString()}
        </Time>
    );
};

export default Clock;