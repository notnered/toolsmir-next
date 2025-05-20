import pic from '../../../../public/slide.png';
import ProductCard from '../ProductCard/ProductCard';
import pic2 from '../../../../public/catalog/placeholder0.jpg';

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
        image: pic.src,
        name: 'Аккумуляторная угловая шлифмашина Ryobi ONE+ R18AG-0 5133001903',
        availability: 2,
        rating: {
            starsCount: 5,
            reviewsCount: 354,
        },
        price: {
            basePrice: 34990,
            discountPercentage: 20,
        },
    },
    {
        id: 2,
        image: pic2.src,
        name: 'Гвоздезабиватель Ryobi R16GN18-0 ONE+ 5133005137',
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
        image: pic.src,
        name: 'Золотая ложка лол',
        availability: 99,
        rating: {
            starsCount: 4,
            reviewsCount: 2,
        },
        price: {
            basePrice: 5699,
        },
    },
];

export default function CatalogBlock() {
    return (
        <div className='my-4'>
            <div className='flex gap-4'>
                <div className='w-1/6'>
                    <div className='p-4 flex rounded-md shadow-md shadow-neutral-300 inset-shadow-sm'>
                        filters
                    </div>
                </div>

                <div className='w-5/6'>
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
