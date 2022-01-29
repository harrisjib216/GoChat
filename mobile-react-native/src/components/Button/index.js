import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WIDTH } from '../../services/Utils';

export const Button = ({
	containerStyle = {},
	disabled,
	label,
	onPress,
	Icon,
	type = 'primary',
}) => {
	return (
		<TouchableOpacity
			style={[
				styles.container,
				styles[type],
				disabled && styles.disabled,
				containerStyle,
			]}
			onPress={onPress}
			disabled={disabled}
			activeOpacity={0.7}>
			<Text style={styles.label}>{label}</Text>

			{Icon && <Icon />}
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: WIDTH - 60,
		height: 45,
		borderRadius: 7,
		alignItems: 'center',
		flexDirection: 'row',
		paddingHorizontal: 44,
		justifyContent: 'space-between',
		...Platform.select({
			android: {
				elevation: 10,
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
	primary: {
		backgroundColor: '#C21D1D',
	},
	disabled: {
		backgroundColor: '#757575',
	},
	icon: {
		marginRight: 5,
	},
	label: {
		fontSize: 13,
		color: 'white',
		fontFamily: 'LuckiestGuy-Regular',
	},
});
