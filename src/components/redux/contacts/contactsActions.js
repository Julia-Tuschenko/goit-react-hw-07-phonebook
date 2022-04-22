import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', ({ name,  phone }) => ({
    payload: {
      id: nanoid(),
      name,
      phone,
    },
  }));
  
export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');


  
// export const fetchContactsRequest = createAction('contacts/fetchContactsRequest');

// export const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');

// export const fetchContactsError = createAction('contacts/fetchContactsError');
