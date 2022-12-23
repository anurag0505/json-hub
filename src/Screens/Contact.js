import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const Contact = () => {
	return (
		<Container>
			<Navbar />
			<Text>Contact</Text>
		</Container>
	);
};

export default Contact;

const Container = styled.div`
	flex: 1;
	justify-content: center;
	align-items: center;
`;
const Text = styled.h1`
	position: absolute;
	top: 50vh;
	left: 50vw;
`;
