import "./style.css";

const Form = () => (
    <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Przelicznik walut</legend>
                <p>
                    <label>
                        <span className="form__labelText"><strong>Waluta:</strong></span>
                        <select className="form__currency" name="desiredCurrency">
                            <option value="EUR" selected>Euro (EUR)</option>
                            <option value="USD">Funt brytyjski (GBP)</option>
                            <option value="GBP">Dolar amerykański (USD)</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText"><strong>Kwota:</strong></span>
                        <input className="form__amount" type="number" name="amount" min="0.01" step="0.01"/>
                    </label>
                </p>
                <p>
                    <button className="form__button" type="submit">Oblicz!</button>
                </p>
                <p>
                    <span className="form__labelText form__labelText--result"><strong>Wynik [PLN]:</strong></span>
                </p>
            </fieldset>
        </form>
);

export default Form;