// hooks/useFirebaseAuthObserver.ts
import { useEffect, useState } from "react";
import { onAuthStateChanged} from "firebase/auth";
import type {  User } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
 

export function useFirebaseAuthObserver() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading };
}
