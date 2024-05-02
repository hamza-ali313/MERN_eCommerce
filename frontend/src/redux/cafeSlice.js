import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk(
    'cafe', 
    async (_, { dispatch, rejectWithValue }) => {
      try {
        const response = await fetch('https://node-app.demowebapp.digital/api/cafe');
        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
const cafeSlice = createSlice({
    name: 'cafe',
    initialState: {
      data: [],
      loading: false,
      error: null,
    },
    // extraReducers: {
    //   fetchDataStart(state) {
    //     state.loading = true;
    //     state.error = null;
    //   },
    //   fetchDataSuccess(state, action) {
    //     state.loading = false;
    //     state.data = action.payload;
    //   },
    //   fetchDataFailure(state, action) {
    //     state.loading = false;
    //     state.error = action.payload;
    //   },
    // },
    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state, action) => {
          // Define how to handle someOtherAction
          state.loading = true
        })
        .addCase(fetchData.fulfilled, (state, action) => {
          // Define how to handle anotherAction
        console.log('dataaaaaa', action.payload)
          state.data = action.payload;
          state.loading = false
        });
        builder.addCase(fetchData.rejected, (state, action) => {
          state.error = 'Some problem occured',
          state.loading = false
        })
    }
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = cafeSlice.actions; 
export default cafeSlice.reducer; 
