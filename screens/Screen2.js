import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Screen2 = () => {
	return (
		<View>
			<Text style={styles.myText}>
				⚙️
			</Text>
		</View>
	)
}

export default Screen2

const styles = StyleSheet.create({
	myText: {
		fontSize: 30,
		color: 'tomato',
		textAlign: 'center'
	}
})
