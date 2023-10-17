import { PayloadAction, createSlice } from '@reduxjs/toolkit'
//import { setCredentials, logOut, IAuthSliceState } from "./authSlice"
import { isEmpty } from '..'
/*
import { BaseQueryApi, BaseQueryFn, FetchArgs, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
//

import type { RootState } from "../store"

const baseQuery = fetchBaseQuery({
 baseUrl: 'http://localhost:3000',
 credentials: "include",
 prepareHeaders: (headers: Headers, { getState }) => {
  const state: RootState = (getState() as RootState)
  const token = state.auth.token
  if (token) {
   headers.set("authorization", `Bearer ${token}`)
  }
  return headers
 }
})

const baseQueryRefresh: BaseQueryFn = async (args: string | FetchArgs, api: BaseQueryApi, options: {}) => {
 let results = await baseQuery(args, api, options)
 if (results?.error?.status === 403) {
  const refreshToken = await baseQuery("/refresh", api, options)
  if (refreshToken?.data) {
   const state: RootState = (api.getState() as RootState)
   const user = state.auth.user
   api.dispatch(setCredentials({ ...refreshToken.data, user } as IAuthSliceState))
   results = await baseQuery(args, api, options)
  } else {
   api.dispatch(logOut())
  }
 }
}

const apiSlice = createApi({
 baseQuery: (baseQueryRefresh as BaseQueryFn),
 endpoints: builder => ({})
})
*/

interface IApiSliceState {

}

const initialState: IApiSliceState = {

}

const apiSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  login: (state: IApiSliceState, action: PayloadAction<IApiSliceState>) => {
   if (isEmpty(action.payload)) {
    return state
   }
   return state
  }
 }
})

export const { login } = apiSlice.actions

//export const selectCurrentUser = (state: { auth: IAuthSliceState }) => state.auth.user

export default apiSlice.reducer
