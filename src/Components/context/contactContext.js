import { createContext } from "react";

export const ContactContext = createContext({
  loading: false,
  setLoading: () => {},
  setContact: () => {},
  contacts: [],
  setContacts: () => {},
  filteredContacts: [],
  setFilteredContacts: () => {},
  contactQuery: {},
  Groups: [],
  deletContact: () => {},
  updateContact: () => {},
  createContact: () => {},
  contactSearch: () => {},
  // errors: [],
});
