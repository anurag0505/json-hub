import React from "react";
import styled from "styled-components";
import HeroImage from "../../Images/contacts.jpg";

const ContactSecOne = () => {
	return (
		<>
			<Container>
				<Left>
					<ContactPic src={HeroImage} />
				</Left>
				<Right>
					<Text>Get in touch</Text>
					<Wrapper>
						<Name type="text" placeholder="Enter Name" />
						<Name type="text" placeholder="Last Name" />
						<Email type="email" placeholder="Enter Email" />
						<Button>submit</Button>
					</Wrapper>
					<Message />
				</Right>
			</Container>
		</>
	);
};

export default ContactSecOne;

const Container = styled.div`
	padding-top: 150px;
	display: flex;
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: flex-start;
	background-color: #efefef;
	flex-direction: row;
`;
const Right = styled.div`
	width: 60%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin-left: 60px;
	justify-content: flex-start;
	margin-top: 70px;
	//background-color: #d3e5f7;
	padding-left: 70px;
	height: 600px;
`;
const Left = styled.div`
	width: 250px;
	justify-content: center;
	align-items: center;
	margin: 5%;
`;
const Text = styled.text`
	top: 120px;
	left: 700px;
	margin: 0 auto;
	position: absolute;
	font-size: 35px;
	font-weight: bold;
	color: darkblue;
	justify-content: center;
`;

const Name = styled.input`
	font-size: 18px;
	padding: 10px;
	margin: 10px;
	width: 250px;
	background: white;
	border: none;
	border-radius: 3px;
	::placeholder {
		color: gray;
	}
`;

const Email = styled.input`
	font-size: 18px;
	padding: 10px;
	margin: 10px;
	width: 250px;
	background: white;
	border: none;

	border-radius: 3px;
	::placeholder {
		color: gray;
	}
`;
const Message = styled.textarea`
	height: 166px;
	width: 250px;
	margin-top: 35px;
	margin-left: 50px;
	background-color: white;
`;

const ContactPic = styled.img`
	width: 350px;
	margin-left: 30px;
	
`;

const Button = styled.button`
	margin: 10px 10px;
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
	max-width: 100px;
`;
const Wrapper = styled.div`
	width: 30%;
	margin-top: 30px;
`;
