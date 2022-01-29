import React, { useState } from 'react';
import { StyleSheet, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Person, Lock, Katana } from '../../../assets/icons';
import { HEIGHT } from '../../services/Utils';
import { setToken } from '../../reducers/AuthReducer';

const NinjaLogo = require('../../../assets/images/NinjaLogo.png');

export const LoginHeader = {
	title: 'Ninja Chat',
	headerTitleAlign: 'center',
	headerStyle: {
		backgroundColor: 'black',
	},
	headerTitleStyle: {
		color: 'white',
		fontFamily: 'LuckiestGuy-Regular',
	},
};

export const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const login = () => {
		// make request

		// cache auth token

		// authenticate the user
		dispatch(setToken('asdf'));
	};

	return (
		<ScrollView keyboardShouldPersistTaps={'handled'}>
			<KeyboardAvoidingView style={styles.container}>
				{/* logo */}
				<Image style={styles.logo} source={NinjaLogo} />

				{/* email field */}
				<Input
					containerStyle={styles.emailField}
					placeholder="Enter your email..."
					value={email}
					onChangeText={setEmail}
					Icon={Person}
				/>

				{/* password field */}
				<Input
					containerStyle={styles.passwordField}
					placeholder="Enter your password..."
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					Icon={Lock}
				/>

				{/* continue button */}
				<Button
					containerStyle={styles.continueBtn}
					label="continue"
					onPress={login}
					Icon={Katana}
					disabled={!email || !password}
				/>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		height: HEIGHT,
		alignItems: 'center',
		backgroundColor: '#424242',
	},
	logo: {
		marginTop: 60,
	},
	emailField: {
		marginTop: 30,
	},
	passwordField: {
		marginTop: 30,
	},
	continueBtn: {
		marginTop: 125,
	},
});
