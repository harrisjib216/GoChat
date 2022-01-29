import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login, LoginHeader } from './Login';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Login" options={LoginHeader} component={Login} />
		</Stack.Navigator>
	</NavigationContainer>
);
