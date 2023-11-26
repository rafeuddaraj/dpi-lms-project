import StudentLogin from "../../components/Student/User/Login/StudentLogin";

export default function LoginPage() {
    return (
        <>
            <section class="py-6 bg-primary h-screen grid place-items-center">
                <div class="mx-auto max-w-md px-5 lg:px-0">
                    <StudentLogin />
                </div>
            </section>
        </>
    );
}
