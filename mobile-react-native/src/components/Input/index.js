import React from 'react';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import { WIDTH } from '../../services/Utils';

export const Input = ({
	containerStyle = {},
	inputStyle = {},
	value,
	onChangeText,
	placeholder = 'Enter text here...',
	Icon = null,
	...props
}) => {
	return (
		<View style={[styles.container, containerStyle]}>
			{Icon && <Icon style={styles.icon} />}

			<TextInput
				style={[styles.field, inputStyle]}
				placeholderTextColor="#424242"
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				{...props}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: WIDTH - 60,
		height: 45,
		borderRadius: 7,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 10,
		backgroundColor: '#EDEDED',
		...Platform.select({
			android: {
				elevation: 20,
			},
			ios: {
				shadowOffset: {
					width: 0,
					height: 10,
				},
				shadowRadius: 10,
				shadowColor: 'rgba(146, 146, 146, 0.5)',
			},
		}),
	},
	icon: {
		marginRight: 5,
	},
	field: {
		fontSize: 13,
		color: '#424242',
		fontFamily: 'Roboto',
	},
});
