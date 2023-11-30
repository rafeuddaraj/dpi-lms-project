import moment from "moment/moment";
import { useState } from "react";
import { useSubmitAssignmentMarkMutation } from "../../../../features/assignmentMarkSlice/assignmentMarkApi";

export default function AssignmentItem({ assignment }) {
    const { title, student_name, createdAt, repo_link, status, mark, id } =
        assignment || {};
    const [input, setInput] = useState(100);
    const [submitAssignmentMark, { isLoading }] =
        useSubmitAssignmentMarkMutation();

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleMarkSubmit = () => {
        console.log({ input, id });
        const markData = {
            mark: input,
            status: "published",
        };
        submitAssignmentMark({
            id,
            data: markData,
        });
    };

    return (
        <>
            <tr>
                <td className="table-td">{title}</td>
                <td className="table-td">
                    {moment(createdAt).format("D MM y h:mm:ss a")}
                </td>
                <td className="table-td">{student_name}</td>
                <td className="table-td">
                    <a rel="noreferrer" href={repo_link} target="_blank">
                        {repo_link}
                    </a>
                </td>
                <td
                    className={`table-td ${
                        status === "pending" && "input-mark"
                    }`}>
                    {status === "pending" ? (
                        <input max="100" value={input} onChange={handleInput} />
                    ) : (
                        mark
                    )}
                    {status === "pending" && (
                        <svg
                            onClick={handleMarkSubmit}
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                            />
                        </svg>
                    )}
                </td>
            </tr>
            {/* <tr>
                <td className="table-td">
                    Assignment 2 - Implement Best Practices
                </td>
                <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                <td className="table-td">Akash Ahmed</td>
                <td className="table-td">
                    https://github.com/Learn-with-Sumit/assignment-1
                </td>
                <td className="table-td">50</td>
            </tr> */}
        </>
    );
}
