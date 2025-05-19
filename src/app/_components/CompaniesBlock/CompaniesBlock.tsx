import Image from 'next/image';
// import slidePic from '../../../../public/slide.png';

import brandId0 from '../../../../public/brands/aeg.webp';
import brandId1 from '../../../../public/brands/atlet.webp';
import brandId2 from '../../../../public/brands/dca.webp';
import brandId3 from '../../../../public/brands/fubag.webp';
import brandId4 from '../../../../public/brands/gigant.webp';
import brandId5 from '../../../../public/brands/keyang.webp';

const brandsList = [
    {id: 0, picture: brandId0, name: 'AEG'},
    {id: 1, picture: brandId1, name: 'ATLET'},
    {id: 2, picture: brandId2, name: 'DCA'},
    {id: 3, picture: brandId3, name: 'FUBAG'},
    {id: 4, picture: brandId4, name: 'GIGANT'},
    {id: 5, picture: brandId5, name: 'KEYANG'},
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
                            <div key={brand.id} className='h-full'>
                                <Image
                                    className='object-cover rounded-md'
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
