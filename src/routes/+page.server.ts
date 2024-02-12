// B"H

// src/routes/stories.server.ts
import { RequestHandler } from '@sveltejs/kit';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { SECRET_API_KEY } from '$env/static/private'
import type { PageServerLoad } from './$types';

// Initialize Firebase Admin SDK with your service account credentials

const firebaseConfig = {
    apiKey: SECRET_API_KEY,
    authDomain: "cuentosjudios-com.firebaseapp.com",
    projectId: "cuentosjudios-com",
    storageBucket: "cuentosjudios-com.appspot.com",
    messagingSenderId: "267923342673",
    appId: "1:267923342673:web:affb249d2d73ce8a4eff70"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchDataFromFirestore: PageServerLoad = async () => {
    const storiesCollection = collection(db, 'stories');
    const querySnapshot = await getDocs(storiesCollection);

    const stories = [];
    querySnapshot.forEach((doc) => {
      stories.push(doc.data());
    });

    return {
      stories,
    };
};

export { fetchDataFromFirestore as load };
