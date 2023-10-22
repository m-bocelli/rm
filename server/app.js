const EXPRESS = require('express');
const ADMIN = require('firebase-admin');
const SERVICE_ACCOUNT = require('../../auth/rm-card-firebase-adminsdk-3eltu-225e3064f2.json');
const APP = EXPRESS();
const PORT = 2001;

ADMIN.initializeApp({
	credential: ADMIN.credential.cert(SERVICE_ACCOUNT),
	databaseURL: 'https://rm-card-default-rtdb.firebaseio.com/'
});

APP.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

const DB = ADMIN.database();
const DB_REF = DB.ref('/library');

APP.get('/api/library', (req, res) => {
	DB_REF.once('value')
		.then((snap) => {
			const data = snap.val();
			res.send(data);
		})
		.catch((err) => {
			console.error('Error fetching library', err);
		});
});
