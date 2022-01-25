import React from 'react';
import { FooterNav } from './components/Navigator';
import { ThemeProvider } from 'react-native-elements';

const theme = {
	colors: {
		base: "#000000",
		text: "#eeeeee",
		main: "#EF810F",
		border: "#222222",
	},
}
 
export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<FooterNav />
		</ThemeProvider>
	);
}