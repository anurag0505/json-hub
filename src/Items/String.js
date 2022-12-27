import React from "react";
import styled from "styled-components";

const String = () => {
	return (
		<Container>
			<Wrapper>
				<Title> String to JSON </Title>
				<Subtitle>
					As the name implies String to JSON will convert your strings
					to readable JSON spontaneously, so that you could
					Concentrate where its needed the most.
				</Subtitle>
			</Wrapper>

			<InputBox type="textarea" placeholder="Enter Text Here" />
			<Wrapper2>
				<Button>Validate</Button>
				<Button>Clear</Button>
			</Wrapper2>
			<ResultArea type="textarea" placeholder="Result" />
		</Container>
	);
};

export default String;
export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background-color: white;
	display: flex;
`;
export const Title = styled.text`
	font-size: x-large;
	font-weight: bold;
	background-color: darkblue;
	color: snow;
	align-items: center;
	justify-content: center;
	padding: 10px;
	opacity: 0.9;
`;

export const Subtitle = styled.text`
	font-size: small;
	font-weight: bold;
	color: snow;
	align-items: center;
	justify-content: center;
	opacity: 0.8;
	padding-bottom: 15px;
`;
export const Wrapper = styled.div`
	margin-bottom: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: darkblue;
	width: 100%;
	height: 20%;
	flex-direction: column;
`;

export const InputBox = styled.textarea`
	width: 80%;
	height: 90%;
	border: none;
	background-color: #d3e5f7;
	margin: 20px auto;
	font-size: 15px;
	::placeholder {
		color: palevioletred;
	}
	:focus {
		outline: 0;
	}
`;

export const Button = styled.button`
	margin: 5px 7px;
	font-size: 15px;
	font-weight: bold;
	background-color: darkblue;
	color: snow;
	opacity: 0.9;
	border: 2px solid darkblue;
	border-radius: 12px;
	padding: 12px 24px;
	:hover {
		background-color: gray;
		color: snow;
	}
`;
export const Wrapper2 = styled.div`
	padding-left: 132px;
	flex-direction: column;
`;

export const ResultArea = styled.textarea`
	font-size: 20px;
	width: 80%;
	height: 30%;
	border: none;
	background-color: #d3e5f7;
	margin: 20px auto;
	font-size: 15px;
	::placeholder {
		color: palevioletred;
	}
	:focus {
		outline: 0;
	}
`;
