import Image from 'next/image';
// import slidePic from '../../../../public/slide.png';

import pictureId0 from '../../../../public/catalog/pila-tsepnaya-akkumulyatornaya-zitrek-greensaw-12-12v-2-0ach-li-ion-akkum-2sht-zu-085-4449-15794331.webp';
import pictureId1 from '../../../../public/catalog/akkumulyatornyj-lentochnyj-shurupovert-keyang-sd20bl-13122503.webp'
import pictureId2 from '../../../../public/catalog/gvozdezabivatel-ryobi-r16gn18-0-one-5133005137-13620181.webp'
import pictureId3 from '../../../../public/catalog/nabor-tortsevyh-golovok-i-prinadlezhnostej-94-predmeta-rockforce-rf-4941-5-1179678.webp'
import pictureId4 from '../../../../public/catalog/konditsioner-mobilnyj-linea-bpac-07-ln-n6-ballu-ns-1694727-18492564.webp'
import pictureId5 from '../../../../public/catalog/nabor-kombinirovannyh-klyuchej-forsage-f-5261p36-26-pr-7028-1890182.webp'


const salesProducts = [
    {id: 0, picture: pictureId0, name: 'Пила цепная аккумуляторная Zitrek GreenSaw 12 12В,2,0Ач Li-ion аккум. 2шт, ЗУ 085-4449', price: 23999, oldprice: 29999},
    {id: 1, picture: pictureId1, name: 'Аккумуляторный ленточный шуруповерт KEYANG SD20BL', price: 7149, oldprice: 8949},
    {id: 2, picture: pictureId2, name: 'Гвоздезабиватель Ryobi R16GN18-0 ONE+ 5133005137', price: 4399, oldprice: 5499},
    {id: 3, picture: pictureId3, name: 'Набор торцевых головок и вставок Rockforce 1/2, 1/4DR 6-гранных 94 предмета RF-4941-5(4281)', price: 1599, oldprice: 1999},
    {id: 4, picture: pictureId4, name: 'Кондиционер мобильный Linea BPAC-07 LN/N6 Ballu НС-1694727', price: 27999, oldprice: 34999},
    {id: 5, picture: pictureId5, name: 'Набор ключей комбинированных Forsage 26пр. F-5261P36(7028)', price: 2199, oldprice: 2749},
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
                        <button className='bg-primary text-xl py-0.5 text-white px-3.5 rounded-md hover:saturate-110 transition-all cursor-pointer'>
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
                                            <span className='line-through '>{product.oldprice.toLocaleString()}₽</span>
                                            <div className='bg-green-600 ml-1.5 px-1.5 rounded-md leading-6 text-white'>
                                                -20%
                                            </div>
                                        </div>
                                        <p className='font-semibold text-2xl'>{product.price.toLocaleString()}₽</p>
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
