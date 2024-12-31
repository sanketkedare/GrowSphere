import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthCheck = () => {
  const [user, setUser] = useState(null); // Store user information
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
      } else {
        // User is not signed in
        setUser(null);
      }
      setIsLoading(false); // Authentication state has been resolved
    });

    // Cleanup the listener
    return () => unsubscribe();
  }, []);

  return { user, isLoading };
};

export default useAuthCheck;
