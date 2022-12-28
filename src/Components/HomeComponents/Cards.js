import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
	AiOutlineFileSearch,
	AiOutlineFieldString,
	AiOutlineBars,
	AiOutlineEye,
	AiOutlineLeftSquare,
	AiOutlineSolution,
	AiOutlineScissor,
	AiOutlineProfile,
} from "react-icons/ai";

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
						<AiOutlineSolution size={50} color="tomato" />
					</Icon>
					<Title>JSON Validator</Title>
					<Subtitle>Validate all your JSON code here</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Viewer");
					}}
				>
					<Icon>
						<AiOutlineEye size={50} color="tomato" />
					</Icon>
					<Title>JSON Viewer</Title>
					<Subtitle>View all your JSON code</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Formatter");
					}}
				>
					<Icon>
						<AiOutlineProfile size={50} color="tomato" />
					</Icon>
					<Title>JSON Formatter</Title>
					<Subtitle>Format the Codes at a click</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Editor");
					}}
				>
					<Icon>
						<AiOutlineScissor size={50} color="tomato" />
					</Icon>
					<Title>JSON Editor</Title>
					<Subtitle>Editing The JSON now made simple</Subtitle>
				</Items>
				<Items
					onClick={() => {
						navigate("/Beautifier");
					}}
				>
					<Icon>
						<AiOutlineLeftSquare size={50} color="tomato" />
					</Icon>
					<Title>JSON Beautifier</Title>
					<Subtitle> Your JSON should look Beautiful</Subtitle>
				</Items>
				<Items
					onClick={() => {
						navigate("/string");
					}}
				>
					<Icon>
						<AiOutlineFieldString size={50} color="tomato" />
					</Icon>
					<Title>String to JSON </Title>
					<Subtitle>Convert string to JSON</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Checker");
					}}
				>
					<Icon>
						<AiOutlineFileSearch size={50} color="tomato" />
					</Icon>
					<Title>JSON Checker</Title>
					<Subtitle>You always Need to check Your JSON</Subtitle>
				</Items>

				<Items
					onClick={() => {
						navigate("/Parser");
					}}
				>
					<Icon>
						<AiOutlineBars size={50} color="tomato" />
					</Icon>
					<Title>JSON Parser</Title>
					<Subtitle>Data to Object? use Parser</Subtitle>
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
