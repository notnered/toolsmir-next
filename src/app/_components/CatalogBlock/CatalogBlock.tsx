import pic from '../../../../public/slide.png';
import Image from 'next/image';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import {
    IoIosStats,
    IoMdStar,
    IoMdStarHalf,
    IoMdStarOutline,
} from 'react-icons/io';

export default function CatalogBlock() {
    return (
        <div className='my-4'>
            <div className='flex gap-4'>
                <div className='w-1/6'>filters</div>

                <div className='w-5/6'>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='p-4 flex flex-col rounded-md shadow-md shadow-neutral-300 inset-shadow-sm'>
                            <div className='flex items-center justify-between pb-2'>
                                <div className='text-sm text-neutral-700'>
                                    Код:1532432
                                </div>
                                {/* actions */}
                                <div className='flex text-lg items-center text-neutral-700 gap-2'>
                                    <FaRegHeart />
                                    <IoIosStats className='text-2xl' />
                                </div>
                            </div>
                            <div>
                                <Image
                                    className='object-cover h-56 rounded-md'
                                    src={pic.src}
                                    alt='Товар'
                                    width={pic.width}
                                    height={pic.height}
                                />
                            </div>
                            <div className='flex pt-1 items-center'>
                                <div className='flex text-xl items-center'>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <span className='ml-0.5 text-sm mt-1'>354</span>
                            </div>
                            <div className='pb-1'>
                                <p className='text-lg line-clamp-3'>
                                    Аккумуляторная угловая шлифмашина Ryobi ONE+
                                    R18AG-0 5133001903
                                </p>
                            </div>
                            <div className='text-green-600 font-medium pb-1'>
                                В наличии 1шт.
                            </div>
                            <div className='mt-auto'>
                                <div className='flex items-center gap-1.5'>
                                    <span className='line-through'>
                                        34 990р
                                    </span>
                                    <div className='bg-green-600 py-0.5 px-1.5 rounded-md text-white'>
                                        -20%
                                    </div>
                                </div>
                                <div className='text-2xl font-bold pb-2'>
                                    29 990р
                                </div>
                                <div>
                                    <button className='bg-[#DA342C] px-3 py-1.5 text-white rounded-md text-lg min-w-full hover:saturate-110 transition-all cursor-pointer'>
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 flex flex-col rounded-md shadow-md shadow-neutral-300 inset-shadow-sm'>
                            <div className='flex items-center justify-between pb-2'>
                                <div className='text-sm text-neutral-700'>
                                    Код:1532432
                                </div>
                                {/* actions */}
                                <div className='flex text-lg items-center text-neutral-700 gap-2'>
                                    <FaRegHeart />
                                    <IoIosStats className='text-2xl' />
                                </div>
                            </div>
                            <div>
                                <Image
                                    className='object-cover h-56 rounded-md'
                                    src={pic.src}
                                    alt='Товар'
                                    width={pic.width}
                                    height={pic.height}
                                />
                            </div>
                            <div className='flex pt-1 items-center'>
                                <div className='flex text-xl items-center'>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <span className='ml-0.5 text-sm mt-1'>354</span>
                            </div>
                            <div className='pb-1'>
                                <p className='text-lg line-clamp-3'>
                                    Аккумуляторная угловая шлифмашина Ryobi ONE+
                                    R18AG-0 5133001903
                                </p>
                            </div>
                            <div className='text-green-600 font-medium pb-1'>
                                В наличии 1шт.
                            </div>
                            <div className='mt-auto'>
                                <div className='flex items-center gap-1.5'>
                                    <span className='line-through'>
                                        34 990р
                                    </span>
                                    <div className='bg-green-600 py-0.5 px-1.5 rounded-md text-white'>
                                        -20%
                                    </div>
                                </div>
                                <div className='text-2xl font-bold pb-2'>
                                    29 990р
                                </div>
                                <div>
                                    <button className='bg-[#DA342C] px-3 py-1.5 text-white rounded-md text-lg min-w-full hover:saturate-110 transition-all cursor-pointer'>
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 flex flex-col rounded-md shadow-md shadow-neutral-300 inset-shadow-sm'>
                            <div className='flex items-center justify-between pb-2'>
                                <div className='text-sm text-neutral-700'>
                                    Код:1532432
                                </div>
                                {/* actions */}
                                <div className='flex text-lg items-center text-neutral-700 gap-2'>
                                    <FaRegHeart />
                                    <IoIosStats className='text-2xl' />
                                </div>
                            </div>
                            <div>
                                <Image
                                    className='object-cover h-56 rounded-md'
                                    src={pic.src}
                                    alt='Товар'
                                    width={pic.width}
                                    height={pic.height}
                                />
                            </div>
                            <div className='flex pt-1 items-center'>
                                <div className='flex text-xl items-center'>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <span className='ml-0.5 text-sm mt-1'>354</span>
                            </div>
                            <div className='pb-1'>
                                <p className='text-lg line-clamp-3'>
                                    Аккумуляторная угловая шлифмашина Ryobi ONE+
                                    R18AG-0 5133001903
                                </p>
                            </div>
                            <div className='text-green-600 font-medium pb-1'>
                                В наличии 1шт.
                            </div>
                            <div className='mt-auto'>
                                <div className='flex items-center gap-1.5'>
                                    <span className='line-through'>
                                        34 990р
                                    </span>
                                    <div className='bg-green-600 py-0.5 px-1.5 rounded-md text-white'>
                                        -20%
                                    </div>
                                </div>
                                <div className='text-2xl font-bold pb-2'>
                                    29 990р
                                </div>
                                <div>
                                    <button className='bg-[#DA342C] px-3 py-1.5 text-white rounded-md text-lg min-w-full hover:saturate-110 transition-all cursor-pointer'>
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 flex flex-col rounded-md shadow-md shadow-neutral-300 inset-shadow-sm'>
                            <div className='flex items-center justify-between pb-2'>
                                <div className='text-sm text-neutral-700'>
                                    Код:1532432
                                </div>
                                {/* actions */}
                                <div className='flex text-lg items-center text-neutral-700 gap-2'>
                                    <FaRegHeart />
                                    <IoIosStats className='text-2xl' />
                                </div>
                            </div>
                            <div>
                                <Image
                                    className='object-cover h-56 rounded-md'
                                    src={pic.src}
                                    alt='Товар'
                                    width={pic.width}
                                    height={pic.height}
                                />
                            </div>
                            <div className='flex pt-1 items-center'>
                                <div className='flex text-xl items-center'>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <span className='ml-0.5 text-sm mt-1'>354</span>
                            </div>
                            <div className='pb-1'>
                                <p className='text-lg line-clamp-3'>
                                    Аккумуляторная угловая шлифмашина Ryobi ONE+
                                    R18AG-0 5133001903
                                </p>
                            </div>
                            <div className='text-green-600 font-medium pb-1'>
                                В наличии 1шт.
                            </div>
                            <div className='mt-auto'>
                                <div className='flex items-center gap-1.5'>
                                    <span className='line-through'>
                                        34 990р
                                    </span>
                                    <div className='bg-green-600 py-0.5 px-1.5 rounded-md text-white'>
                                        -20%
                                    </div>
                                </div>
                                <div className='text-2xl font-bold pb-2'>
                                    29 990р
                                </div>
                                <div>
                                    <button className='bg-[#DA342C] px-3 py-1.5 text-white rounded-md text-lg min-w-full hover:saturate-110 transition-all cursor-pointer'>
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 flex flex-col rounded-md shadow-md shadow-neutral-300 inset-shadow-sm'>
                            <div className='flex items-center justify-between pb-2'>
                                <div className='text-sm text-neutral-700'>
                                    Код:1532432
                                </div>
                                {/* actions */}
                                <div className='flex text-lg items-center text-neutral-700 gap-2'>
                                    <FaRegHeart />
                                    <IoIosStats className='text-2xl' />
                                </div>
                            </div>
                            <div>
                                <Image
                                    className='object-cover h-56 rounded-md'
                                    src={pic.src}
                                    alt='Товар'
                                    width={pic.width}
                                    height={pic.height}
                                />
                            </div>
                            <div className='flex pt-1 items-center'>
                                <div className='flex text-xl items-center'>
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                    <IoMdStar />
                                </div>
                                <span className='ml-0.5 text-sm mt-1'>354</span>
                            </div>
                            <div className='pb-1'>
                                <p className='text-lg line-clamp-3'>
                                    Аккумуляторная угловая шлифмашина Ryobi ONE+
                                    R18AG-0 5133001903
                                </p>
                            </div>
                            <div className='text-green-600 font-medium pb-1'>
                                В наличии 1шт.
                            </div>
                            <div className='mt-auto'>
                                <div className='flex items-center gap-1.5'>
                                    <span className='line-through'>
                                        34 990р
                                    </span>
                                    <div className='bg-green-600 py-0.5 px-1.5 rounded-md text-white'>
                                        -20%
                                    </div>
                                </div>
                                <div className='text-2xl font-bold pb-2'>
                                    29 990р
                                </div>
                                <div>
                                    <button className='bg-[#DA342C] px-3 py-1.5 text-white rounded-md text-lg min-w-full hover:saturate-110 transition-all cursor-pointer'>
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
