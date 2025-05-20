import pic from '../../../../public/slide.png';
import ProductCard from '../ProductCard/ProductCard';
import pic2 from '../../../../public/catalog/placeholder0.jpg';

export type productType = {
    id: number;
    code: string;
    image: string;
    rating: number;
    reviews: number;
    title: string;
    availability: number;
    price: {
        amount: number;
        discount?: number;
    };
};

const productsArray: productType[] = [
    {
        id: 1,
        code: '1532432',
        image: pic.src,
        rating: 5,
        reviews: 354,
        title: 'Аккумуляторная угловая шлифмашина Ryobi ONE+ R18AG-0 5133001903',
        availability: 2,
        price: {
            amount: 34990,
            discount: 20,
        },
    },
    {
        id: 2,
        code: '1543712',
        image: pic2.src,
        rating: 4.5,
        reviews: 12,
        title: 'Гвоздезабиватель Ryobi R16GN18-0 ONE+ 5133005137',
        availability: 0,
        price: {
            amount: 5499,
            discount: 20,
        },
    },
    {
        id: 3,
        code: '1512312',
        image: pic.src,
        rating: 4,
        reviews: 2,
        title: 'Золотая ложка лол',
        availability: 99,
        price: {
            amount: 5699,
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
