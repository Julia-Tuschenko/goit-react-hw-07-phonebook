import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as contactsActions from "./contactsActions";
import {fetchContacts} from "./contactsOperations";

const items = createReducer([],
  {
    [contactsActions.addContact]: (state, { payload }) => [...state, payload],

    [contactsActions.deleteContact]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),

    [fetchContacts.fulfilled]: (_, { payload }) => payload,
  }
);

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, { payload }) => (state = payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

const contactsReducer = combineReducers({
  items,
  filter,
  isLoading,
  error,
});

export default contactsReducer;

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
// { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
// { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
// { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {items:[], filter:"", isLoading:false, error:null},
//   extraReducers:{
//     [contactsActions.addContact]: (state, { payload }) => {
//       return {
//         ...state,
//         items: [...state, payload,]
//       };
//     },
//     [contactsActions.deleteContact]: (state, { payload }) => {
//       return {
//         ...state,
//         items: state.filter(({ id }) => id !== payload),
//       };
//     },
//     [fetchContacts.fulfilled]:(state, { payload }) => {
//       return{
//         ...state,
//         items: payload,
//         isLoading: false,
//       };
//     },
//     [fetchContacts.pending]: state => {
//       return{
//         ...state,
//         isLoading: true,
//         error: null,
//       };
//     },
//     [fetchContacts.rejected]: (state, { payload }) => {
//       return{
//         ...state,
//         isLoading: false,
//         error: payload,
//       };
//     },
//     [contactsActions.changeFilter]:(state, { payload }) => {
//       return{
//         ...state,
//         filter: state = payload,
//       };
//     },
//   },
// });
// // export const {  } = contactsSlice.actions
// export default contactsSlice.reducer;