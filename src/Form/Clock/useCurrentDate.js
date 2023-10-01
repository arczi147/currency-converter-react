import { useState, useEffect } from "react";

const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const IntervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(IntervalId);
        };
    }, []);

    return date;
}

export { useCurrentDate }