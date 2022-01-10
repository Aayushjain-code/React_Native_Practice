import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const LargeButton = () => {
    return (
    <View style={styles.btn}>
                <TouchableHighlight 
                style={styles.newButtonStyle2} 
                >
                    <View style={styles.buttonStyle} >
                        <Text style={styles.txt}> Large </Text>
                    </View>
                </TouchableHighlight>
    </View>
    )
}

export default LargeButton

const styles = StyleSheet.create({
    txt:{ 
        fontWeight: 'bold', 
        color: 'white'},
	btn: {
		maxWidth: 300,
        marginLeft: 10,
	},
	newButtonStyle2: {
		backgroundColor: '#E40046',
		borderRadius: 6,
		padding: 12,
		
	},
    buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
        lineHeight: 20,
	}

})
