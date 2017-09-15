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

const { width } = Dimensions.get('window');
class Card extends React.PureComponent {
	state = {
		isDone: false,
		backgroundColor: new Animated.Value(0),
	};

	constructor() {
		super();

		this.toggleSwitch = this.toggleSwitch.bind(this);
	}

	toggleSwitch() {
		// animate bg
		const value = this.state.isDone ? 0 : 300;
		Animated.timing(
            this.state.backgroundColor,
			{
				toValue: value,
				duration: 300,
				easing: Easing.linear,
			},
        ).start();
		// switch value
		this.setState({ isDone: !this.state.isDone });
	}

	render() {
		// interpolate bg color
		const backgroundColor = this.state.backgroundColor.interpolate({
       		inputRange: [0, 300],
       		outputRange: ['rgba(255, 0, 0, 0.3)', 'rgba(0, 255, 0, 0.5)'],
		});
		
		return (
			<Animated.View style={[ styles.cardContainer, { backgroundColor }]}>
				<View style={styles.rowContentContainer}>
					<Text>{this.props.text}</Text>
				</View>
				<View style={styles.rowSwicthContainer}>
					<Switch value={this.state.isDone} onValueChange={this.toggleSwitch}/>
				</View>
			</Animated.View>
		)
	}
}

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
});

export default Card;