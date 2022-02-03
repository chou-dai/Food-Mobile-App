import React from 'react';
import { FooterNav } from './components/Navigator';
import { ThemeProvider } from 'react-native-elements';
import { initializeDatabase } from './api/database';

const theme = {
	colors: {
		base: "#000000",
		text: "#eeeeee",
		main: "#EF810F",
		border: "#222222",
	},
}
 
export default function App() {
	initializeDatabase();
	return (
		<ThemeProvider theme={theme}>
			<FooterNav />
		</ThemeProvider>
	);
}