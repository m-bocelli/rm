const EXPRESS = require('express');
const ADMIN = require('firebase-admin');
const SERVICE_ACCOUNT = require('../../auth/rm-card-firebase-adminsdk-3eltu-225e3064f2.json');

ADMIN.initializeApp({
	credential: ADMIN.credential.cert(SERVICE_ACCOUNT),
	databaseURL: 'https://rm-card-default-rtdb.firebaseio.com/'
});

const APP = EXPRESS();
const PORT = 2001;

APP.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
