import Link from 'next/link';
import Logo from '../Logo/Logo';

export default function Footer() {
    return (
        <footer className='my-4 bg-neutral-100 p-4 rounded-md'>
            <div className='flex gap-4'>
                <div className='w-full flex justify-between gap-4 text-lg'>
                    <ul className='w-full'>
                        <li className='font-medium text-xl'>О компании</li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/payments'}>Реквизиты</Link>
                        </li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/contact'}>Контакты</Link>
                        </li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/vacancies'}>Вакансии</Link>
                        </li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/about'}>О нас</Link>
                        </li>
                    </ul>
                    <ul className='w-full'>
                        <li className='font-medium text-xl'>Покупателям</li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/tech-support'}>Техническая поддержка</Link>
                        </li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/service-center'}>Сервинсый центр</Link>
                        </li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/brands'}>Производители</Link>
                        </li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/sales'}>Акции</Link>
                        </li>
                    </ul>
                    <ul className='w-full'>
                        <li className='font-medium text-xl'>Компаниям</li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/b2b/cabinet'}>Бизнес кабинет</Link>
                        </li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/b2b/suppliers'}>Поставщикам</Link>
                        </li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/b2b/organizations'}>Организациям</Link>
                        </li>
                        <li className='hover:text-[#DA342C] transition-colors'>
                            <Link href={'/b2b/partners'}>Партнерам</Link>
                        </li>
                    </ul>
                </div>
                <div className='w-full flex justify-end text-end text-lg'>
                    <div>
                        <p className='text-xl'>
                            <span className='font-medium'>Мир инструмента</span>{' '}
                            (С) 2025
                        </p>
                        <p>График работы: 9:00-19:00</p>
                        <p>+7(905)916-70-50</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
