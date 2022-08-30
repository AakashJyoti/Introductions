import { createContext, useContext } from "react";
// Manage state on global

// context
// provider
// useContext

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const userData = {
    name: "Jabba",
    age: 12,
  };

  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
// Wrap index with AppProvider

const useContext = () => {
  const { userData } = useContext(AppContext);

  return (
    <div>
      <h1>{userData.name}</h1>
      <h1>{userData.age}</h1>
    </div>
  );
};
export default useContext;
