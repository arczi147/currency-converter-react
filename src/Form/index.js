import React, { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import Clock from "./Clock";
import { StyledForm, Fieldset, Legend, Label, Currency, Amount, Button } from "./styled";
import { useRatesData } from "./Result/useRatesData";
import Loading from "../Loading";
import Footer from "../Footer";
import Error from "../Error";

const Form = () => {

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.quotes[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency
        });
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <>
            {
                ratesData.status === "loading"
                    ? (
                        <Loading />
                    ) : (
                        ratesData.status === "error"
                            ? (
                                <Error />
                            ) : (
                                <StyledForm onSubmit={onFormSubmit}>
                                    <Fieldset>
                                        <Clock />
                                        <Legend>Przelicznik walut</Legend>
                                        <p>
                                            <label>
                                                <Label><strong>Waluta:</strong></Label>
                                                <Currency
                                                    select
                                                    name="desiredCurrency"
                                                    value={currency}
                                                    onChange={(event) => setCurrency(event.target.value)}>
                                                    {Object.keys(ratesData.quotes).map(currency => (
                                                        <option
                                                            key={currency}
                                                            value={currency}
                                                        >
                                                            {currency}
                                                        </option>
                                                    ))};
                                                </Currency>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <Label><strong>Kwota w USD:</strong></Label>
                                                <Amount
                                                    input
                                                    value={amount}
                                                    type="number"
                                                    name="amount"
                                                    min="0.01"
                                                    step="0.01"
                                                    onChange={(event) => setAmount(event.target.value)}
                                                />
                                            </label>
                                        </p>
                                        <p>
                                            <Button
                                                type="submit">Oblicz!
                                            </Button>
                                        </p>
                                        <p>
                                            <Label
                                                result>
                                                <strong>Wynik: <Result result={result} /></strong>
                                            </Label>
                                        </p>
                                    </Fieldset>
                                    <Footer />
                                </StyledForm>

                            ))
            }
        </>
    )
};

export default Form;