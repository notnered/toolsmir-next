import Image from 'next/image';
import slidePic from '../../../../public/slide.png';

export default function MainSlider() {
    return (
        <div className='flex justify-between gap-x-4 py-4'>
            <div className='w-full'>
                <Image
                    className='h-80 object-cover'
                    src={slidePic.src}
                    alt='Slide'
                    width={slidePic.width}
                    height={slidePic.height}
                />
            </div>
            <div className='w-full'>
                <Image
                    className='h-80 object-cover'
                    src={slidePic.src}
                    alt='Slide'
                    width={slidePic.width}
                    height={slidePic.height}
                />
            </div>
            <div className='w-full'>
                <Image
                    className='h-80 object-cover'
                    src={slidePic.src}
                    alt='Slide'
                    width={slidePic.width}
                    height={slidePic.height}
                />
            </div>
        </div>
    );
}
