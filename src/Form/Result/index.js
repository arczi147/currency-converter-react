const Result = ({ result }) => (
    <p>
        {result && (
            <>
                {result.sourceAmount.toFixed(2)} USD =&nbsp;
                {result.targetAmount.toFixed(2)} {result.currency}
            </>
        )}
    </p>
);

export default Result;