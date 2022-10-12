export const getContacts = state => state.contactsSlice.contacts.items;
export const getIsLoading = state => state.contactsSlice.contacts.isLoading;
export const getError = state => state.contactsSlice.contacts.error;
export const getStatusFilter = state => state.contactsSlice.filter;
