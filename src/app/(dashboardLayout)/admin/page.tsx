import UserCard from '@/components/UserCard';
import React from 'react';

const AdminPage = () => {
    return (
        <div className='p-4 flex gap-4 flex-col md:flex-row'>

            {/* left */}
            <div className="w-full lg:w-2/3">
         <div className='flex gap-4 justify-between flex-1 flex-wrap'>
         <UserCard type="student"></UserCard>
        <UserCard type="teacher"></UserCard>
        <UserCard type="parent"></UserCard>
        <UserCard type="staff"></UserCard>
         </div>
            </div>
      
            {/* Right */}
            <div className="w-full lg:w-1/3">R</div>
            
        </div>
    );
};

export default AdminPage;