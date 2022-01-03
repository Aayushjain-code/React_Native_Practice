import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Profilepicture = ({ profile_photo }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={{ uri: profile_photo }} />
		</View>
	)
}

export default Profilepicture

const styles = StyleSheet.create({
	container: {
		width: 65,
		height: 65,
		margin: 5,
		borderRadius: 40,
		borderWidth: 5,
		borderColor: 'purple',
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 40,
		borderWidth: 1,
		borderColor: "#ffffff"
	}
})
