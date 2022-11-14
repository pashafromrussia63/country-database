import { createSlice } from '@reduxjs/toolkit'

const initialState = 'dark';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action) {
        console.log('setTheme', state, action); 
        console.log(action.payload);
        return action.payload;
    },
  },
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer