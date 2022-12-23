import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Feedback from "./Screens/Feedback";
import Faq from "./Screens/Faq";
import Home from "./Screens/Home";

function App() {
	return (
		<Container>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Feedback" element={<Feedback />} />
					<Route path="/About" element={<About />} />
					<Route path="/Faq" element={<Faq />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;

const GlobalStyle = createGlobalStyle`
body{
 
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,500&display=swap');
  font-family: 'Open Sans', sans-serif;
}
*{
	margin: 0;
	padding: 0;
}
`;

const Container = styled.div`
	background-color: white;
	height: 100vh;
`;
