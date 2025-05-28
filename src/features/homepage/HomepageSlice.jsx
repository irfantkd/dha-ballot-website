import { createSlice } from '@reduxjs/toolkit';

const homepageSlice = createSlice({
  name: 'homepage',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setHomepageData: (state, action) => {
      state.data = action.payload;
      state.error = null;
      state.loading = false;
    },
    setHomepageError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setHomepageLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setHomepageData, setHomepageError, setHomepageLoading } =
  homepageSlice.actions;

// Selector to get filtered data by slug
export const selectSectionBySlug = (slug) => (state) =>
  state?.homepage?.data?.data?.sections?.find((section) => section?.slug === slug);

export const selectAllSections = (state) => state?.homepage?.data?.sections;

export default homepageSlice.reducer;
