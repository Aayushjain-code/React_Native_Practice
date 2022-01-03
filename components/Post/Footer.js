import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

const Footer = ({ likes_count, comments_count, comments }) => {
	return (
		<>
			<View style={styles.footerRow}>
				<View style={{ backgroundColor: 'white', padding: 2, borderRadius: 4, width: "48%", borderWidth: 1 }}>
					<Text> ❤️ 😍 😀 🤣 🙌 {likes_count}</Text>
				</View>
				<View style={{ backgroundColor: 'white', padding: 2, borderRadius: 4, width: "38%", borderWidth: 1 }}>
					<Text>Comments:{comments_count} </Text>
				</View>
			</View>
			<View style={styles.container} >
				<View style={styles.btn}>
					<TouchableHighlight style={styles.quantityButton} style={styles.newButtonStyle1} >
						<View style={styles.buttonStyle} >
							<Text style={{ marginRight: 2, fontWeight: 'bold', color: 'white', }}> Like   ❤️ </Text>
						</View>
					</TouchableHighlight>
				</View>
				<View style={styles.btn}>
					<TouchableHighlight style={styles.quantityButton} style={styles.newButtonStyle2} >
						<View style={styles.buttonStyle} >
							<Text style={{ marginRight: 2, fontWeight: 'bold', color: 'white', }}> Comment  💬 </Text>
						</View>
					</TouchableHighlight>
				</View>
				<View style={styles.btn}>
					<TouchableHighlight style={styles.quantityButton} style={styles.newButtonStyle3} >
						<View style={styles.buttonStyle} >
							<Text style={{ marginRight: 2, fontWeight: 'bold', color: 'black', }}> Load Comment</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		</>
	)
}

export default Footer

const styles = StyleSheet.create({
	footerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	btn: {
		maxWidth: 150,
	},
	container: {
		flexDirection: 'row',
		marginTop: 8,
		borderWidth: 1,
		borderRadius: 10,
	},
	quantityButton: {
		paddingLeft: 10,
		height: 40,
		width: 120,
		fontSize: 25
	},
	newButtonStyle1: {
		backgroundColor: 'blue',
		borderRadius: 5,
		padding: 8,
		margin: 5
	},
	newButtonStyle2: {
		backgroundColor: 'green',
		borderRadius: 5,
		padding: 8,
		margin: 5
	},
	newButtonStyle3: {
		backgroundColor: 'yellow',
		borderRadius: 5,
		padding: 8,
		margin: 5
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
	}
})
