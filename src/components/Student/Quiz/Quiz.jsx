import { useNavigate, useParams } from "react-router-dom";
import { useGetQuizQuery } from "../../../features/quizSlice/quizApi";
import QuizItem from "./QuizItem";
import { useEffect } from "react";
import { size } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../../features/quizSlice/quizSlice";
import { quizSelect } from "../../../features/quizSlice/quizSelects";
import calculateQuizMark from "../../../utils/calculateQuizMark";
import quizValidationCheck from "../../../utils/quizValidationCheck";
import { authSelect } from "../../../features/auth/authSelects";
import { useSubmitQuizMutation } from "../../../features/quizMarkSlice/quizMarkApi";

export default function Quiz() {
    const { id } = useParams();
    const { data: quizzesFormQuery, isSuccess } = useGetQuizQuery(id);
    
    const quizzes = useSelector(quizSelect);
    const { user } = useSelector(authSelect);
    const { name, id: userId } = user || {};
    const { video_title, video_id } = quizzes[0] || {};
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [submitQuiz] = useSubmitQuizMutation();
    useEffect(() => {
        if (isSuccess && size(quizzesFormQuery)) {
            dispatch(getQuestions(quizzesFormQuery));
        }
    }, [isSuccess, quizzesFormQuery, dispatch]);

    const handleQuizSubmit = () => {
        let validate = quizValidationCheck(quizzes);

        if (validate === quizzes.length) {
            let result = calculateQuizMark(quizzes);
            const quizResultObject = {
                student_id: userId,
                student_name: name,
                video_id,
                video_title,
                totalQuiz: quizzes.length,
                totalCorrect: result / 5,
                totalWrong: quizzes.length - result / 5,
                totalMark: result,
                mark: 5,
            };
            console.log(quizResultObject);
            submitQuiz(quizResultObject)
                .unwrap()
                .then(() => {
                    navigate("/leaderboard");
                });
        } else {
            console.log("please all quiz submit");
        }
    };

    let content = null;

    if (isSuccess && quizzes?.length > 0) {
        content = quizzes.map((quiz, index) => (
            <QuizItem key={quiz.id} quiz={quiz} qno={index} />
        ));
    }

    return (
        <>
            {isSuccess && quizzes?.length > 0 ? (
                <>
                    <div className="mb-8 mt-3">
                        <h1 className="text-2xl font-bold">
                            {quizzes[0].video_title}
                        </h1>
                        <p className="text-sm text-slate-200">
                            Each question contains 5 Mark
                        </p>
                        <p className="text-green-500 text-bold">
                            Total Marks: {quizzes?.length * 5}
                        </p>
                    </div>
                    <div className="space-y-8 ">{content}</div>
                    <button
                        onClick={handleQuizSubmit}
                        className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
                        Submit
                    </button>
                </>
            ) : (
                <div>No quizzes found</div>
            )}
        </>
    );
}
