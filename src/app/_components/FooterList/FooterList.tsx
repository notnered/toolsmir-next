import Link from 'next/link';
import { FooterElementsType } from '../Footer/Footer';

export default function FooterList({ list, title }: {list: FooterElementsType[], title: string}) {
    return (
        <>
            <ul className='w-full'>
                <li className='font-medium text-xl'>{title}</li>
                {list.map((element: FooterElementsType, index: number) => {
                    return (
                        <li
                            key={element.id}
                            className='hover:text-[#DA342C] transition-colors'
                        >
                            <Link href={element.link}>{element.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
