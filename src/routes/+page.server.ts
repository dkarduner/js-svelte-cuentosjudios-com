// B"H

// src/routes/stories.server.ts
import { RequestHandler } from '@sveltejs/kit';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { SECRET_API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '$env/static/private'
import type { PageServerLoad } from './$types';

// Initialize Firebase Admin SDK with your service account credentials

const firebaseConfig = {
    apiKey: SECRET_API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId : MESSAGING_SENDER_ID, 
    appId: APP_ID
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

    // ordering stories by folder number
    stories.sort((a, b) => (a.folder > b.folder ? -1 : 1));
    
    return {
      stories,
    };
};


export { fetchDataFromFirestore as load };
