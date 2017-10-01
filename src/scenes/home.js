import React from 'react';
import {
	View,
	Image,
	StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { cards as actions } from '../store/actions';
import {
	getCardsList,
} from '../store/reducers/cards';
import Button from '../components/Button';
import CardsList from '../components/CardsList';

const bgImage = require('../../img/bg.jpg');

const BTN_SIZE = 100;
const TIME_LOCALE = 'en-US';

class Home extends React.PureComponent {
	constructor() {
		super();

		this.addCard = this.addCard.bind(this);
		this.toggleimePicker = this.toggleimePicker.bind(this);
		this.confirmTime = this.confirmTime.bind(this);
	}

	state = {
		isTimePickerVisible: false,
	};

	toggleimePicker() {
		this.setState({ isTimePickerVisible: !this.state.isTimePickerVisible });
	}

	addCard(time) {
		const text = new Date(time).toLocaleTimeString(TIME_LOCALE, { hour: '2-digit', minute: '2-digit' });
		this.props.addCard(text);
	}

	confirmTime(time) {
		this.addCard(time);
		this.toggleimePicker();
	}

	render() {
		return (
			<Image
				style={styles.bgImage}
				source={bgImage}
				blurRadius={3}
			>
				<View style={styles.mainContainer}>
					<View style={styles.cardsListContainer}>
						<CardsList cards={this.props.cards} />
					</View>
					<View style={styles.addBtnContainer}>
						<Button
							icon="ios-add"
							size={BTN_SIZE}
							style={styles.addBtn}
							onPress={this.toggleimePicker}
						/>
					</View>
					<DateTimePicker
						isVisible={this.state.isTimePickerVisible}
						titleIOS={'Pick a Time'}
						mode={'time'}
						onConfirm={this.confirmTime}
						onCancel={this.toggleimePicker}
					/>
				</View>
			</Image>
		);
	}
}

const styles = StyleSheet.create({
	bgImage: {
		flex: 1,
		width: null,
		height: null,
	},
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardsListContainer: {
		marginTop: 50,
		marginBottom: 125,
	},
	addBtnContainer: {
		position: 'absolute',
		right: 20,
		bottom: 20,
	},
	addBtn: {
		borderRadius: BTN_SIZE / 2,
		height: BTN_SIZE,
		width: BTN_SIZE,
		overflow: 'hidden',
		backgroundColor: 'lightblue',
	},
});

Home.defaultProps = {
	cards: [],
};

Home.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
		enabled: PropTypes.bool,
	})),
	addCard: PropTypes.func.isRequired,
};

export default connect(
	state => ({
		cards: getCardsList(state.cards),
	}),
	dispatch => ({
		addCard: bindActionCreators(actions.addCard, dispatch),
	}),
)(Home);
