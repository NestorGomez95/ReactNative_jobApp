
import { firebase } from '../config/firebaseconfig';

export const signIn = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in!');
  } catch (error) {
    console.error('Error signing in:', error);
  }
};

export const signOut = async () => {
  try {
    await firebase.auth().signOut();
    console.log('User signed out!');
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
