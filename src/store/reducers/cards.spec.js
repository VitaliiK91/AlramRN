import cards , * as fromCards from './cards';
import * as actions from '../constants/cards';

describe('cards reducer', () => {
	it('should return default state', () => {
		expect(cards()).toEqual({
			byId: {},
			cardIds: [],
		});
	});

	it('should add a card', () => {
		const action = {
			type: actions.ADD_CARD,
			text: 'test',
		};

		expect(cards(undefined, action)).toEqual({
			cardIds: [0],
			byId: {
				0: {
					id: 0,
					text: 'test',
					enabled: true,
				}
			}
		});
	});

	it('shoud toggle card state', () => {
		const action = {
			type: actions.TOGGLE_CARD,
			id: 0,
		};
		const state = {
			cardIds: [0],
			byId: {
				0: {
					id: 0,
					text: 'test',
					enabled: true,
				}
			}
		};

		expect(cards(state, action)).toEqual({
			cardIds: [0],
			byId: {
				0: {
					id: 0,
					text: 'test',
					enabled: false,
				}
			}
		})
	});
});

describe('cards selectors', () => {
	it('should return cards as an array in order', () => {
		const state = {
			cardIds: [1, 0, 2],
			byId: {
				0: {
					id: 0,
					text: 'cat',
					enabled: false,
				},
				1: {
					id: 1,
					text: 'dog',
					enabled: true,
				},
				2: {
					id: 2,
					text: 'bird',
					enabled: true,
				}
			}
		};
		
		expect(fromCards.getCardsList(state)).toEqual([
			{
				id: 1,
				text: 'dog',
				enabled: true,
			},
			{
				id: 0,
				text: 'cat',
				enabled: false,
			},
			{
				id: 2,
				text: 'bird',
				enabled: true,
			},
		]);
	});
});
