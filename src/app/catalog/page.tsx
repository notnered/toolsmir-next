import CatalogBlock from "../_components/CatalogBlock/CatalogBlock";
import Footer from "../_components/Footer/Footer";
import Nav from "../_components/Nav/Nav";

export default function Catalog(){
    return (
        <>
            <Nav />
            <main>
                <CatalogBlock />
            </main>
            <Footer />
        </>
    )
}