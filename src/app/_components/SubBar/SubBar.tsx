import Link from 'next/link';

export default function SubBar() {
    return (
        <nav className='py-2'>
            <ul className='flex justify-center items-center gap-x-4 text-xl'>
                <li>
                    <Link href={''}>
                        <h1>Садовая техника</h1>
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        <h1>Автоматы</h1>
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        <h1>Компрессоры</h1>
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        <h1>Сварочное оборудование</h1>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
