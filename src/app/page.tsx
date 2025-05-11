import MainSlider from "./_components/MainSlider/MainSlider";
import Nav from "./_components/Nav/Nav";
import SaleBlock from "./_components/SaleBlock/SaleBlock";

export default function Home() {
    return (
        <>
            <Nav />
            <main>
                <MainSlider />
                <SaleBlock />
            </main>
        </>
    )
}
