import { httpsCallable, getFunctions } from "firebase/functions";
import { initializeApp } from "firebase/app";
import {config} from "./.apiConfig.js";

const firebaseConfig = {
    apiKey: config.firebaseConfig.apiKey,
    authDomain: config.firebaseConfig.authDomain,
    projectId: config.firebaseConfig.projectId,
    storageBucket: config.firebaseConfig.storageBucket,
    messagingSenderId: config.firebaseConfig.messagingSenderId,
    appId: config.firebaseConfig.appId
}

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export const getSession = httpsCallable(functions, 'getSession');

export const deleteSession = httpsCallable(functions, 'deleteSession');

export const saveSession = httpsCallable(functions, 'saveSession');

export const getSessions = httpsCallable(functions, 'getSessions');

export const getStatistics = httpsCallable(functions, 'getStatistics');

export const { stats } = await getStatistics().then(res=>res.data);
