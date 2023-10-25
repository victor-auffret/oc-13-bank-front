import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { isEmpty } from '..'

import type { RootState } from "../store"

export interface IUser {
 email: string,
 firstName: string,
 lastName: string,
 createdAt: Date | string,
 updatedAt: Date | string,
 id: string
}

export interface IAuthSliceState {
 user: IUser | null,
 token: string | null
}

interface IAuthentificationResponse {
 token: string
}

const initialState: IAuthSliceState = {
 user: null,
 token: null
}

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  setToken: (state: IAuthSliceState, action: PayloadAction<IAuthentificationResponse>) => {
   if (!isEmpty(action.payload)) {
    state.token = action.payload.token
   }
   return state
  },
  setUser: (state: IAuthSliceState, action: PayloadAction<IUser>) => {
   if (!isEmpty(action.payload)) {
    state.user = {
     email: action.payload.email,
     firstName: action.payload.firstName,
     lastName: action.payload.lastName,
     createdAt: new Date(action.payload.createdAt),
     updatedAt: new Date(action.payload.updatedAt),
     id: action.payload.id,
    }
   }
   return state
  },
  logOut: (state: IAuthSliceState) => {
   state.user = null
   state.token = null
   return state
  }
 }
})

export const { setToken, setUser, logOut } = authSlice.actions

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token

export default authSlice.reducer
