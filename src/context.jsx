import React, { createContext, useContext, useState } from "react";

const NewContext = createContext();
export const useGlobalContext = () => useContext(NewContext);

const AppContext = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <NewContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}>
      {props.children}
    </NewContext.Provider>
  );
};

export default AppContext;
