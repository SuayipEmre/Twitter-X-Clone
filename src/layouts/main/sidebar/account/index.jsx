import { Popover, Transition } from '@headlessui/react'
import React from 'react'
import { useAccount } from '~/store/auth/hooks'
import { More } from './more'

export const Account = () => {

  const account = useAccount()

  return (
    <div className='mt-auto'>

      <Popover className='relative'>

        <Popover.Button className="my-3 p-3 rounded-full hover:bg-[#eff3f41a] outline-none w-full flex text-left items-center ">

          <img src={account.avatar} className='w-10 h-10 rounded-full' />

          <div className='mx-3 text-[15px] '>

            <h6 className='leading-[20px]font-bold'>{account.fullName}</h6>

            <div className='text-[#71767b] '>
              @{account.userName}
            </div>

          </div>
          <svg viewBox="0 0 24 24" className="text-[#e7e9ea] ml-auto" width={18.75}>
							<path
								fill="currentColor"
								d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
							/>
					</svg>
        </Popover.Button>

        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100l"
          leaveTo="transform opacity-0">

          <Popover.Panel className='absolute overflow-hidden py-3 bottom-[80px] w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-2xl'>
           {({close}) =>(
              <More  close={close}/>

           )}
          </Popover.Panel>
        </Transition>


      </Popover>

    </div>
  )
}
