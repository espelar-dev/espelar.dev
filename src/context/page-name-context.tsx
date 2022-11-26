import { createContext } from 'react';

export const PageNameContext = createContext({
  pageName: "",
  setPageName: (pageName: string) => { },
});