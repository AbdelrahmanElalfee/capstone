import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBvWge1II-JL_SugFEMtdASg8dGaot0kVY",
    authDomain: "capstone-react-b5b3f.firebaseapp.com",
    projectId: "capstone-react-b5b3f",
    storageBucket: "capstone-react-b5b3f.appspot.com",
    messagingSenderId: "426763343035",
    appId: "1:426763343035:web:51bdec13056a852bb4c59e"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch (error){
            console.log("Error creating the user", error);
        }
    }

    return userDocRef;

};