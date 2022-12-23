import React from "react";
import styled from "styled-components";
import Cards from "../Components/HomeComponents/Cards";
import HomeSecOne from "../Components/HomeComponents/HomeSecOne";
import Navbar from "../Components/Navbar";

const Home = () => {
	return (
		<Container>
			<Navbar />
			<HomeSecOne />
			<Cards />
		</Container>
	);
};

export default Home;

const Container = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;

	flex-direction: column;
`;
