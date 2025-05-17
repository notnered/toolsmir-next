import Image from 'next/image';
import slidePic from '../../../../public/slide.png';

const brandsList = [
    {id: 0, picture: slidePic, name: 'Бренд'},
    {id: 1, picture: slidePic, name: 'Бренд'},
    {id: 2, picture: slidePic, name: 'Бренд'},
    {id: 3, picture: slidePic, name: 'Бренд'},
    {id: 4, picture: slidePic, name: 'Бренд'},
    {id: 5, picture: slidePic, name: 'Бренд'},
]

export default function CompaniesBlock() {
    return (
        <div className='my-4'>
            <div className='flex items-center gap-x-2.5 gap-y-1 flex-wrap'>
                <h1 className='text-3xl'>Более 100 проверенных брендов</h1>
                <button className='bg-[#DA342C] text-xl text-white py-0.5 px-3.5 rounded-md hover:saturate-110 transition-all cursor-pointer'>
                    Смотреть все
                </button>
            </div>
            <div>
                <div className='py-4 grid grid-cols-6 gap-4'>
                    {brandsList.slice(0, 6).map((brand, index) => {
                        return (
                            <div key={brand.id}>
                                <Image
                                    className='h-40 object-cover rounded-md'
                                    src={brand.picture.src}
                                    alt={`${brand.name}-${index}`}
                                    width={brand.picture.width}
                                    height={brand.picture.height}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
