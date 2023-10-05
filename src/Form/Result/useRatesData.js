import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        quotes: "",
    });

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const response = await fetch("http://api.exchangerate.host/list?access_key=f7c58e000fbd11ee454e07d5cf103e42");

                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }

                    const { quotes } = await response.json();

                    setRatesData({
                        status: "success",
                        quotes,
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