import React from "react";
//import CoverImg from "../../Images/laptopDark.jpg";
import styled from "styled-components";
import HeroImage from "../../Images/hero.png";

const HomeSecOne = () => {
	return (
		<Container>
			<Left>
				<Title>Json now made easier for you</Title>
				<Subtitle>
					Format, Validate, Edit, Beautify, Convert or Parse
				</Subtitle>
				<Subtitle>
					We Do Everything For You at a Click of a Button.
				</Subtitle>
			</Left>
			<Right>
				<Hero src={HeroImage} />
			</Right>
		</Container>
	);
};

export default HomeSecOne;

const Container = styled.div`
	width: 100vw;
	height: 30vh;
	display: flex;
	justify-content: space-between;
	margin: 6% 7%;
	align-items: center;
`;

const Left = styled.div`
	display: flex;
	width: 60%;
	height: 100%;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	height: 25vh;
	margin-top: 50px;
`;
const Right = styled.div`
	width: 40%;
	height: 100%;
	justify-content: center;
	align-items: center;
`;
const Hero = styled.img`
	width: 260px;
	margin-top: 15px;

	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	font-size: xx-large;
	font-weight: bold;
	color: darkblue;
	text-transform: capitalize;
	margin-bottom: 5px;
	align-items: center;
`;

const Subtitle = styled.div`
	font-size: medium;
	font-weight: bold;
	color: gray;
	word-spacing: 2;
	align-items: center;
`;
