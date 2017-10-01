import * as actions from '../constants/cards';

const cards = (state = { cardIds: [], byId: {} }, action) => {
	switch (action.type) {
		case actions.ADD_CARD: {
			const id = state.cardIds.length ? state.cardIds[0] + 1 : 0; // new id is either increment of first el or 0
			const cardIds = state.cardIds.length > 0 ? [id, ...state.cardIds] : [id];
			return {
				cardIds,
				byId: {
					...state.byId,
					[id]: {
						id,
						text: action.text,
						enabled: true,
					},
				},
			};
		}
		case actions.TOGGLE_CARD: {
			return {
				...state,
				byId: {
					...state.byId,
					[action.id]: {
						...state.byId[action.id],
						enabled: !state.byId[action.id].enabled,
					},
				},
			};
		}
		default:
			return state;
	}
};

export default cards;

export const getCardsList =
	state => state.cardIds.map(id => state.byId[id]);
