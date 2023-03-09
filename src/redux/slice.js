import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAllContacts,
  fetchAddContact,
  fetchDeleteContact,
} from './operations';

const slice = createSlice({
  name: 'myStore',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, store => {
        store.contacts.isLoading = true;
      })
      .addCase(fetchAllContacts.fulfilled, (store, { payload }) => {
        store.contacts.isLoading = false;
        store.contacts.items = payload;
      })
      .addCase(fetchAllContacts.rejected, (store, { payload }) => {
        store.contacts.isLoading = false;
        store.contacts.error = payload;
      })
      .addCase(fetchAddContact.pending, store => {
        store.contacts.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (store, { payload }) => {
        store.contacts.isLoading = false;
        store.contacts.items.push(payload);
      })
      .addCase(fetchAddContact.rejected, (store, { payload }) => {
        store.contacts.isLoading = false;
        store.contacts.error = payload;
      })
      .addCase(fetchDeleteContact.pending, store => {
        store.contacts.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (store, { payload }) => {
        store.contacts.isLoading = false;
        const index = store.contacts.items.findIndex(
          contact => contact.id === payload.id
        );
        store.contacts.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (store, { payload }) => {
        store.contacts.isLoading = false;
        store.contacts.error = payload;
      });
  },
  reducer: {
    setFilter: (_, { payload }) => payload,
  },
});
export const { setFilter } = slice.actions;

export default slice.reducer;
