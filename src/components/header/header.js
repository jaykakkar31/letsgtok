import { Navbar, Nav, Container } from "react-bootstrap";
import "./header.css";

const header = () => {
	return (
		<div className="colored-section">
			<nav class="navbar navbar-expand-lg navbar-light">
				<a class="navbar-brand" href="/">
					Lets Gtok
				</a>

				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<a class="nav-link" href="#footer">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#pricing">
								Features
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#cta">
								Pricing
							</a>
						</li>
					</ul>
				</div>
			</nav>
		
		</div>
	);
};

export default header;
