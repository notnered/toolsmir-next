import AboutBlock from "../_components/AboutBlock/AboutBlock";
import Footer from "../_components/Footer/Footer";
import Nav from "../_components/Nav/Nav";

export default function About(){
    return (
        <>
            <Nav />
            <main>
                <AboutBlock />
            </main>
            <Footer />
        </>
    )
}