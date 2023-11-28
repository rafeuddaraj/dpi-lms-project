export default function Option({
    option,
    value,
    handleQuizAnswer,
    optionIndex,
}) {
    const htmlForMaker = Math.random();
    return (
        <>
            <label htmlFor={`option${htmlForMaker}`}>
                <input
                    onChange={(e) => handleQuizAnswer(e, optionIndex)}
                    value={value}
                    type="checkbox"
                    id={`option${htmlForMaker}`}
                />
                {option}
            </label>
        </>
    );
}
