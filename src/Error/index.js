import { Legend, Fieldset, Load, Text } from "./styled";
import Clock from "../Form/Clock";

const Error = () => (
    <Load>
        <Fieldset>
            <Legend>Przelicznik walut</Legend>
            <Clock />
            <Text>
            Hmm... Wystąpił jakiś błąd 😞 Sprawdź, czy Twoje urządzenie ma łączność z Internetem. Jeśli tak... Jest to prawdopodobnie Nasza wina... Możesz spróbować póżniej 😬
            </Text>
        </Fieldset>
    </Load>
)

export default Error;