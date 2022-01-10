import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const MediumButton = () => {
    return (
    <View style={styles.btn}>
                <TouchableHighlight 
                style={styles.newButtonStyle2} 
               
                >
                    <View style={styles.buttonStyle} >
                        <Text style={{ fontWeight: 'bold', color: 'white', }}> Medium </Text>
                    </View>
                </TouchableHighlight>
    </View>
    )
}

export default MediumButton

const styles = StyleSheet.create({
	btn: {
		width: 200,
        margin: 10,
	},
	newButtonStyle2: {
		backgroundColor: '#E40046',
		borderRadius: 6,
		padding: 10,
		
	},
    buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
        lineHeight: 20,
	}

})
