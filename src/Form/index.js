import React, { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import Clock from "./Clock";
import { StyledForm, Fieldset, Legend, Label, Currency, Amount, Button } from "./styled";

const Form = () => {

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState(null);

    const calculateResult = (currency, amount) => {
        const rate = currencies.find(({ short }) => short === currency).rate;

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
                <Legend>Przelicznik walut</Legend>
                <p>
                    <label>
                        <Label><strong>Waluta:</strong></Label>
                        <Currency
                            select
                            name="desiredCurrency"
                            value={currency}
                            onChange={(event) => setCurrency(event.target.value)}>
                            {currencies.map(currency => (
                                <option
                                    key={currency.id}
                                    value={currency.short}
                                >
                                    {currency.name} ({currency.short})
                                </option>
                            ))};
                        </Currency>
                    </label>
                </p>
                <p>
                    <label>
                        <Label><strong>Kwota:</strong></Label>
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
        </StyledForm>
    )
};

export default Form;