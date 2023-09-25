import { useState, useEffect } from "react";
import "./style.css";

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
        <p className="form__clock">
            Dzisiaj jest {date.toLocaleDateString("pl", { weekday: "long", day: "numeric", month: "long" })}, {date.toLocaleTimeString()}
        </p>
    );
};

export default Clock;