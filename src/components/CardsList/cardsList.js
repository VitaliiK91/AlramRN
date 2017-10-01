import React from 'react';
import PropTypes from 'prop-types';
import {
	ScrollView,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cards as actions } from '../../store/actions';
import Card from '../Card';

const CardList = props => (
	<ScrollView>
		{
			props.cards.map(
				card => (
					<Card
						key={card.id}
						onToggle={() => props.toggleCard(card.id)}
						text={card.text}
						enabled={card.enabled}
					/>
				),
			)
		}
	</ScrollView>
);
CardList.defaultProps = {
	cards: [],
};

CardList.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		text: PropTypes.string,
		enabled: PropTypes.bool,
	})),
};

export default connect(
	null,
	dispatch => ({
		toggleCard: bindActionCreators(actions.toggleCard, dispatch),
	}),
)(CardList);
