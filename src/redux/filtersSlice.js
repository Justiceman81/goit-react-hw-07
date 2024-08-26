import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => state.filters.filters.name;

export const filtersReducer = filtersSlice.reducer;

// import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = (state) => state.contacts.items;
// export const selectNameFilter = (state) => state.filters.name;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
