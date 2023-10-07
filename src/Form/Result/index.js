const Result = ({ result, currency }) => (
    <p>
        {result && (
            <>
                {result.sourceAmount.toFixed(2)} USD =&nbsp;
                {result.targetAmount.toFixed(2)}&nbsp;{currency}
            </>
        )}
    </p>
);

export default Result;