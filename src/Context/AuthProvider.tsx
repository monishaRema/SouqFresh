import React, { useEffect, useState } from "react";
import type { User, UserCredential } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,      
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
import { AuthContext } from "./AuthContext";
import type { AuthContextType } from "./AuthContext";

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Observer for Firebase Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const CreateUser = (email: string, password: string): Promise<UserCredential> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email: string, password: string ): Promise<UserCredential> => {
    return signInWithEmailAndPassword(auth, email,password);
  };

  const GoogleSignIn = (): Promise<UserCredential> => {
    return signInWithPopup(auth, googleProvider);
  };

  const Logout = (): Promise<void> => {
    return signOut(auth);
  };

  
  const userInfo: AuthContextType & { loading: boolean } = {
    user,
    setUser,
    CreateUser,
    Login,
    GoogleSignIn,
    Logout,
    loading,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {/* Optionally show a loader/spinner while checking user */}
      {loading ? <div className="text-center py-10">Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
