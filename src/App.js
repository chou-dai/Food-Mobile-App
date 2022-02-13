import React from 'react';
import { FooterNav } from './components/Navigator';
import { ThemeProvider } from 'react-native-elements';
import { dropTable, initializeDatabase, showDatabase } from './api/database';

const theme = {
	colors: {
		base: "#000000",
		text: "#eeeeee",
		main: "#EF810F",
		border: "#222222",
	},
}
 
export default function App() {
	// dropTable();
	initializeDatabase();
	// showDatabase();
	return (
		<ThemeProvider theme={theme}>
			<FooterNav />
		</ThemeProvider>
	);
}