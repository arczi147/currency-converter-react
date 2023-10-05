import { Legend, Fieldset, Load } from "./styled";
import Clock from "../Form/Clock";

const Loading = () => (
    <Load>
        <Fieldset>
            <Legend>Przelicznik walut</Legend>
            <Clock />
            Sekundka.... <br/> Ładuję aktualne kursy 168 walut świata... 😎
        </Fieldset>
    </Load>
)

export default Loading;