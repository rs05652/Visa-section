import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    submitUserData: (state) => {
      state.loading = true;
      state.error = null;
    },
    submitUserDataSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
    },
    submitUserDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  submitUserData,
  submitUserDataSuccess,
  submitUserDataFailure,
} = userSlice.actions;

export default userSlice.reducer;
