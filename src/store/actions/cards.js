import * as CARDS from '../constants/cards';

export const addCard = text => ({
	type: CARDS.ADD_CARD,
	text,
});

export const toggleCard = id => ({
	type: CARDS.TOGGLE_CARD,
	id,
});
