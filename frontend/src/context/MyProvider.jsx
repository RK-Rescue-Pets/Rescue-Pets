import GlobalContext from "./globalContext";

const MyProvider = ({ children }) => {



    return (
      <GlobalContext.Provider value={{  }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  
  export default MyProvider;