import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const SmallButton = () => {
    return (
    <View style={styles.btn}>
                <TouchableHighlight 
                style={styles.newButtonStyle2} 
                >
                    <View style={styles.buttonStyle} >
                        <Text style={{ fontWeight: 'bold', color: 'white', }}> Small </Text>
                    </View>
                </TouchableHighlight>
    </View>
    )
}

export default SmallButton

const styles = StyleSheet.create({
	btn: {
		maxWidth: 100,
        margin: 10,
	},
	newButtonStyle2: {
		backgroundColor: '#E40046',
		borderRadius: 6,
		padding: 8,
		
	},
    buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
        lineHeight: 20,
	}

})
