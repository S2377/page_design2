import { ID } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../services/appwrite";

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider(props) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    const loggedIn = await account.createEmailPasswordSession(email, password);
    setUser(loggedIn);
    window.location.replace("/dashboard"); // you can use different redirect method for your application
  }

  // Logout Function
  async function logout() {
    try {
      await account.deleteSession("current");
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
      setUser(null);
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }



  // Register Function with Auto Login
  async function register(email, password) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password);
    } catch (error) {
      console.error("Registration failed:", error);
     
    }
  }

  // Initialize User Session
  async function init() {
    try {
      const loggedIn = await account.get();
      if (!loggedIn.name) {
        console.log("Please update your profile with a name.");
      }

      setUser(loggedIn); 
    } catch (err) {
      setUser(null); 
    }
  }

 
  useEffect(() => {
    init();
  }, []);

 
  return (
    <UserContext.Provider value={{ current: user, login, logout, register }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
