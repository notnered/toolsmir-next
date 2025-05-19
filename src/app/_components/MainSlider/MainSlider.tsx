import Image from 'next/image';
// import slidePic from '../../../../public/slide.png';

import slideId0 from '../../../../public/slider/newslide0.png'
import slideId1 from '../../../../public/slider/newslide1.png'
import slideId2 from '../../../../public/slider/newslide2.png'

const slides = [
    {id: 0, picture: slideId0, name: 'Слайдер'},
    {id: 1, picture: slideId1, name: 'Слайдер'},
    {id: 2, picture: slideId2, name: 'Слайдер'},
    // {id: 3, picture: slidePic, name: 'Слайдер'},
]

export default function MainSlider() {
    return (
        <div>
            <div className='flex overflow-x-hidden gap-x-4 py-4'>
                {slides.slice(0, 5).map((slide, index) => {
                    return (
                        <div key={slide.id} className='w-full h-88'>
                            <Image
                                className='object-cover h-full object-[0%_20%] rounded-md'
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
                        <div key={index} className='size-2.5 rounded-full bg-neutral-500 hover:bg-neutral-700 transition-colors cursor-pointer'></div>
                    )
                })}
            </div>
        </div>
    );
}
