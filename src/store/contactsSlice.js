import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie', number: '459-12-56' },
    { id: 'id-2', name: 'Hermion', number: '443-89-12' },
    { id: 'id-3', name: 'Eden', number: '645-17-79' },
    { id: 'id-4', name: 'Annie', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      const newContact = action.payload;
      state.contacts.push({ id: nanoid(), ...newContact });
    },

    removeContact(state, action) {
      const contactId = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== contactId
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export default contactsSlice.reducer;
