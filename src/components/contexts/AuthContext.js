import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../Firebase";
const AuthContext = React.createContext();
export function useAuth() {
  //a custom hook to get the value of the provider without using the context
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  //this function provides the auth info. We need to wrap a component to provide all it's value.
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unSubscribe;
  }, []);

  //signup function
  async function signup(username, email, password) {
    //to authenticate 'getAuth' will provide all necessary elements,
    const auth = getAuth();
    // to do signup firebase use this below sign up function
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
      // current(the user who, signup recently) user is under auth.currentUser
      displayName: username,
    });
    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  }

  // login function
  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
  //Logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }
  const value = {
    // by using useAuth function which has exported from this component we can get this value object in any component and use the info inside of it.
    currentUser,
    signup,
    login,
    logout,
  };
  // eslint-disable-next-line no-undef
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
