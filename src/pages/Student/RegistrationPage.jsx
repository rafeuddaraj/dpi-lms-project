import StudentRegistration from "../../components/Student/User/Register/StudentRegistration";

export default function RegistrationPage() {
    return (
        <section classNameName="py-6 bg-primary h-screen grid place-items-center">
            <div className="mx-auto max-w-md px-5 lg:px-0">
                <StudentRegistration />
            </div>
        </section>
    );
}
