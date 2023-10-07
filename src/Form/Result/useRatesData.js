import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
    });

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_ljaMhWjmrFyzL74kN0gQp8qORknC2imADnz2hNfx");

                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }

                    const { data } = await response.json();

                    setRatesData({
                        status: "success",
                        data,
                    });

                } catch {
                    setRatesData({
                        status: "error",
                    });
                }
            })();

        }, 5000);
    }, []);

    return ratesData;
};