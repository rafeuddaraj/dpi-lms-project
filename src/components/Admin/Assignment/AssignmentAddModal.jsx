import { useState } from "react";
import { useGetVideosQuery } from "../../../features/videoSlice/videoApi";
import { useAddAssignmentMutation } from "../../../features/assignmentSlice/assignmentApi";
const initialInput = {
    video_title: "",
    video_id: "",
    totalMark: "",
    title: "",
};
export default function AssignmentAddModal({ showModal, handleModal }) {
    const { data: videos, isSuccess: isVideoSuccess } = useGetVideosQuery();
    const [addAssignment, { isLoading }] = useAddAssignmentMutation();

    const [input, setInput] = useState(initialInput);

    const handleInput = (e, video) => {
        if (e.target.name === "video_title") {
            setInput((prev) => ({
                ...prev,
                video_id: video.id,
                video_title: video.title,
            }));
        } else {
            setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addAssignment(input)
            .unwrap()
            .then(() => {
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
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Assignment Add
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
                            <form
                                className="space-y-4"
                                action="#"
                                onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="title"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        onChange={handleInput}
                                        id="title"
                                        value={input.title}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="video_title"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Video Title
                                    </label>
                                    <select
                                        value={input.video_id}
                                        name="video_title"
                                        onChange={(e) => {
                                            const video = videos.find(
                                                (video) =>
                                                    video.id ===
                                                    Number(e.target.value)
                                            );
                                            handleInput(e, video);
                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        id="video_title">
                                        <option hidden value={""}>
                                            Select Video
                                        </option>
                                        {videos?.length > 0 &&
                                            videos.map((video) => (
                                                <option
                                                    key={video.id}
                                                    value={video.id}>
                                                    {video.title}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div>
                                    <label
                                        htmlFor="mark"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Total Mark
                                    </label>
                                    <input
                                        name="totalMark"
                                        id="mark"
                                        value={input.totalMark}
                                        onChange={handleInput}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <button
                                    disabled={isLoading}
                                    style={{ background: "#34b5fd" }}
                                    type="submit"
                                    className="w-full text-dark hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
