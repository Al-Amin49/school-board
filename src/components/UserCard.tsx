import Image from 'next/image';
import React from 'react';

const UserCard = ({type}:{type:string}) => {
    return (
        <div className='rounded-2xl odd:bg-royalPurple even:bg-goldenYellow p-4 min-w-[130px] ' >
            <div className="flex justify-between">
                <span>2024/25</span>
                <Image src="/more.png" alt="" width={20} height={20} />              
            </div>
            <h1>1,2,3,4</h1>
            <h2>{type}</h2>
        </div>
    );
};

export default UserCard;