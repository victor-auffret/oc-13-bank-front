import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { isEmpty } from '..'

import type { RootState } from "../store"

interface IUser {
 firstName: string,
 lastName: string
}

export interface IAuthSliceState {
 user: IUser | null,
 token: string | null
}

const initialState: IAuthSliceState = {
 user: null,
 token: null
}

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  setCredentials: (state: IAuthSliceState, action: PayloadAction<IAuthSliceState>) => {
   if (isEmpty(action.payload)) {
    return state
   }
   state.user = action.payload.user
   state.token = action.payload.token
   return state
  },
  logOut: (state: IAuthSliceState) => {
   state.user = null
   state.token = null
   return state
  }
 }
})

export const { setCredentials, logOut } = authSlice.actions

export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token

export default authSlice.reducer
