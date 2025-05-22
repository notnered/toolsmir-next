export default function AboutBlock() {
    return (
        <div className='my-4'>
            <h1 className='text-3xl font-bold mb-4 text-center'>О компании</h1>

            <p className='text-lg mb-4'>
                <strong>«Мир инструмента»</strong> — это надежный магазин в
                Новокузнецке, где вы найдете всё для дома, сада, строительства и
                ремонта. Мы предлагаем широкий выбор профессионального и
                бытового инструмента от известных производителей.
            </p>

            <div>
                <h2 className='text-2xl font-semibold mt-8 mb-4'>
                    Наши магазины
                </h2>
                <ul className='list-disc pl-4 mb-4 space-y-2'>
                    <li>
                        📍 <span className="font-medium">пр. Октябрьский, 58</span> — тел.
                        <a
                            href='tel:+73843715017'
                            className='text-primary hover:underline'
                        >
                            +7(3843)71-50-17
                        </a>
                    </li>
                    <li>
                        📍 <span className="font-medium">ул. Транспортная, 7</span> — тел.
                        <a
                            href='tel:+73843742673'
                            className='text-primary hover:underline'
                        >
                            +7(3843)74-26-73
                        </a>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col'>
                <h2 className='text-2xl font-semibold mb-4'>
                    Что мы предлагаем
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <h3 className="text-xl font-semibold">🔧 Бензоинструмент</h3>
                        <p className='mb-4'>
                            Для сада, огорода и лесозаготовки:
                            <span>STIHL, Campion, Huter, Carver</span>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">🔌 Электроинструмент</h3>
                        <p className='mb-4'>
                            Для дома и профессионального использования:
                            <span>Ресанта, Makita, Интерскол, Rebir, AEG</span>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">🔥 Сварочное оборудование</h3>
                        <p className='mb-4'>
                            Сварочные аппараты и расходные материалы:
                            <span>Аврора, Ресанта</span>
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">💨 Компрессоры и пневмоинструмент</h3>
                        <p className='mb-4'>
                            Бытовые и профессиональные модели, а также оснастка
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">⚙️ Запчасти</h3>
                        <p className='mb-4'>Ко всем видам бензоинструмента</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">🛠 Ручной инструмент и расходники</h3>
                        <p className='mb-4'>
                            Садовый инвентарь, метизы, шлифматериалы, режущий
                            инструмент, измерительное и гидравлическое
                            оборудование
                        </p>
                    </div>

                    <div></div>
                </div>

                <div className="my-4">
                    <h2 className='text-2xl font-semibold mb-4'>
                        Почему выбирают нас
                    </h2>
                    <ul className='list-disc pl-4 space-y-2 text-lg'>
                        <li>
                            ✔ Широкий ассортимент — от мелочей до сложного
                            оборудования
                        </li>
                        <li>
                            ✔ Проверенные бренды — только надёжные производители
                        </li>
                        <li>
                            ✔ Профессиональные консультации — наши сотрудники
                            знают толк в инструменте
                        </li>
                        <li>
                            ✔ Доступные цены — для частных клиентов и
                            организаций
                        </li>
                        <li>✔ Наличие на складе — без долгого ожидания</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
