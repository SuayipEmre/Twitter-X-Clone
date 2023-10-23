import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from './sidebar'
import { RightBar } from './rightbar'
import { Modal } from '~/modals'
import { useModal } from '~/store/modal/hooks'
import { useAppearance } from '~/store/appearance/hooks'

export const MainLayout = () => {
  const modal = useModal()

  const appearance = useAppearance()



  useEffect(() => {

    document.documentElement.style.setProperty('--background-primary', appearance.backgroundColor.primary)
    document.documentElement.style.setProperty('--background-primary-alpha', appearance.backgroundColor.primaryAlpha)
    document.documentElement.style.setProperty('--background-secondary', appearance.backgroundColor.secondary)
    document.documentElement.style.setProperty('--background-third', appearance.backgroundColor.third)
    document.documentElement.style.setProperty('--background-modal', appearance.backgroundColor.modal)

    document.documentElement.style.setProperty('--color-primary', appearance.color.primary)
    document.documentElement.style.setProperty('--color-secondary', appearance.color.secondary)
    document.documentElement.style.setProperty('--color-base', appearance.color.base)
    document.documentElement.style.setProperty('--color-base-secondary', appearance.color.baseSecondary)
    document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow)

    document.documentElement.style.setProperty('--box-shadow', appearance.boxShadow)

    document.documentElement.style.setProperty('--font-size', appearance.fontSize + 'px')

  }, [appearance])
  return (
    <div className='w-[1265px] mx-auto flex'>
      {
        modal && <Modal />
      }
      <SideBar />
      <main className='flex-1 flex gap-[30px]'>
        <main className='flex-1 max-w-[600px] border-x border-[color:var(--background-third)]'>
          <Outlet />

        </main>
        <RightBar />
      </main>
    </div>
  )
}


/*
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentAccount : {
        id: 1,
        avatar : 'https://lh3.googleusercontent.com/a/ACg8ocIKZnVIhIr0tihPtzGfH0QPDo_6TKB_UOuGwD_Ugv58SdI=s288-c-no',
        fullName : 'softDev',
        userName :'suayipemre'


    },
   
    accounts : [

        {
            id: 1,
            avatar : 'https://lh3.googleusercontent.com/a/ACg8ocIKZnVIhIr0tihPtzGfH0QPDo_6TKB_UOuGwD_Ugv58SdI=s288-c-no',
            fullName : 'softDev',
            userName :'suayipemre'
    
    
        },

          {
            id: 2,
            avatar : 'https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
            fullName : 'rider',
            userName :'r6-rider'
    
    
        },
    ]
}

export const auth = createSlice({
    name :'auth',
    initialState,

    reducers : {
        _addAccounts : (state, action) => {
          state.accounts.push(action.payload)
        },

        _removeAccounts : (state, action) => {
            state.accounts  = state.accounts.filter(account=> account.id !== action.payload)

            if(state.currentAccount && action.payload == state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount : (state ,action) => {
        state.currentAccount = action.payload
        }
    }
})

export const{_addAccounts, _removeAccounts, _setCurrentAccount} = auth.actions
export default auth.reducer




*/