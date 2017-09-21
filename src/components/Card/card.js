import React from 'react';
import {
	View,
	Text,
	Switch,
	StyleSheet,
	Animated,
	Easing,
	Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');

class Card extends React.PureComponent {
	state = {
		isDone: false,
		animaetdValue: new Animated.Value(0),
	};

	constructor() {
		super();

		this.toggleSwitch = this.toggleSwitch.bind(this);
	}

	toggleSwitch() {
		// animate value
		const value = this.state.isDone ? 0 : 300;
		Animated.timing(
            this.state.animaetdValue,
			{
				toValue: value,
				duration: 300,
			},
        ).start();
		// switch value
		this.setState({ isDone: !this.state.isDone });
	}

	render() {
		// interpolate bg color
		const backgroundColor = this.state.animaetdValue.interpolate({
       		inputRange: [0, 300],
       		outputRange: ['rgba(255, 235, 75, 0.5)', 'rgba(235, 225, 200, 0.3)'],
		});
		// interpolate font size
		const fontSize = this.state.animaetdValue.interpolate({
			inputRange: [0, 300],
			outputRange: [25, 30],
		});
		return (
			<Animated.View style={[ styles.cardContainer, { backgroundColor }]}>
				<View style={styles.rowContentContainer}>
					<Animated.Text style={[styles.text, {fontSize }]}>{this.props.text}</Animated.Text>
				</View>
				<View style={styles.rowSwicthContainer}>
					<Switch value={this.state.isDone} onValueChange={this.toggleSwitch}/>
				</View>
			</Animated.View>
		)
	}
}

Card.propTypes = {
	text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	cardContainer: {
		flex: 1,
		width: width - 30,
		height: 50,
		borderRadius: 10,
		overflow: 'hidden',
		flexDirection: 'row',
		marginTop: 5,
	},
	rowContentContainer: {
		flex: 4,
		marginLeft: 15,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	rowSwicthContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: 'black',
	},
});

export default Card;