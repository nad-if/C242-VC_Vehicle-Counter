import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzjuCMtLeQxLvTxY5u3ASbeUrYypZ4UPU",
  authDomain: "vehicle-counter-megalogic.firebaseapp.com",
  projectId: "vehicle-counter-megalogic",
  storageBucket: "vehicle-counter-megalogic.firebasestorage.app",
  messagingSenderId: "660543800145",
  appId: "1:660543800145:web:96096d08515fe08c550970"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };