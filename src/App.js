import "./App.css"
import app from "./firebase.init"
import {
	getAuth,
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth"
import { useState } from "react"

const auth = getAuth(app)

function App() {
	const provider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()
	const [user, setUser] = useState({})
	return (
		<div className="App">
			{!user.email ? (
				<>
					<button
						onClick={() => {
							signInWithPopup(auth, provider)
								.then(({ user }) => {
									console.log(user)
									const userInfo = {
										name: user.displayName,
										email: user.email,
										photo: user.photoURL,
									}
									setUser(userInfo)
								})
								.catch((error) => console.log(error))
						}}
					>
						Sign in by Google
					</button>
					<button
						onClick={() => {
							signInWithPopup(auth, githubProvider)
								.then(({ user }) => {
									console.log(user)
									const userInfo = {
										name: user.displayName,
										email: user.email,
										photo: user.photoURL,
									}
									setUser(userInfo)
								})
								.catch((error) => console.log(error))
						}}
					>
						Github sign in
					</button>
				</>
			) : (
				<button
					onClick={() => {
						signOut(auth)
							.then(() => setUser({}))
							.catch((error) => console.log(error))
					}}
				>
					Sign Out
				</button>
			)}

			<h3>Name : {user.name}</h3>
			<h3>Email : {user.email}</h3>
			<img src={user.photo} alt="" />
		</div>
	)
}

export default App
