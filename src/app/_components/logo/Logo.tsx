import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../../../../public/logo.png';

export default function Logo(){
    return (
            <div className="flex justify-center py-2">
                <Link href={'/'}>
                    <Image
                        src={logoImage.src} 
                        className="w-48 hover:saturate-110 transition-all"
                        alt="Мир-Инструмента" 
                        width={logoImage.width} 
                        height={logoImage.height} 
                    />
                </Link>
            </div>
    )
}