import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDbh9ZB4g_hGSBpLvO2P9slXzPkZsyhUOk",
    authDomain: "react-teammate.firebaseapp.com",
    projectId: "react-teammate",
    storageBucket: "react-teammate.appspot.com",
    messagingSenderId: "641719830213",
    appId: "1:641719830213:web:123d78c7e578aa476112ac",
    measurementId: "G-GKNNS37MFE",
    databaseURL: 'https://react-teammate-default-rtdb.asia-southeast1.firebasedatabase.app/'
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const getPeoples = async () => {
    console.log('[getPeoples]');
    const peopleRef = ref(db, 'peoples');
    console.log('[getPeoples][peopleRef]', peopleRef);

    const peopleList = new Promise((resolve, reject) => {
        onValue(peopleRef, (snapshot) => {
            console.log('[getPeoples][onValue]', snapshot.val());
            const data = snapshot.val();
            if (!data) reject('Data is empty');
    
            const peopleList = Object.entries(data).map(([key, value]) => ({
                id: key,
                ...value,
            }));
    
            resolve(peopleList);
        }, (errorObject) => {
            console.log('The read failed: ' + errorObject.name);
            reject(errorObject.name);
        });
    });

    return peopleList;
};
