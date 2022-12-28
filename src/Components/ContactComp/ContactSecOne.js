import React from "react";
import styled from "styled-components";

const ContactSecOne = () => {
	return (
		<Container>
			<Wrapper>
				<Name type="text" placeholder="Enter Name" />
				<Email type="email" placeholder="Enter Email" />
				<Phone type="phone" placeholder="Enter Phone No." />
			</Wrapper>
			<Message />
		</Container>
	);
};

export default ContactSecOne;

const Container = styled.div`
	
	width: 100vw;
	height: 100vh;
`;
const Wrapper = styled.div``;
const Name = styled.input`
	font-size: 18px;
	padding: 10px;
	margin: 10px;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	::placeholder {
		color: palevioletred;
	}
`;

const Email = styled.input`
	width: 50px;
	height: 80px;
`;
const Phone = styled.input`
	width: 50px;
	height: 80px;
`;
const Message = styled.textarea``;
