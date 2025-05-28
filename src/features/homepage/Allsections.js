import { createSlice } from '@reduxjs/toolkit';

const allSectionsSlice = createSlice({
  name: 'allSections',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSectionsData: (state, action) => {
        
      state.data = action?.payload?.data;
      state.error = null;
      state.loading = false;
    },
    setSectionsError: (state, action) => {
      state.error = action?.payload;
      state.loading = false;
    },
    setsectionsLoading: (state, action) => {
      state.loading = action?.payload;
    },
  },
});

export const { setSectionsData, setSectionsError, setsectionsLoading } =
allSectionsSlice?.actions;

// Selector to get filtered data by slug
export const selectSectionBysection_name = (section_name) => (state) =>
  state?.allSections?.data?.find((section) => section?.section_name === section_name);

export const selectAllSections = (state) => state?.allSections?.data;

export default allSectionsSlice?.reducer;
