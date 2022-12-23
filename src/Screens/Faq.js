import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";

const Faq = () => {
	return (
		<Container>
			<Navbar />
			<Text>Faq</Text>
		</Container>
	);
};

export default Faq;

const Container = styled.div`
	justify-content: center;
	align-items: center;
`;

const Text = styled.h1`
	position: absolute;
	top: 50vh;
	left: 50vw;
`;
