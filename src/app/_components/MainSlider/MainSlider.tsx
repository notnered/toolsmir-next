import Image from 'next/image';
import slidePic from '../../../../public/slide.png';

export default function MainSlider() {
    return (
        // slider
        <div>
            <div className='flex justify-between gap-x-4 py-4'>
                <div className='w-full'>
                    <Image
                        className='h-80 object-cover'
                        title='slide'
                        src={slidePic.src}
                        alt='Slide'
                        width={slidePic.width}
                        height={slidePic.height}
                    />
                </div>
                <div className='w-full'>
                    <Image
                        className='h-80 object-cover'
                        title='slide'
                        src={slidePic.src}
                        alt='Slide'
                        width={slidePic.width}
                        height={slidePic.height}
                    />
                </div>
                <div className='w-full'>
                    <Image
                        className='h-80 object-cover'
                        title='slide'
                        src={slidePic.src}
                        alt='Slide'
                        width={slidePic.width}
                        height={slidePic.height}
                    />
                </div>
            </div>
            {/* icons */}
            <div className='flex justify-center gap-x-1'>
                <div className='size-2.5 rounded-full bg-gray-900/85 hover:bg-gray-900 transition-colors'></div>
                <div className='size-2.5 rounded-full bg-gray-900/85 hover:bg-gray-900 transition-colors'></div>
                <div className='size-2.5 rounded-full bg-gray-900/85 hover:bg-gray-900 transition-colors'></div>
            </div>
        </div>
    );
}
