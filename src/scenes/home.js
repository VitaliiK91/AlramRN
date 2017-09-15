import React from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Button from '../components/Button';
import CardsList from '../components/CardsList';


const bgImage = require('../../img/bg.jpg');
const BTN_SIZE = 100;
const TIME_LOCALE = 'en-US';



class Home extends React.PureComponent {
	state = {
		cards: [],
		byId: {
			
		},
		isTimePickerVisible: false,	
	};
	
	constructor() {
		super();

		this.addCard = this.addCard.bind(this);
		this.toggleimePicker = this.toggleimePicker.bind(this);
		this.confirmTime = this.confirmTime.bind(this);
	}

	toggleimePicker() {
		this.setState({ isTimePickerVisible: !this.state.isTimePickerVisible });
	}
	
	// TODO: move to a service?
	addCard(_time) {
		const id = this.state.cards.length ? this.state.cards[0] + 1 : 0; // new id is either increment of first el or 0
		const cards = this.state.cards.length > 0 ? [id, ...this.state.cards] : [0];
		const time = new Date(_time).toLocaleTimeString(TIME_LOCALE, {hour: '2-digit', minute:'2-digit'});
		const state = {
			cards,
			byId: {
				...this.state.byId,
				[id]: {
					id,
					time,
				},
			},
		};
		this.setState(state);
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
						<CardsList cards={this.state} />
					</View>
					<View style={styles.addBtnContainer}>
						<Button
							icon='ios-add'
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
})
export default Home;