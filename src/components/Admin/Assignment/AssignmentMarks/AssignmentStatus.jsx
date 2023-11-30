import { useSelector } from "react-redux";

export default function AssignmentStatus() {
    const { marksStatus } = useSelector((state) => state.userMark);
    const { total, pending, markSent } = marksStatus || {};
    return (
        <>
            <ul className="assignment-status">
                <li>
                    Total <span>{total}</span>
                </li>
                <li>
                    Pending <span>{pending}</span>
                </li>
                <li>
                    Mark Sent <span>{markSent}</span>
                </li>
            </ul>
        </>
    );
}
