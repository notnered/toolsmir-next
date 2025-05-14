import Link from "next/link";
import { FaCircleCheck, FaHandshake   } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import Image from 'next/image';
import b2bImage from '../../../../public/b2b.png';


export default function B2BBlock() {
    return (
        <div className="my-4">
            <div>
                <h1 className="text-3xl">Онлайн магазин для профессионалов и бизнеса</h1>
            </div>
            <div className='flex py-4 gap-x-4'>
                <div className='flex w-full justify-between gap-x-4'>
                    <div className='w-full flex p-4 shadow-md shadow-neutral-300 inset-shadow-sm rounded-md h-64'>
                        <div className="flex flex-col">
                            <div className="pb-3">
                                <FaCircleCheck className="text-3xl size-10" />
                            </div>
                            <p className="text-2xl capitalize">Оригинальные товары</p>
                            <div className="mt-auto text-lg">
                                <Link href={'/'}>Подробнее</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex p-4 shadow-md shadow-neutral-300 inset-shadow-sm rounded-md h-64'>
                        <div className="flex flex-col">
                            <div className="pb-3">
                                <MdAccessTimeFilled className="text-3xl size-10" />
                            </div>
                            <p className="text-2xl capitalize">99% заказов доставляем в срок</p>
                            <div className="mt-auto text-lg">
                                <Link href={'/'}>Подробнее</Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex p-4 shadow-md shadow-neutral-300 inset-shadow-sm rounded-md h-64'>
                        <div className="flex flex-col">
                            <div className="pb-3">
                                <FaHandshake className="text-3xl size-10" />
                            </div>
                            <p className="text-2xl capitalize">выгодные условия сотрудничества</p>
                            <div className="mt-auto text-lg">
                                <Link href={'/'}>Подробнее</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex w-full'>
                    <div className='w-full bg-neutral-500 rounded-md shadow-md shadow-neutral-300 inset-shadow-sm p-4'>
                        <div className="pb-2">
                            <h1 className="text-3xl text-white font-medium">Покупайте как юрлицо</h1>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="flex flex-wrap gap-2 w-full">
                                <div className="bg-neutral-400 text-white text-lg py-1 px-2 rounded-md">Персональный менеджер</div>
                                <div className="bg-neutral-400 text-white text-lg py-1 px-2 rounded-md">Электронный документооборот (ЭДО)</div>
                                <div className="bg-neutral-400 text-white text-lg py-1 px-2 rounded-md">Личный кабинет B2B</div>
                                <div className="bg-neutral-400 text-white text-lg py-1 px-2 rounded-md">Отсрочка платежа</div>
                                <div className="bg-neutral-400 text-white text-lg py-1 px-2 rounded-md">Система оптовых скидок</div>
                                <div className="bg-neutral-400 text-white text-lg py-1 px-2 rounded-md">История заказов и аналитика покупок</div>
                            </div>
                            {/* <div className="flex w-full justify-center items-center">
                                <h1 className="text-6xl text-white font-bold bg-red-500 p-4 rounded-md">B2B</h1>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
