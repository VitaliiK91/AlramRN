import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './button';

describe('button component', () => {
	it('should render without required props', () => {
		const button = renderer.create(
			<Button
				icon="ios-add"
				size={100}
			/>
		);
		let tree = button.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should render with optional props', () => {
		const button = renderer.create(
			<Button
				icon="ios-add"
				size={100}
				onPress={() => 'cat'}
				style={{ flex: 1 }}
			/>
		);
		let tree = button.toJSON();
		expect(tree).toMatchSnapshot();
	});

	it('should dispatch passed onPress', () => {
		const onPress = jest.fn();
		const button = shallow(
			<Button
				icon="ios-add"
				size={100}
				onPress={onPress}
				style={{ flex: 1 }}
			/>
		);
		button.find('TouchableOpacity').simulate('press');
		expect(onPress).toHaveBeenCalled();
	})
});