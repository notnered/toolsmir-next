import Logo from "../Logo/Logo";

export default function Footer(){
    return (
        <footer className="my-4 bg-neutral-100 p-4 rounded-md">
            <div className="flex gap-4">
                <div className="w-full flex justify-between gap-4 text-lg">
                    <ul className="w-full">
                        <li className="font-medium text-xl">О компании</li>
                        <li>Реквизиты</li>
                        <li>Контакты</li>
                        <li>Вакансии</li>
                        <li>О нас</li>
                    </ul>
                    <ul className="w-full">
                        <li className="font-medium text-xl">Покупателям</li>
                        <li>Техническая поддержка</li>
                        <li>Сервисный центр</li>
                        <li>Производители</li>
                        <li>Акции</li>
                    </ul>
                    <ul className="w-full">
                        <li className="font-medium text-xl">Компаниям</li>
                        <li>Бизнес кабинет</li>
                        <li>Поставщикам</li>
                        <li>Организациям</li>
                        <li>Партнерам</li>
                    </ul>
                </div>
                <div className="w-full flex justify-end text-end text-lg">
                    <div>
                        <p className="text-xl"><span className="font-medium">Мир инструмента</span> (С) 2025</p>
                        <p>График работы: 9:00-19:00</p>
                        <p>+7(905)916-70-50</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}