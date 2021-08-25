import firebase from 'firebase'

export const Goolge = async () => {

	const FirebaseAuth = JSON.parse(process.env.NEXT_PUBLIC_FirebaseAuth)

	try {
		console.log(FirebaseAuth)
		!firebase.apps.length ? firebase.initializeApp(FirebaseAuth) : firebase.app()

		let provider = new firebase.default.auth.GoogleAuthProvider()
		let userData = await firebase.default.auth().signInWithPopup(provider)

		return userData.user
	}
	catch(error) {
		return error
	}
}