import React from 'react'
import { Button } from '../../../../components/button'

export const Premium = () => {
  return (
    <section className='bg-[color:var(--background-secondary)] mb-4 rounded-2xl border-[color:var(--background-secondary)] py-4 px-4 flex flex-col gap-2.5 '>
        <h6 className='text-xl font-extrabold leading-6'>Premium'a Abone Ol</h6>
        <p className='leading-5 text-[15px] font-bold '>Yeni çzellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan</p>
       <div className='self-start'>
            <Button>Abone ol</Button>
       </div>
    </section>
  )
}
