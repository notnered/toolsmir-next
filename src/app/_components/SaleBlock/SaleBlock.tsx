import Image from 'next/image';
import slidePic from '../../../../public/slide.png';

const salesProducts = [
    {id: 0, picture: slidePic, name: 'Пила цепная аккумуляторная Zitrek GreenSaw 12 12В,2,0Ач Li-ion аккум. 2шт, ЗУ 085-4449'},
    {id: 1, picture: slidePic, name: 'Аккумуляторный ленточный шуруповерт KEYANG SD20BL'},
    {id: 2, picture: slidePic, name: 'Гвоздезабиватель Ryobi R16GN18-0 ONE+ 5133005137'},
    {id: 3, picture: slidePic, name: 'Набор торцевых головок и вставок Rockforce 1/2, 1/4DR 6-гранных 94 предмета RF-4941-5(4281)'},
    {id: 4, picture: slidePic, name: 'Кондиционер мобильный Linea BPAC-07 LN/N6 Ballu НС-1694727'},
    {id: 5, picture: slidePic, name: 'Набор ключей комбинированных Forsage 26пр. F-5261P36(7028)'},
]

export default function SaleBlock() {
    return (
        <div className='my-4'>
            <div className='bg-neutral-100 p-4 rounded-md'>
                <div>
                    <div>
                        <h2 className='text-lg'>7 апреля - 31 мая</h2>
                    </div>
                    <div className='flex gap-x-2.5 items-center flex-wrap gap-y-1'>
                        <h1 className='text-3xl font-medium'>
                            Волна выгоды: большая распродажа
                        </h1>
                        <button className='bg-[#DA342C] text-xl py-0.5 text-white px-3.5 rounded-md hover:saturate-110 transition-all cursor-pointer'>
                            Смотреть
                        </button>
                    </div>
                </div>
                <div className='py-4 grid grid-cols-6 gap-4'>
                    {salesProducts.map((product, index) => {{
                        return (
                            <div key={product.id} className='w-full shadow-md shadow-neutral-300 inset-shadow-sm'>
                                <Image
                                    className='h-56 object-cover rounded-t-md'
                                    title={product.name}
                                    src={product.picture.src}
                                    alt={product.name}
                                    width={product.picture.width}
                                    height={product.picture.height}
                                />
                                <div className='p-3 rounded-b-md w-full flex flex-col bg-white text-lg'>
                                    <p className='line-clamp-3 leading-6'>{product.name}</p>
                                    {/* price */}
                                    <div>
                                        <div className='flex items-center'>
                                            <span className='line-through '>12,499₽</span>
                                            <div className='bg-green-600 ml-1.5 px-1.5 rounded-md leading-6 text-white'>
                                                -20%
                                            </div>
                                        </div>
                                        <p className='font-semibold text-2xl'>9,999₽</p>
                                    </div>
                                </div>
                            </div> 
                        )
                    }})}
                </div>
            </div>
        </div>
    );
}
