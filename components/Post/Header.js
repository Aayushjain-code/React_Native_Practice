import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Profilepicture from '../others/Profilepicture'

const Header = ({ user_name, profile_photo }) => {
	return (
		<View style={styles.hedder}>
			<View style={styles.container}>
				{/* Profile */}
				<Profilepicture profile_photo={profile_photo} />
				{/* Name */}
				<Text style={styles.myText}>
					{user_name}
				</Text>

			</View>
			<View style={styles.dots}>
				<Text style={{color:"black",fontSize:10,letterSpacing:2}}>⚫⚫⚫</Text>
			</View>
		</View>
	)
}

export default Header

const styles = StyleSheet.create({
	dots: {
		justifyContent:"center",
		alignItems:"center",
		marginRight:15,
		color: 'black',
	},
	hedder: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderWidth: 1,
		borderRadius: 5,
	},
	container: {
		flexDirection: 'row',

	},
	myText: {
		fontWeight: 'bold',
		fontStyle: 'italic',
		color: 'black',
		fontSize: 20,
		marginTop: 20,
		marginLeft: 10,
	},
})
