import { useState } from "react";

export default function Option({ name, value, handleOption, isChecked, id }) {
    const [forIdRandom] = useState(Math.random());
    return (
        <>
            <input
                placeholder={name}
                type="text"
                name="option"
                id={`option${forIdRandom}`}
                value={value}
                onChange={(e) => handleOption(e, id)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white mb-3"
                required
            />
            <select
                name="isCorrect"
                value={isChecked}
                required
                onChange={(e) => handleOption(e, id)}
                className=" mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                <option value="" hidden>
                    Choose answer
                </option>
                <option value={true}>True</option>
                <option value={false}>False</option>
            </select>
        </>
    );
}
