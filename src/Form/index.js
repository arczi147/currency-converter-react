import React, { useState } from "react";
import { currencies } from "../currencies";
import "./style.css";
import Result from "./Result";
import Clock from "./Clock";

const Form = () => {

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();

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
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <Clock />
                <legend className="form__legend">Przelicznik walut</legend>
                <p>
                    <label>
                        <span className="form__labelText"><strong>Waluta:</strong></span>
                        <select
                            className="form__currency"
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
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText"><strong>Kwota:</strong></span>
                        <input
                            value={amount}
                            className="form__amount"
                            type="number"
                            name="amount"
                            min="0.01"
                            step="0.01"
                            onChange={(event) => setAmount(event.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <button
                        className="form__button"
                        type="submit">Oblicz!</button>
                </p>
                <p>
                    <span
                        className="form__labelText form__labelText--result">
                        <strong>Wynik: <Result result={result} /></strong>
                    </span>
                </p>
            </fieldset>
        </form>
    )
};

export default Form;