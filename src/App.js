import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/Body/body";
import Footer from "./components/footer/footer";
import ContactUs from "./components/contactUs/contactUs";

function App() {
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
                        <ContactUs/>
                    </Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
