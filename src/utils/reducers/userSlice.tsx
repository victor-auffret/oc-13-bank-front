import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { isEmpty } from '..'

interface IUser {
 firstName: string,
 lastName: string
}

const initialState: IUser = {
 firstName: "",
 lastName: ""
}

const UserSlice = createSlice({
 name: 'savedName',
 initialState,
 reducers: {
  setUser: (state: any, action: PayloadAction<IUser>) => {
   if (isEmpty(action.payload)) {
    return state
   }
   return action.payload
  }
 },
})

const { setUser } = UserSlice.actions
const userReducer = UserSlice.reducer

export { userReducer, setUser } 
