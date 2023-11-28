import Option from "./Option";
import { changeAnswer } from "../../../features/quizSlice/quizSlice";
import { useDispatch } from "react-redux";

export default function QuizItem({ quiz, qno }) {
    const { question, options } = quiz || {};
    const dispatch = useDispatch();

    const handleQuizAnswer = (e, optionIndex) => {
        dispatch(
            changeAnswer({
                value: e.target.checked,
                quizIndex: qno,
                optionIndex,
            })
        );
    };

    return (
        <>
            <div className="quiz">
                <h4 className="question">
                    Quiz {qno + 1} - {question}
                </h4>
                <form className="quizOptions">
                    {options?.length > 0 &&
                        options.map((option, optionIndex) => (
                            <Option
                                handleQuizAnswer={handleQuizAnswer}
                                key={option.id}
                                option={option.option}
                                value={option.checked}
                                optionIndex={optionIndex}
                            />
                        ))}
                </form>
            </div>
        </>
    );
}
