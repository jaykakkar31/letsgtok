import "./contactUs.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
const Contactus = ({ handleClick }) => {
	const [user, setUser] = useState({
		email: "",
		name: "",
		message: "",
	});
	const handleChange = (e) => {
		console.log(e.target.name);
		const { name, value } = e.target;
		setUser((prevVal) => {
			return { ...prevVal, [name]: value };
		});
	};

	return (
		<div className="divForm">
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						onChange={handleChange}
						type="email"
						name="email"
						value={user.email}
						placeholder="Enter email"
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Name</Form.Label>
					<Form.Control
						onChange={handleChange}
						type="text"
						name="name"
						placeholder="Enter name"
						value={user.name}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
					<Form.Label>Message</Form.Label>
					<Form.Control
						onChange={handleChange}
						name="message"
						as="textarea"
						rows={3}
						value={user.message}
					/>
				</Form.Group>
				
				<Button
					onClick={(event) => {
						event.preventDefault();
						if (user.name !== null && user.email !== null && user.message) {
							handleClick(user);

							setUser({
								email: "",
								name: "",
								message: "",
							});

						}
                        else{
                            alert("Fields cannot be empty")
                        }
					}}
					variant="primary"
					type="submit"
				>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Contactus;
