export default function B2BBlock() {
    return (
        <div className="my-4">
            <div className="px-2">
                <h1 className="text-2xl">Онлайн магазин для профессионалов и бизнеса</h1>
            </div>
            <div className='flex py-4 gap-x-4'>
                <div className='flex w-full justify-between gap-x-4'>
                    <div className='w-full flex items-center justify-center text-center shadow-md shadow-neutral-300 inset-shadow-sm rounded-md h-64'>
                        <div className="text-2xl capitalize">Оригинальные товары</div>
                    </div>
                    <div className='w-full flex items-center justify-center text-center shadow-md shadow-neutral-300 inset-shadow-sm rounded-md h-64'>
                        <div className="text-2xl capitalize">99% заказов доставляем в срок</div>
                    </div>
                    <div className='w-full flex items-center justify-center text-center shadow-md shadow-neutral-300 inset-shadow-sm rounded-md h-64'>
                        <div className="text-2xl capitalize">выгодные условия сотрудничества</div>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-full bg-neutral-400'></div>
                </div>
            </div>
        </div>
    );
}
