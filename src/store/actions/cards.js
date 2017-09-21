import * as CARDS from '../constants/cards';

export const addCard = text => ({
	type: CARDS.ADD_CARD,
	text,
});

export const toggleCard = id => ({
	// TODO: whatever needs to happen
})