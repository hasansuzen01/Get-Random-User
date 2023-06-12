import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const userListSlice = createSlice({
  name: 'userlist',
  initialState,
  reducers: {
    getUser: (state,action) =>{
      state.users = action.payload
    }
   
  },
})


export const { getUser} = userListSlice.actions

export default userListSlice.reducer