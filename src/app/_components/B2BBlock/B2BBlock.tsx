import Link from "next/link";
import { FaCircleCheck, FaHandshake   } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";


export default function B2BBlock() {
    return (
        <div className="my-4">
            <div className="px-2">
                <h1 className="text-2xl">Онлайн магазин для профессионалов и бизнеса</h1>
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
                    <div className='w-full bg-neutral-400 rounded-md shadow-md shadow-neutral-300 inset-shadow-sm'></div>
                </div>
            </div>
        </div>
    );
}
