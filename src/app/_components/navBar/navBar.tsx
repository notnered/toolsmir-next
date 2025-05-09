'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navElements = [
    { id: 'home', name: 'Главная', link: '/' },
    { id: 'catalog', name: 'Каталог', link: '/catalog' },
    { id: 'about', name: 'О компании', link: '/about' },
    { id: 'contact', name: 'Контакты', link: '/contact' },
    { id: 'cart', name: 'Корзина', link: '/cart' },
];

export default function NavBar(props: any) {
    const path = usePathname();

    return (
        <nav className='py-2 border-b-[1px] border-t-[1px]'>
            <ul className='flex justify-center items-center gap-x-4 text-xl'>
                {navElements.map((element) => {
                    return (
                        <li key={element.id}>
                            <Link href={element.link}>
                                <h1 className={ path === element.link ? 'text-[#BE322A]' : 'font-normal'}>
                                    {element.name}
                                </h1>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
