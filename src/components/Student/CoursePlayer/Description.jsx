import { Link } from "react-router-dom";

export default function Description({ video }) {
    const { title, date, description } = video || {};
    return (
        <>
            <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-100">
                    {title}
                </h1>
                <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                    {date}
                </h2>

                <div className="flex gap-4">
                    <Link
                        to={"/assignment/1"}
                        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                        এসাইনমেন্ট
                    </Link>

                    <Link
                        to={"/quiz/1"}
                        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                        কুইজে অংশগ্রহণ করুন
                    </Link>
                </div>
                <p className="mt-4 text-sm text-slate-400 leading-6">
                    {description}
                </p>
            </div>
        </>
    );
}
