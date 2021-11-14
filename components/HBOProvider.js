import React, { useContext, useState } from 'react';
import ls from 'local-storage';
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
  const [searchOpen, setSearchOpen] = useState(false)
  const [watchList, setWatchList ] = useState(ls.get('myList'))
  
  const addToWatchList = (video) => {
    let myList;
    if(ls('myList') !== null){
      myList = ls.get('myList');
      myList.push(video)
      ls.set('myList', myList);
      setWatchList(myList)
    }else {
      ls.set('myList', [video]);
    }
  }

  const removeFromWatchList = (videoId) => {
    console.log("VIEOSOSOS")
    console.log(videoId)

    let myList = ls.get('myList');
    console.log(myList)
    myList = myList.filter((m)=> m.mediaId !== videoId)

    ls.set('myList', myList)
    setWatchList(myList)

  }

  const thumbTypes = ['large-v', 'small-v', 'large-h', 'small-h'];

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
        thumbTypes,
        addToWatchList,
        removeFromWatchList,
        watchList,
        setWatchList
      }}
    >
      {props.children}
    </stateContext.Provider>
  );
};

// Not sure if this has to be export by default? and why not? = Can not be a arrow function
// export default HBOProvider;
