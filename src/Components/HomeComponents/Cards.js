import React from "react";
import styled from "styled-components";
import { HiEyeSlash, FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { useNavigate } from "react-router-dom";
const Cards = () => {
	let navigate = useNavigate();
	return (
		<Container>
			<Wrapper>
				<Items
					onClick={() => {
						navigate("/Validator");
					}}
				>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>JSON Validator</Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Viewer");
					}}
				>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>JSON Viewer</Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Formatter");
					}}
				>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>JSON Formatter</Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Editor");
					}}
				>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>JSON Editor</Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>
				<Items
					onClick={() => {
						navigate("/Beautifier");
					}}
				>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>JSON Beautifier</Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>
				<Items
					onClick={() => {
						navigate("/string");
					}}
				>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>String to JSON </Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Checker");
					}}
				>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>JSON Checker</Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Parser");
					}}
				>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>JSON Parser</Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>
				<Items>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>JSON to XML</Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>
				<Items>
					<Icon>
						<FaBeer size={56} color="tomato" />
					</Icon>
					<Title>JSON to CSV</Title>
					<Subtitle>view all your json code here</Subtitle>
				</Items>
			</Wrapper>
		</Container>
	);
};

export default Cards;

const Container = styled.div`
	width: 100%;
	height: 120%;
	background-color: #d3e5f7;
`;

const Items = styled.div`
	width: 18%;
	height: 200px;
	background-color: white;
	border-radius: 10px;
	box-shadow: 10px 10px 10px -6px rgba(47, 77, 235, 0.75);
	margin: 20px;
	border-radius: 20px;
	:hover {
		width: 18.5%;
	}
`;

const Wrapper = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-wrap: wrap;
	margin-top: 70px;
`;

const Title = styled.h4`
	font-weight: bold;
	color: black;
	padding: 20px 10px 20px;
`;
const Subtitle = styled.div`
	color: gray;
	max-width: 150px;
	padding-left: 10px;
`;

const Icon = styled.div`
	padding-left: 40px;
	padding-top: 20px;
	border-radius: 20px;
`;
