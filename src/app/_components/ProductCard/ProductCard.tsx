import Image from 'next/image';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';

import { productType } from '../CatalogBlock/CatalogBlock';
import ProductLike from '../ProductActions/ProductLike';
import ProductComparison from '../ProductActions/ProductComparison';

export default function ProductCard({
    productInfo,
}: {
    productInfo: productType;
}) {
    const fullStars = Math.floor(productInfo.rating.starsCount ?? 0);
    const emptyStars = 5 - fullStars;

    return (
        <div className='p-4 h-full flex flex-col rounded-md shadow-md shadow-neutral-300 inset-shadow-sm'>
            <div className='flex items-center justify-between pb-2'>
                <div className='text-sm text-neutral-700'>
                    Арт:{productInfo.id}
                </div>
                {/* actions */}
                <div className='flex text-lg items-center text-neutral-700 gap-2'>
                    <ProductLike />
                    <ProductComparison />
                </div>
            </div>
            <div>
                <Image
                    className='object-cover h-56 rounded-md'
                    src={productInfo.image}
                    alt='Товар'
                    width={1024}
                    height={768}
                />
            </div>
            <div className='flex pt-1 items-center'>
                <div className='flex text-xl items-center'>
                    {Array(fullStars)
                        .fill('')
                        .map((element, index) => (
                            <IoMdStar key={`${index}-full`} />
                        ))}
                    {Array(emptyStars)
                        .fill('')
                        .map((element, index) => (
                            <IoMdStarOutline key={`${index}-empty`} />
                        ))}
                </div>
                <span className='ml-0.5 text-sm mt-1'>
                    {productInfo.rating.reviewsCount}
                </span>
            </div>
            <div className='pb-1'>
                <p className='text-lg line-clamp-3'>{productInfo.name}</p>
            </div>
            <div className='text-green-600 font-medium pb-1'>
                {productInfo.availability > 0 ? (
                    <div className='text-green-600 font-medium pb-1'>
                        В наличии {productInfo.availability} шт.
                    </div>
                ) : (
                    <div className='text-primary/90 font-medium pb-1'>
                        Нет в наличии
                    </div>
                )}
            </div>
            <div className='mt-auto'>
                <div className='flex items-center gap-1.5'>
                    {productInfo.price.discountPercentage && (
                        <>
                            <span className='line-through'>
                                {productInfo.price.basePrice}
                            </span>
                            <div className='bg-green-600 py-0.5 px-1.5 rounded-md text-white'>
                                -{productInfo.price.discountPercentage}%
                            </div>
                        </>
                    )}
                </div>
                <div className='text-2xl font-bold pb-2'>
                    {productInfo.price.discountPercentage ? (
                        <>
                            {(
                                productInfo.price.basePrice -
                                (productInfo.price.basePrice *
                                    productInfo.price.discountPercentage) /
                                    100
                            ).toFixed(0)}
                        </>
                    ) : (
                        <>{productInfo.price.basePrice}</>
                    )}
                    р
                </div>
                <div>
                    {productInfo.availability > 0 ? (
                        <button className='bg-primary px-3 py-1.5 text-white rounded-md text-lg min-w-full hover:saturate-110 transition-all cursor-pointer'>
                            В корзину
                        </button>
                    ) : (
                        <button
                            disabled
                            className='bg-primary/85 px-3 py-1.5 text-white rounded-md text-lg min-w-full'
                        >
                            Недоступно
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
