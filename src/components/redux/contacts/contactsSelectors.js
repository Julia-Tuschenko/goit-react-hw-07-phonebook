import { createSelector } from "@reduxjs/toolkit";

export const fitlerContacts = state => state.contacts.filter;
export const contactsItems = state => state.contacts.items;

export const mapFilterContactsList = createSelector(
    [fitlerContacts,contactsItems],
    (filter,contacts) => {
   const normalizedFilter = filter.trim().toLowerCase();
   return contacts.filter(contact =>
    contact.name.trim().toLowerCase().includes(normalizedFilter));
});

// export const mapFilterContactsList = state => {
//     const filter = fitlerContacts(state);
//     const contacts = contactsItems(state);
    
//     const normalizedFilter = filter.trim().toLowerCase();
//     return contacts.filter(contact =>
//         contact.name.trim().toLowerCase().includes(normalizedFilter));
//     };



