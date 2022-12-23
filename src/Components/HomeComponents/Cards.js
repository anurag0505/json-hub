import React from "react";
import styled from "styled-components";

const Cards = () => {
	return (
		<Container>
			<Wrapper>
				<Items />
				<Items />
				<Items />
				<Items />
				<Items />
				<Items />
				<Items />
				<Items />
			</Wrapper>
		</Container>
	);
};

export default Cards;

const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: #d3e5f7;
`;

const Items = styled.div`
	width: 18%;
	height: 200px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 10px 10px 10px -6px rgba(47, 77, 235, 0.75);
	margin: 20px;
`;

const Wrapper = styled.div`
	
	align-items: center;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	margin-top: 70px;
`;
