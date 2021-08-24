import firebase from "firebase"
import { resolveHref } from "next/dist/shared/lib/router/router"

const FirebaseAuth = process.env.FirebaseAuth

module.exports = async (req, res) => {
	console.log(FirebaseAuth)
	firebase.initializeApp(FirebaseAuth)

	let provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth().signInWithPopup(provider)
		.then((result) => {
			res.send(result)
			console.log("Account Linked")
		})
		.catch((error) => {
			res.status(414)
			console.log(error)
		});
}
