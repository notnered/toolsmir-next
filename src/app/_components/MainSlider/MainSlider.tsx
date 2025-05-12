import Image from 'next/image';
import slidePic from '../../../../public/slide.png';

const slides = [
    {id: 0, picture: slidePic, name: 'Слайдер'},
    {id: 1, picture: slidePic, name: 'Слайдер'},
    {id: 2, picture: slidePic, name: 'Слайдер'},
    // {id: 3, picture: slidePic, name: 'Слайдер'},
]

export default function MainSlider() {
    return (
        <div>
            <div className='flex overflow-x-hidden gap-x-4 py-4'>
                {slides.slice(0, 5).map((slide, index) => {
                    return (
                        <div key={slide.id} className='w-full min-w-1/3'>
                            <Image
                                className='h-80 object-cover rounded-md'
                                title={slide.name}
                                src={slide.picture.src}
                                alt={slide.name}
                                width={slide.picture.width}
                                height={slide.picture.height}
                            />
                        </div>
                    )
                })}
            </div>
            {/* icons */}
            <div className='flex justify-center gap-x-1'>
                {Array(slides.slice(0, 5).length).fill('').map((element, index) => {
                    return (
                        <div key={index} className='size-2.5 rounded-full bg-gray-900/85 hover:bg-gray-900 transition-colors cursor-pointer'></div>
                    )
                })}
            </div>
        </div>
    );
}
