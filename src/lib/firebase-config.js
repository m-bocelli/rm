import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyD8IMt9xQi1WRDG08tCt-Roi6AjK_mLW0k',
	authDomain: 'rm-card.firebaseapp.com',
	databaseURL: 'https://rm-card-default-rtdb.firebaseio.com',
	projectId: 'rm-card',
	storageBucket: 'rm-card.appspot.com',
	messagingSenderId: '58978991844',
	appId: '1:58978991844:web:f6897f85fb3982243df6f1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
