import React from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
} from 'react-native';
import Button from '../components/Button';
import CardsList from '../components/CardsList';


const bgImage = require('../../img/bg.jpg');
const BTN_SIZE = 100;



class Home extends React.PureComponent {
	state = {
		cards: [],
		byId: {
			
		}	
	};
	
	constructor() {
		super();

		this.addCard = this.addCard.bind(this);
	}
	
	// TODO: move to a service?
	addCard(time) {
		const id = this.state.cards.length ? this.state.cards[0] + 1 : 0; // new id is either increment of first el or 0
		const cards = this.state.cards.length > 0 ? [id, ...this.state.cards] : [0];
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
							onPress={() => this.addCard(new Date().toLocaleString())}
						/>
					</View>
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