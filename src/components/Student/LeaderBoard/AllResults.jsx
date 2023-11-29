import { useEffect, useRef, useState } from "react";
import { useGetAssignmentsMarksQuery } from "../../../features/assignmentMarkSlice/assignmentMarkApi";
import { useGetQuizzesMarksQuery } from "../../../features/quizMarkSlice/quizMarkApi";
import {
    generateLeaderBoard,
    studentIdFinder,
} from "../../../utils/leaderBoard";
import { useDispatch, useSelector } from "react-redux";
import { authSelect } from "../../../features/auth/authSelects";
import { userMarkAdd } from "../../../features/assignmentMarkSlice/assignmentMarkSlice";

export default function AllResults() {
    const { user } = useSelector(authSelect);
    const contentRef = useRef(null);
    const { data: quizzesMarks, isSuccess: isSuccessQuizzesMark } =
        useGetQuizzesMarksQuery();
    const { data: assignmentsMarks, isSuccess: isSuccessAssignmentsMarks } =
        useGetAssignmentsMarksQuery();
    const [marks, setMarks] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSuccessAssignmentsMarks && isSuccessQuizzesMark) {
            const studentIds = studentIdFinder(assignmentsMarks, quizzesMarks);
            const leaderBoard = generateLeaderBoard(
                studentIds,
                assignmentsMarks,
                quizzesMarks
            );
            const userMark = leaderBoard.find((mark) => mark.id === user.id);

            setMarks(leaderBoard);
            dispatch(userMarkAdd(userMark));
        }
    }, [
        isSuccessAssignmentsMarks,
        isSuccessQuizzesMark,
        assignmentsMarks,
        quizzesMarks,
        dispatch,
        user.id,
    ]);

    contentRef.current = marks?.map(
        ({ name, quizMark, assignmentMark, rank, totalMark }) => {
            return (
                <tr
                    key={Math.random()}
                    className="border-b border-slate-600/50">
                    <td className="table-td text-center">{rank}</td>
                    <td className="table-td text-center">{name}</td>
                    <td className="table-td text-center">{quizMark}</td>
                    <td className="table-td text-center">{assignmentMark}</td>
                    <td className="table-td text-center">{totalMark}</td>
                </tr>
            );
        }
    );

    return (
        <>
            <div className="my-8">
                <h3 className="text-lg font-bold">Top 20 Result</h3>
                <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                    <thead>
                        <tr className="border-b border-slate-600/50">
                            <th className="table-th !text-center">Rank</th>
                            <th className="table-th !text-center">Name</th>
                            <th className="table-th !text-center">Quiz Mark</th>
                            <th className="table-th !text-center">
                                Assignment Mark
                            </th>
                            <th className="table-th !text-center">Total</th>
                        </tr>
                    </thead>

                    <tbody>{contentRef.current}</tbody>
                </table>
            </div>
        </>
    );
}
