import Form from "./Form";
import logo from '../../../../assets/image/learningportal.svg'
export default function StudentLogin() {
    return (
        <>
            <div>
                <img
                    className="h-12 mx-auto"
                    src={logo}
                />
                {/* <h1>Altrazen Schools</h1> */}
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                    Sign in to Student Account
                </h2>
            </div>
            <Form />
        </>
    );
}
