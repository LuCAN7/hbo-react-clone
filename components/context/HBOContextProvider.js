import React, { useContext, useState } from 'react';

export const stateContext = React.createContext();

export function useStateContext() {
  // Used as a React Hook
  return useContext(stateContext); // The file needing the context can now use this Custom Hook
}

export const HBOProvider = (props) => {
  const [user, setUser] = useState('');
  const defaultImage = 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg';

  const handleCreateUser = (e) => {
    setUser(e.target.value);
  };

  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [accountNavOpen, setAccountNavOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <stateContext.Provider
      value={{
        defaultImage,
        user,
        handleCreateUser,
        sideNavOpen,
        setSideNavOpen,
        accountNavOpen,
        setAccountNavOpen,
        searchOpen,
        setSearchOpen,
      }}
    >
      {props.children}
    </stateContext.Provider>
  );
};
