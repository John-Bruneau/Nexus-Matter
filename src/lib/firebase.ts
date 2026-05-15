/**
 * @copyright Sébastien John Bruneau
 */
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, getDocFromServer, collection, addDoc, updateDoc, deleteDoc, query, where, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { OperationType } from '../types';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Validation de la connexion
async function testConnection() {
  try {
    // Ce test réussira car nous avons ajouté une règle publique pour /test/connection
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log("Firebase connection successful");
  } catch (error: any) {
    console.error("Firebase connection test failed:", error);
    // Si l'erreur est liée à l'état "offline" ou si le projet est mal configuré
    if (error?.code === 'unavailable' || error?.message?.includes('the client is offline')) {
      console.error("Erreur de connexion Firebase. Vérifiez votre configuration.");
    }
  }
}
testConnection();

// Gestionnaire d'erreurs Firestore selon les directives
export function handleFirestoreError(error: unknown, operationType: string, path: string | null) {
  const errInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Sync user profile
    try {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        role: 'researcher',
        lastLogin: serverTimestamp()
      }, { merge: true });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}`);
    }
    
    return user;
  } catch (error) {
    console.error("Erreur de connexion Google:", error);
    throw error;
  }
};

export const logout = () => signOut(auth);
