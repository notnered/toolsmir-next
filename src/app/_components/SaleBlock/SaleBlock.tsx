import Image from 'next/image';
import slidePic from '../../../../public/slide.png';

export default function SaleBlock() {
    return (
        <div className='my-4'>
            <div className='bg-stone-500/25 px-4 py-2'>
                <div>
                    <div>
                        <h2 className='text-lg'>7 апреля - 31 мая</h2>
                    </div>
                    <div className='flex gap-x-2.5 items-center flex-wrap gap-y-1'>
                        <h1 className='text-2xl'>
                            Волна выгоды: большая распродажа
                        </h1>
                        <button className='bg-[#DA342C] text-xl py-1 text-white px-4 rounded-lg hover:saturate-110 transition-all cursor-pointer'>
                            Смотреть
                        </button>
                    </div>
                </div>
                <div className='flex justify-between gap-x-4 py-4'>
                    <div className='w-full'>
                        <Image
                            className='h-64 object-cover'
                            title='slide'
                            src={slidePic.src}
                            alt='slide'
                            width={slidePic.width}
                            height={slidePic.height}
                        />
                        <div className='py-2 w-full flex bg-stone-400 justify-center text-xl'>
                            Товар
                        </div>
                    </div>
                    <div className='w-full'>
                        <Image
                            className='h-64 object-cover'
                            title='slide'
                            src={slidePic.src}
                            alt='slide'
                            width={slidePic.width}
                            height={slidePic.height}
                        />
                        <div className='py-2 w-full flex bg-stone-400 justify-center text-xl'>
                            Товар
                        </div>
                    </div>
                    <div className='w-full'>
                        <Image
                            className='h-64 object-cover'
                            title='slide'
                            src={slidePic.src}
                            alt='slide'
                            width={slidePic.width}
                            height={slidePic.height}
                        />
                        <div className='py-2 w-full flex bg-stone-400 justify-center text-xl'>
                            Товар
                        </div>
                    </div>
                    <div className='w-full'>
                        <Image
                            className='h-64 object-cover'
                            title='slide'
                            src={slidePic.src}
                            alt='slide'
                            width={slidePic.width}
                            height={slidePic.height}
                        />
                        <div className='py-2 w-full flex bg-stone-400 justify-center text-xl'>
                            Товар
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
