import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthCheck = () => {
  const [user, setUser] = useState(null); // Store user information
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const auth = getAuth();

    // Check for token in localStorage or sessionStorage
    const storedToken =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (storedToken) {
      // If a token exists, simulate user persistence (you can customize this logic as needed)
      const simulatedUser = { token: storedToken };
      setUser(simulatedUser);
      setIsLoading(false);
    } else {
      // If no token, use Firebase's onAuthStateChanged for user state monitoring
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
    }
  }, []);

  return { user, isLoading };
};

export default useAuthCheck;
