import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCN1qBCq_9B57OJ1YQvWVl3ViO5Ujb7q9c",
  authDomain: "webcarros-b6bb0.firebaseapp.com",
  projectId: "webcarros-b6bb0",
  storageBucket: "webcarros-b6bb0.firebasestorage.app",
  messagingSenderId: "842281713901",
  appId: "1:842281713901:web:c02a6e6d2f72bbc8470ce4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
