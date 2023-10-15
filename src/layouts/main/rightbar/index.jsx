import React from 'react'
import { Search } from './search'
import { Premium } from '~/layouts/main/rightbar/premium'
import { Topics } from '~/layouts/main/rightbar/topics'
import { WhoFollow } from './who-follow'
import { Footer } from './footer'

export const RightBar = () => {
  return (
    <aside className='w-[350px] mr-2.5'>
      <Search />
      <Premium />
      <Topics />
      <WhoFollow />
      <Footer />
    </aside>
  )
}
