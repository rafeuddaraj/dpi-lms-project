import Header from "./Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <section className="py-6 bg-primary">
               {children}
            </section>
        </>
    );
}
