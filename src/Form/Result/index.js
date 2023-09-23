const Result = ({ result }) => {
    return (
        <p>
            {result && (
                <>
                    {result.sourceAmount.toFixed(2)} {result.currency} =&nbsp;
                    {result.targetAmount.toFixed(2)} PLN
                </>
            )}
        </p>
    );
};

export default Result;