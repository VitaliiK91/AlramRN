import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	ScrollView,
} from 'react-native';
import Card from '../Card';

const CardList = (props) => (
	<ScrollView>
	{
		props.cards.map(card => <Card key={card.id} text={card.text} />)
	}
	</ScrollView>
);

CardList.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
	})),
};

export default CardList;