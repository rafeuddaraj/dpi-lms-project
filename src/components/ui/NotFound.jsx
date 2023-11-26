import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="py-6 bg-primary h-screen grid place-items-center">
            <div className="text-center space-y-2">
                <h1 className="text-4xl">Page not found!</h1>
                <Link style={{display:'inline-block'}} className="bg-green-700 py-1 px-12 rounded-full" to={"/"}>Home</Link>
            </div>
        </section>
    );
}
