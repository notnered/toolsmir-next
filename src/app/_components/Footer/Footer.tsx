import FooterList from '../FooterList/FooterList';

export type FooterElementsType = {
    id: number,
    link: string,
    name: string,
}

const footerElements: FooterElementsType[][] = [
    [
        {id: 0, link: '/payments', name: 'Реквизиты'},
        {id: 1, link: '/contact', name: 'Контакты'},
        {id: 2, link: '/vacancies', name: 'Вакансии'},
        {id: 3, link: '/about', name: 'О нас'},
    ],
    [
        {id: 4, link: '/tech-support', name: 'Техническая поддержка'},
        {id: 5, link: '/service-center', name: 'Сервисный центр'},
        {id: 6, link: '/brands', name: 'Производители'},
        {id: 7, link: '/sales', name: 'Акции'},
    ],
    [
        {id: 8, link: '/b2b/cabinet', name: 'Бизнес-кабинет'},
        {id: 9, link: '/b2b/suppliers', name: 'Поставщикам'},
        {id: 10, link: '/b2b/organizations', name: 'Организациям'},
        {id: 11, link: '/b2b/partners', name: 'Партнерам'},
    ]
]

export default function Footer() {
    return (
        <footer className='mt-4 bg-neutral-100 p-4 rounded-md'>
            <div className='flex gap-4'>
                <div className='w-full flex justify-between gap-4 text-lg'>
                    <FooterList title={'О компании'} list={footerElements[0]} />
                    <FooterList title={'Покупателям'} list={footerElements[1]} />
                    <FooterList title={'Компаниям'} list={footerElements[2]} />
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
