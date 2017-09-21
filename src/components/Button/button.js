import React from 'react';
import {
	TouchableOpacity,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

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

Button.propTypes = {
	icon: PropTypes.string.isRequired, // TODO: why string? Mb component?
	size: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Button;