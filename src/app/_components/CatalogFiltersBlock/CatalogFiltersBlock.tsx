import Link from 'next/link';

export default function CatalogFiltersBlock() {
    return (
        <div className='flex flex-col gap-y-2'>
            <div className='flex flex-col'>
                <h1 className='text-lg font-medium'>Категория</h1>
                <div className='flex flex-col'>
                    <div>
                        <Link href={''}>— Инструменты</Link>
                    </div>
                    <div>
                        <Link href={''}>— Шуруповерты</Link>
                    </div>
                    <div>
                        <Link href={''}>Сетевые</Link>
                    </div>
                </div>
            </div>

            <div className='flex flex-col'>
                <h1 className='text-lg font-medium'>Цена, Р</h1>
                <div className='flex gap-2 w-full mt-2'>
                    <div className='flex'>
                        <input
                            type='text'
                            className='w-full border-[1px] border-neutral-400 rounded-sm py-0.5 px-1.5 focus:outline-1 outline-neutral-600'
                            placeholder='От Руб.'
                            name='priceFrom'
                        />
                    </div>
                    <div className='flex'>
                        <input
                            type='text'
                            className='w-full border-[1px] border-neutral-400 rounded-sm py-0.5 px-1.5 focus:outline-1 outline-neutral-600'
                            placeholder='До Руб.'
                            name='priceTo'
                        />
                    </div>
                </div>
                {/* <div className='flex'>
                    <input
                        type='range'
                        name='priceRange'
                        id='priceRangeId'
                        className='w-full'
                    />
                </div> */}
            </div>

            <div className='flex flex-col w-full'>
                <h1 className='text-lg font-medium'>Производители</h1>
                <div className='flex flex-col w-full gap-y-0.5'>
                    <div className='flex'>
                        <label
                            htmlFor='brandAegId'
                            className='flex items-start w-full'
                        >
                            <input
                                type='checkbox'
                                name='brandCheck'
                                id='brandAegId'
                                className='mt-1'
                            />
                            <span className='ml-0.5 break-words w-full'>
                                AEG
                            </span>
                        </label>
                    </div>
                    <div className='flex'>
                        <label
                            htmlFor='brandKeyangId'
                            className='flex items-start w-full'
                        >
                            <input
                                type='checkbox'
                                name='brandCheck'
                                id='brandKeyangId'
                                className='mt-1'
                            />
                            <span className='ml-0.5 break-words w-full'>
                                KEYANG
                            </span>
                        </label>
                    </div>
                    <div className='flex w-full'>
                        <label
                            htmlFor='brandGigantId'
                            className='flex items-start w-full'
                        >
                            <input
                                type='checkbox'
                                name='brandCheck'
                                id='brandGigantId'
                                className='mt-1'
                            />
                            <span className='ml-0.5 break-words w-full'>
                                GIGANT
                            </span>
                        </label>
                    </div>
                    <div className='flex w-full'>
                        <label
                            htmlFor='brandTestId'
                            className='flex items-start w-full'
                        >
                            <input
                                type='checkbox'
                                name='brandCheck'
                                id='brandTestId'
                                className='mt-1'
                            />
                            <span className='ml-0.5 break-words w-full'>
                                FUBAG
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-y-2 w-full mt-2'>
                <button className='bg-primary rounded-md px-2 py-1 text-white'>
                    Применить
                </button>
                <button className='bg-primary/10 font-medium rounded-md px-2 py-1 text-primary'>
                    Сбросить
                </button>
            </div>
        </div>
    );
}
