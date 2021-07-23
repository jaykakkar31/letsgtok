import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/Body/body";
import Footer from "./components/footer/footer";
import ContactUs from "./components/contactUs/contactUs";
import { useEffect } from "react";
import firebase from "firebase";
function App() {
	// const firebase = require("firebase");

	firebase.initializeApp({
		apiKey:
			"BC1ma4RXohrNMNopPUpVVVoSnxCYT2nidA-YzSvDT8EjO8cA1kXfOz5bqNvLB7xu9IJ6v3x-nbxOFu1IHbfQ3mA",
		authDomain: 
        "letsgtok-1ce1a.firebaseapp.com",
		projectId:
         "letsgtok-1ce1a",
	});
	var firestore = firebase.firestore();
	const handleClick = (user) => {
        console.log("SAVE");
		firestore
			.collection("samples")
			.add({
				email: user.email,
				name: user.name,
				message: user.message,
			})
			.then((docRef) => {
				console.log(docRef);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});
	};
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Header />
						<Body />
						<Footer />
					</Route>
					<Route exact path="/contactus">
						<ContactUs handleClick={handleClick} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
