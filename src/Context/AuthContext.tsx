import React from "react";
import type { User, UserCredential } from "firebase/auth";

export interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  CreateUser: (email: string, password: string) => Promise<UserCredential>;
  Login: (email: string, password: string) => Promise<UserCredential>;
  GoogleSignIn: () => Promise<UserCredential>;
  Logout: () => Promise<void>;
}

export const AuthContext = React.createContext<AuthContextType | null>(null);
