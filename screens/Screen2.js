import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonWithIcon from '../components/Button/ButtonWithIcon'
import ButtonWithIconBordered from '../components/Button/ButtonWithIconBordered'
import LargeButton from '../components/Button/Large'
import MediumButton from '../components/Button/Medium'
import MediumBordered from '../components/Button/MediumBordered'
import SmallButton from '../components/Button/Small'

const Screen2 = () => {
	return (
		<View>
			<Text style={styles.txt}>Components:Button</Text>
				<LargeButton/>
				<MediumButton/>
				<SmallButton/>
				<MediumBordered/>
				<ButtonWithIcon/>
				<ButtonWithIconBordered/>
		</View>
	)
}

export default Screen2

const styles = StyleSheet.create({
	txt: {
		padding: 10,
		fontSize: 30,
		color: '#E40046',
		textAlign: 'center'
	}
})
