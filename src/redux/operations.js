import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../services/contacts';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetch-all',
  async (_, thunkAPI) => {
    try {
      const data = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const dublicateName = name.toLowerCase();
      const result = contacts.items.find(({ name }) => {
        return name.toLowerCase() === dublicateName;
      });
      if (result) {
        alert(
          `Contact: ${name} with: ${number} is already exist in your phonebook`
        );
        return false;
      }
    },
  }
);

export const fetchDeleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return { id };
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  }
);
