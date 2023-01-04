import React from "react";
import styled from "styled-components";
import ContactSecOne from "../Components/ContactComp/ContactSecOne";
import Navbar from "../Components/Navbar";

const Contact = () => {
	return (
		<Container>
			<Navbar />
			<ContactSecOne />
		</Container>
	);
};

export default Contact;

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	flex-direction: column;
`;
