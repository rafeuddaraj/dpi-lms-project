import { useEffect, useState } from "react";
import { useGetSupportsQuery } from "../../../features/supports/supportsApi";
import moment from "moment";
import runningSupportSessionFind from "../../../utils/runningSupportSessionFind";
import {
    supportTicketApi,
    useTicketBookMutation,
    useTicketDeleteMutation,
} from "../../../features/supportTicketSlice/supportTicketApi";
import { useDispatch, useSelector } from "react-redux";

export default function Support({ showModal, handleModal }) {
    const { data: supports, isSuccess } = useGetSupportsQuery();
    const { user } = useSelector((state) => state.auth);
    const { id: studentId, name: studentName } = user || {};
    const [support, setSupport] = useState({});
    const { link } = support || {};
    const [ticketData, setTicketData] = useState({});
    const { id: ticketId, supportId, startTime, endTime } = ticketData || {};
    const [input, setInput] = useState("");
    const [activeLink, setActiveLink] = useState(false);
    const [hasSupport, setHasSupport] = useState(false);
    const dispatch = useDispatch();
    const [ticketBook, { isLoading, isSuccess: isBookedTicket }] =
        useTicketBookMutation();

    const [deleteTicket] = useTicketDeleteMutation();

    useEffect(() => {
        if (isSuccess) {
            const supportData = runningSupportSessionFind(supports);
            if (supportData?.id) {
                dispatch(
                    supportTicketApi.endpoints.getTicket.initiate({
                        supportId: supportData?.id,
                        studentId,
                    })
                )
                    ?.unwrap()
                    ?.then((data) => {
                        if (data[0]?.id) {
                            setHasSupport(true);
                            setActiveLink(true);
                            setTicketData(data[0]);
                        } else {
                            setHasSupport(true);
                            setActiveLink(false);
                            setSupport(supportData);
                        }
                    });
            } else {
                setHasSupport(false);
            }
        }
    }, [isSuccess, dispatch, supports, studentId]);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const ticketData = {
            studentId,
            studentName,
            startTime: support?.startTime,
            endTime:support?.endTime,
            teacher:support?.teacher,
            link:support?.link,
            supportId: support?.id,
            message: input,
        };
        ticketBook(ticketData)
            .unwrap()
            .then((data) => {
                setTicketData(data);
                setActiveLink(true);
            });
    };
    const handleLeave = () => {
        console.log({ supportId, studentId, id: ticketId });
        alert("লিভ নিলে পরবর্তীতে আবার সিরিয়াল নিতে হবে");
        deleteTicket({ supportId, studentId, id: ticketId })
            .unwrap()
            .then(() => {
                setActiveLink(false);
                handleModal();
            });
    };
    return (
        <>
            <div
                id="authentication-modal"
                tabIndex="-1"
                aria-hidden="true"
                className={`${
                    !showModal && "hidden"
                } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
                style={{ background: "rgba(0,0,0,0.5)" }}>
                <div className="relative p-4 w-full max-w-md max-h-full mx-auto">
                    {/* <!-- Modal content --> */}
                    <div
                        style={{ margin: "45% 0" }}
                        className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Support Session
                            </h3>
                            <button
                                onClick={handleModal}
                                type="button"
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="authentication-modal">
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14">
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-4 md:p-5">
                            {hasSupport ? (
                                <>
                                    {activeLink ? (
                                        <div>
                                            <h1 className="text-black text-2xl text-center">
                                                {moment(startTime).format(
                                                    "HH:MM"
                                                )}
                                                -
                                                {moment(endTime).format(
                                                    "HH:MM"
                                                )}
                                            </h1>
                                            <h2 className="text-black text-center">
                                                আপনার সিরিয়াল ২০ মিনিট পরে
                                            </h2>
                                            <div className=" mt-10 flex justify-between">
                                                <a
                                                    href={link}
                                                    target="_blank"
                                                    rel={"noreferrer"}
                                                    className="border border-cyan items-center px-4 py-1 rounded-full text-black text-sm transition-all hover:bg-cyan ">
                                                    জয়েন করুন
                                                </a>
                                                <button
                                                    onClick={handleLeave}
                                                    className="border border-cyan items-center px-4 py-1 rounded-full text-black text-sm transition-all hover:bg-cyan ">
                                                    লিভ নিন
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <form
                                            className="space-y-4"
                                            action="#"
                                            onSubmit={handleSubmit}>
                                            <div>
                                                <label
                                                    htmlFor="question"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    আপনার সমস্যাটি লিখুন?
                                                </label>
                                                <input
                                                    type="text"
                                                    name="question"
                                                    value={input}
                                                    onChange={handleInput}
                                                    id="question"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                    required
                                                />
                                            </div>
                                            <button
                                                onClick={handleSubmit}
                                                style={{
                                                    background: "#34b5fd",
                                                }}
                                                disabled={isLoading}
                                                type="submit"
                                                className="w-full text-dark hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Submit
                                            </button>
                                        </form>
                                    )}
                                </>
                            ) : (
                                <h2 className="text-center text-2xl text-black">
                                    এখন কোন সেশন চলছে না ।
                                </h2>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
