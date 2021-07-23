import logo from "./lets_gtok_layout.jpg";
import logomobile from "./mobile.jpg";
import worldlogo from './world.jpg'
import "./body.css";
import { Button } from "react-bootstrap";

const body = () => {
	return (
		<div className="body-content">
			<div className="top-body-content">
				<div className="left-side">
					<h1>Feelings</h1>
					<h2>are assets</h2>
					<h6>A digital assets platform to share and trade feelings.</h6>
						<Button size="lg">Join Now</Button>
					
				</div>
				<div className="right-side">
					<img className="letsgtok-img" src={logo} alt="img" />
				</div>
			</div>
			<div className="mid-body-content">
				<div className="cloud-container">
					<div className="cloud">
						<h6>Share feelings</h6>
					</div>
					<div className="cloud">
						<h6>Trade feelings</h6>
					</div>
				</div>
				<div className="mobile-container">
					<div className="left-side">
						<img src={logomobile} alt="img" />
					</div>
					<div className="right-side">
						<div className="content">
							<h6>Share your feelings has never been this easier before.</h6>
							<h6>
								Express your feelings ina judgement free environment, where they
								are mattered.Sharing is liberating at Lets Gtok.Even anonymously
							</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="bottom-body-content">
				<h2>Exchange your feelings in the world of caring friends</h2>
				<img src={worldlogo} alt="img" />
				<div className="divbtn">
					<Button>Start Sharing</Button>
				</div>
			</div>
		</div>
	);
};

export default body;
