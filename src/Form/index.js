import React, { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";
import { StyledForm, Fieldset, Legend, Label, Currency, Amount, Button, Loading, Failure } from "./styled";
import { useRatesData } from "./Result/useRatesData";
import Footer from "../Footer";

const Form = () => {
    const ratesData = useRatesData();

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const calculateResult = (currency, amount) => {
        const rate = ratesData.data[currency].value;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Clock />
                <Legend>
                    Przelicznik walut
                </Legend>
                {ratesData.status === "loading"
                    ? (
                        <Loading>
                            Chwileczkę... <br /> Ładuję aktualne kursy ok. 180 walut świata... 😎
                        </Loading>
                    )
                    : (
                        ratesData.status === "error" ? (
                            <Failure>
                                Hmm... Wystąpił jakiś błąd 😞 Sprawdź, czy Twoje urządzenie ma łączność z Internetem. Jeśli tak... Jest to prawdopodobnie Nasza wina... Możesz spróbować póżniej 😬
                            </Failure>
                        ) : (
                            <>
                                <p>
                                    <label>
                                        <Label><strong>Kwota w $*:</strong></Label>
                                        <Amount
                                            input
                                            value={amount}
                                            placeholder="Wpisz kwotę w USD"
                                            type="number"
                                            name="amount"
                                            min="0.01"
                                            step="0.01"
                                            onChange={(event) => setAmount(event.target.value)}
                                        />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <Label><strong>Waluta:</strong></Label>
                                        <Currency
                                            select
                                            name="desiredCurrency"
                                            value={currency}
                                            onChange={(event) => setCurrency(event.target.value)}>
                                            {Object.keys(ratesData.data).map(((currency) => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
                                                </option>
                                            )))};
                                        </Currency>
                                    </label>
                                </p>
                                <p>
                                    <Button>Oblicz!</Button>
                                </p>
                                <p>
                                    <Label
                                        result>
                                        <strong>Wynik: <Result result={result} currency={currency} /></strong>
                                    </Label>
                                </p>
                            </>
                        )
                    )}
            </Fieldset>
            <Footer />
        </StyledForm>
    );
};

export default Form;