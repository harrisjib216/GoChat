import 'react-native-gesture-handler';

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider, useSelector } from 'react-redux';

import { name as appName } from './app.json';

import { Store } from './src/reducers';
import { AppNavigator } from './src/views/AppNavigator';
import { AuthNavigator } from './src/views/AuthNavigator';

// Wrapper for the Store
const App = () => {
	return (
		<Provider store={Store}>
			<Container />
		</Provider>
	);
};

// determines which stack to render
const Container = () => {
	const isAuthenticated = useSelector((state) => state?.auth?.authToken);

	return (
		<Provider store={Store}>
			{isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
		</Provider>
	);
};

AppRegistry.registerComponent(appName, () => App);
