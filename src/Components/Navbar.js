import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	let navigate = useNavigate();
	return (
		<Container>
			<Left>
				<Logo
					onClick={() => {
						navigate("/");
					}}
				>
					Jsonhub.in
				</Logo>
			</Left>
			<Center>
				<Menu>
					<MenuItmes
						onClick={() => {
							navigate("/About");
						}}
					>
						About us
					</MenuItmes>
					<MenuItmes
						onClick={() => {
							navigate("/Feedback");
						}}
					>
						Feedback
					</MenuItmes>
					<MenuItmes
						onClick={() => {
							navigate("/Contact");
						}}
					>
						Contact
					</MenuItmes>
					<MenuItmes
						onClick={() => {
							navigate("/Faq");
						}}
					>
						Faq's
					</MenuItmes>
				</Menu>
			</Center>
			<Right>
				<Text>build website</Text>
			</Right>
		</Container>
	);
};

export default Navbar;

const Container = styled.div`
	position: fixed;
	width: 100vw;
	height: 12vh;
	background-color: darkblue;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const Left = styled.div`
	display: flex;
	align-items: center;
	padding-left: 2.5vw;
	flex: 1;
`;

const Center = styled.div`
	flex: 2;
	margin-right: 2%;
`;
const Right = styled.div`
	display: flex;
	margin-right: 3.25vw;
	justify-content: left;
	align-items: center;
`;
const Logo = styled.h1`
	font-size: 21px;
	cursor: pointer;
	color: snow;
	text-transform: uppercase;
	:hover {
		font-size: 21.5px;
	}
`;

const Menu = styled.ul`
	display: flex;
	list-style: none;
	margin: 5px;
`;
const MenuItmes = styled.li`
	font-size: 15px;
	font-weight: bold;
	color: snow;
	align-items: center;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	padding-left: 50px;

	:hover {
		color: tomato;
		font-size: 16px;
	}
`;

const Text = styled.h4`
	display: flex;
	flex: 1;
	font-size: medium;
	border: 2px solid snow;
	padding: 10px 15px;
	border-radius: 20px;
	text-transform: capitalize;
	background-color: darkblue;
	color: snow;
	align-items: center;
	:hover {
		border: 2px solid darkblue;
		color: darkblue;
		background-color: snow;
	}
`;
