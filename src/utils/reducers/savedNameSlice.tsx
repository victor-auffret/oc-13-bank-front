import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { isEmpty } from '..'

const savedNameSlice = createSlice({
 name: 'savedName',
 initialState: '',
 reducers: {
  setSavedName: (state: string, action: PayloadAction<string>) => {
   if (isEmpty(action.payload)) {
    return state
   }
   return action.payload
  },
 },
})

const { setSavedName } = savedNameSlice.actions
const savedNameReducer = savedNameSlice.reducer

export { savedNameReducer, setSavedName } 
