import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyASoxWQKZvY7iluZP76iucPCIOCj3um4cw",
  authDomain: "portfolio-66de3.firebaseapp.com",
  projectId: "portfolio-66de3",
  storageBucket: "portfolio-66de3.appspot.com",
  messagingSenderId: "33901483060",
  appId: "1:33901483060:web:2622282b157e10ea05e661",
  measurementId: "G-TKD7G8QJWK"
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
