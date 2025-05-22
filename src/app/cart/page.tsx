import CartBlock from '../_components/CartBlock/CartBlock';
import Footer from '../_components/Footer/Footer';
import Nav from '../_components/Nav/Nav';

export default function Cart() {
    const cartItems = [
        { id: 1, name: 'Болгарка Makita', price: 3500, quantity: 1 },
        { id: 2, name: 'Бензопила STIHL', price: 7200, quantity: 2 },
    ];

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <>
            <Nav />
            <main className='min-h-[65vh]'>
                <CartBlock cartItems={cartItems} total={total} />
            </main>
            <Footer />
        </>
    );
}
