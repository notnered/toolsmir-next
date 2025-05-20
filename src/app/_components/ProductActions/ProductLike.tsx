'use client';
import { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

export default function ProductLike() {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className='cursor-pointer' onClick={() => setIsLiked(!isLiked)}>
            {isLiked ? <FaHeart /> : <FaRegHeart />}
        </div>
    );
}
