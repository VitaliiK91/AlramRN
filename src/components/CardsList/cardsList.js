import React from 'react';
import {
	View,
	ScrollView,
} from 'react-native';
import Card from '../Card';

class CardsList extends React.PureComponent {
	render() {
		return (
			<ScrollView>
			{
				this.props.cards.cards.map(
					id => <Card key={id} text={this.props.cards.byId[id].time} />)
			}
			</ScrollView>
		);
	}
}

export default CardsList;