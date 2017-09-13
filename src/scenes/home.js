import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
} from 'react-native';
import Button from '../components/Button';

const bgImage = require('../../img/bg.jpg');
const BTN_SIZE = 100;
const btnOnPress = () => alert('Works');

const Home = () => (
	<Image
		style={styles.bgImage}
		source={bgImage}
		blurRadius={3}
	>
		<View style={styles.mainContainer}>
			<Text style={styles.text}>We are just starting </Text>
			<View style={styles.addBtnContainer}>
				<Button
					icon='ios-add'
					size={BTN_SIZE}
					style={styles.addBtn}
					onPress={btnOnPress}
				/>
			</View>
		</View>
	</Image>
);

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
	text: {
		backgroundColor: 'transparent',
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