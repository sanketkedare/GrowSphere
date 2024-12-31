import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { app } from "./firebase.js";

const auth = getAuth(app);

export const signUp_Email_Password = async (email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const login_Email_Password = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const signIn_With_Google = async () => {
  try {
    const provider = new GoogleAuthProvider(); // Initialize GoogleAuthProvider
    const response = await signInWithPopup(auth, provider); // Pass both auth and provider
    return response; // Return the response object
  } catch (error) {
    throw error; // Throw the error to handle it elsewhere
  }
};


export const LogOut = async () => {
  try {
    await signOut(auth); // Logs the user out
    return "User logged out successfully"
  } catch (error) {
    return `Error logging out:, ${error.message}`
  }
};
