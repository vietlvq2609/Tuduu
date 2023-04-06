import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'tuduu-2acc1.firebaseapp.com',
  databaseURL:
    'https://tuduu-2acc1-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'tuduu-2acc1',
  storageBucket: 'tuduu-2acc1.appspot.com',
  messagingSenderId: '998852817323',
  appId: '1:998852817323:web:024003bf8b16207575e2ee',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);