import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const About = () => {
	return (
		<Container>
			<Navbar />
			<Text>About</Text>
		</Container>
	);
};

export default About;

const Container = styled.div`
	justify-content: center;
	align-items: center;
`;

const Text = styled.h1`
	position: absolute;
	top: 50vh;
	left: 50vw;
`;
