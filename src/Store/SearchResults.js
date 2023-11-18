// reducers/searchReducer.js
import { createSlice } from '@reduxjs/toolkit';

const searchResults = createSlice({
  name: 'search',
  initialState: '',
  reducers: {
    setSearchQuery: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSearchQuery } = searchResults.actions;
export default searchResults.reducer;
