import React from 'react';
import {
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Button = (props) => (
	<TouchableOpacity
		style={[styles.mainContainer, props.style]}
		onPress={props.onPress}
	>
		{props.icon &&
			<Icon name={props.icon} size={props.size} />	
		}
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
})
export default Button;