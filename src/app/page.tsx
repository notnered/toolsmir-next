import B2BBlock from "./_components/B2BBlock/B2BBlock";
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
                <B2BBlock />
            </main>
        </>
    )
}
