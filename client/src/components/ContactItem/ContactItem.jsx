import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { RxCrossCircled } from "react-icons/rx";
import Tag from '../Tag/Tag';

const ContactItem = ({ user }) => {
    console.log('User', user)
    return (
        <div className='bg-primary-200 rounded-md'>
            {/* user section */}
            < div className='flex relative p-4'>
                <button className='absolute top-2.5 right-6'>
                    <RxCrossCircled className="h-6 w-6" />
                </button>
                {/* avatar section */}
                < img src={user?.avatar} alt='avatar' className='h-14 w-14 rounded-full' />
                {/* detail information section */}
                <div className='ml-2'>
                    <div className=' font-medium text-base'>
                        <h4>{user?.firstName} {user?.lastName}</h4>
                        <h4>{user?.email}</h4>
                    </div>
                    <div className=' flex gap-2 flex-wrap mt-5'>
                        {user?.tags.map(tag => (<Tag key={tag} text={tag} />))}
                    </div>
                </div>

            </div>
        </div>)


}
export default ContactItem