import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const screen1 = () => {
	return (
		<View style={styles.screen} >
			{/* Render Product Component here */}
			<View style={styles.root}>
				<Image style={styles.image} source={{ uri: 'https://5.imimg.com/data5/GI/HK/LA/SELLER-7711771/zandu-balm-500x500.jpg' }} />
				<View style={styles.productDetails}>
					<Text style={styles.heading} numberOfLines={2}>झंडू बाम | प्राकृतिक रूप से दर्द में आराम</Text>
					{/* Price */}
					<Text style={styles.price}>
						₹50/-
					</Text>
				</View>
				<View style={styles.controls}>
					{/* Rating */}


					{/* Buy  Quantity */}
					<Button style={styles.button} title='Buy' color='#228B22' />
					<Button title='Add to cart'
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flexDirection: 'row',
		backgroundColor: '#fff'
	},
	root: {
		marginLeft: 50,
		borderWidth: 2,
		marginTop: 250,
		backgroundColor: '#fff',
		borderRadius: 5,

	},
	image: {
		alignItems: 'center',
		width: 250,
		height: 200,
	},
	productDetails: {
		padding: 10,
	},
	price: {
		marginTop: 10,
		padding: 10,
		fontSize: 20,
		backgroundColor: '#008078',
		borderRadius: 5,

	},
	heading: {
		fontSize: 15,
		fontWeight: 'bold',
		color: '#000000',
	},
	button: {
		width: '50%',
	},

})

export default screen1


