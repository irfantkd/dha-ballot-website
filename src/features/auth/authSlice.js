// import { createSlice } from "@reduxjs/toolkit";
// // import { register } from "react-scroll/modules/mixins/scroller";

// const initialState = {
//   user: null,
//   token: null,
//   permissions: null,
//   isAuthenticated: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload.data.data;
//       state.token = action.payload.data.meta.token;
//       state.permissions = action?.payload?.data?.data?.permissions;
//       state.isAuthenticated = true;
//       state.error = null;
//     },
//       register: (state, action) => {
//       state.user = action.payload.data.data;
//       state.token = action.payload.data.meta.token;
//       state.permissions = action?.payload?.data?.data?.permissions;
//       state.isAuthenticated = true;
//       state.error = null;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       state.error = null;
//     },
//     updateProfule: (state, action) => {
//       state.user = action.payload.data.data;
//     },
//   },
// });

// export const { login, logout,register, updateProfule } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  permissions: null,
  isAuthenticated: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { data, meta } = action.payload;
      if (data && meta) {
        state.user = data.data;
        state.token = meta.token;
        state.permissions = data?.permissions || null;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false;
      } else {
        state.error = "Invalid login data";
        state.loading = false;
      }
    },
    register: (state, action) => {
      const { data, meta } = action.payload;
      if (data && meta) {
        state.user = data.data;
        state.token = meta.token;
        state.permissions = data?.permissions || null;
        state.isAuthenticated = true;
        state.error = null;
        state.loading = false;
      } else {
        state.error = "Invalid registration data";
        state.loading = false;
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.permissions = null;
      state.isAuthenticated = false;
      state.error = null;
      state.loading = false;
    },
    updateProfile: (state, action) => {
      const { data } = action.payload;
      if (data) {
        state.user = data.data;
      } else {
        state.error = "Invalid profile data";
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { login, register, logout, updateProfile, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;