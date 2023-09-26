import { Time } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();
  
    return (
        <Time>
            Dzisiaj jest {date.toLocaleDateString("pl", { weekday: "long", day: "numeric", month: "long" })}, {date.toLocaleTimeString()}
        </Time>
    );
};

export default Clock;