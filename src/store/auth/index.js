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