export default function CartBlock(props: any) {
    return (
        <div className='my-4'>
            <h2 className='text-3xl font-semibold mb-4'>🛒 Корзина товаров</h2>

            {props.cartItems.length === 0 ? (
                <p className='text-lg text-center'>Ваша корзина пуста</p>
            ) : (
                <>
                    <ul className='space-y-4'>
                        {props.cartItems.map((item: any) => (
                            <li
                                key={item.id}
                                className='flex items-center justify-between border p-4 rounded-md shadow-sm bg-white'
                            >
                                <div>
                                    <p className='font-medium text-lg'>
                                        {item.name}
                                    </p>
                                    <p className='text-neutral-600 text-sm'>
                                        Цена: {item.price} ₽ × {item.quantity}
                                    </p>
                                </div>
                                <button className='text-primary hover:underline text-sm cursor-pointer'>
                                    Удалить
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className='mt-4 flex justify-between items-center'>
                        <p className='text-xl font-semibold'>Итого: {props.total} ₽</p>
                        <button className='bg-primary text-white px-4 py-2 rounded-md hover:saturate-110 cursor-pointer transition-all'>
                            Очистить корзину
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
