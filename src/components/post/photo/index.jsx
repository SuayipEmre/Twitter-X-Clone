import React from 'react'

export const Photo = ({ photos }) => {


    switch (photos?.length) {
        case 1:
            return (
                <div className='mt-3'>
                    <img className='border max-h-[510px] object-cover border-[color:var(--background-third)] rounded-2xl' src={photos[0]} alt='' />
                </div>
            )



        case 2:

            return (
                <div className='mt-3 grid grid-cols-2 border  border-[color:var(--background-third)] overflow-hidden gap-0.5 h-[288px]'>
                    <img src={photos[0]} className=' h-full w-full object-cover  rounded-2xl' alt='' />
                    <img src={photos[1]} className=' h-full w-full object-cover rounded-2xl' alt='' />
                </div>
            )



        case 3:
            return (
                <div className='mt-3 grid grid-cols-2 border  border-[color:var(--background-third)] overflow-hidden gap-0.5 h-[288px]'>
                    <img src={photos[0]} className=' h-full w-full object-cover  rounded-2xl' alt='' />
                    <div className='h-full flex flex-col gap-0.5'>
                        <div className='flex-shrink-0 flex-1 relative'>
                            <img src={photos[1]} className='h-full absolute inset-0 flex-shrink-0 w-full object-cover rounded-2xl' alt='' />
                        </div>
                        <div className='flex-shrink-0 flex-1 relative'>
                        <img src={photos[1]} className='h-full w-full absolute inset-0 flex-shrink-0  object-cover rounded-2xl' alt='' />

                        </div>
                    </div>
                </div>
            )



        case 4:
            return (
                <div className='mt-3 grid grid-cols-2 border  border-[color:var(--background-third)] overflow-hidden gap-0.5 h-[256px]'>
                    <img src={photos[0]} className=' h-[141px] w-full object-cover  rounded-xl' alt='' />
                    <img src={photos[1]} className=' h-[141px] w-full object-cover rounded-xl' alt='' />
                    <img src={photos[2]} className=' h-[141px] w-full object-cover rounded-xl' alt='' />
                    <img src={photos[3]} className=' h-[141px] w-full object-cover rounded-xl' alt='' />
                </div>
            )





    }

}
