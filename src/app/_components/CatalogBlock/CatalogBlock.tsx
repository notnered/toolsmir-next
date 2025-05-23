import pic from '../../../../public/slide.png';
import ProductCard from '../ProductCard/ProductCard';
import pic2 from '../../../../public/catalog/placeholder0.jpg';
import pic3 from '../../../../public/catalog/placeholder1.jpg'
import pic4 from '../../../../public/catalog/placeholder2.jpg'
import pic5 from '../../../../public/catalog/placeholder3.jpg'
import CatalogFiltersBlock from '../CatalogFiltersBlock/CatalogFiltersBlock';

export type productType = {
    id: number;
    image: string;
    name: string;
    availability: number;
    rating: {
        starsCount?: number;
        reviewsCount?: number;
    };
    price: {
        basePrice: number;
        discountPercentage?: number;
    };
};

const productsArray: productType[] = [
    {
        id: 1,
        image: pic3.src,
        name: 'Набор ключей',
        availability: 11,
        rating: {
            starsCount: 5,
            reviewsCount: 132,
        },
        price: {
            basePrice: 34990,
            discountPercentage: 20,
        },
    },
    {
        id: 2,
        image: pic2.src,
        name: 'Компрессор AURORA',
        availability: 0,
        rating: {
            starsCount: 4.5,
            reviewsCount: 12,
        },
        price: {
            basePrice: 5499,
            discountPercentage: 20,
        },
    },
    {
        id: 3,
        image: pic5.src,
        name: 'Сварочный полуавтомат AURORA',
        availability: 23,
        rating: {
            starsCount: 5,
            reviewsCount: 9,
        },
        price: {
            basePrice: 13149,
        },
    },
    {
        id: 4,
        image: pic4.src,
        name: 'Электронный триммер',
        availability: 9,
        rating: {
            starsCount: 3,
            reviewsCount: 6,
        },
        price: {
            basePrice: 10999,
        },
    },
    {
        id: 5,
        image: pic3.src,
        name: 'Набор ключей',
        availability: 11,
        rating: {
            starsCount: 5,
            reviewsCount: 132,
        },
        price: {
            basePrice: 34990,
            discountPercentage: 20,
        },
    },
    {
        id: 6,
        image: pic2.src,
        name: 'Компрессор AURORA',
        availability: 0,
        rating: {
            starsCount: 4.5,
            reviewsCount: 12,
        },
        price: {
            basePrice: 5499,
            discountPercentage: 20,
        },
    },
    {
        id: 7,
        image: pic5.src,
        name: 'Сварочный полуавтомат AURORA',
        availability: 23,
        rating: {
            starsCount: 5,
            reviewsCount: 9,
        },
        price: {
            basePrice: 13149,
        },
    },
    {
        id: 8,
        image: pic4.src,
        name: 'Электронный триммер',
        availability: 9,
        rating: {
            starsCount: 3,
            reviewsCount: 6,
        },
        price: {
            basePrice: 10999,
        },
    },
];

export default function CatalogBlock() {
    return (
        <div className='my-4'>
            <div className='flex gap-4'>
                <div className='w-1/5'>
                    <div className='p-4 flex flex-col rounded-md shadow-md shadow-neutral-300 inset-shadow-sm'>
                        <CatalogFiltersBlock />
                    </div>
                </div>

                <div className='w-4/5'>
                    <div className='grid grid-cols-4 h-full gap-4'>
                        {productsArray.map((product, index) => {
                            return (
                                <div key={index}>
                                    <ProductCard productInfo={product} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
