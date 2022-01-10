import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const MediumBordered = () => {
    return (
    <View style={styles.btn}>
                <TouchableHighlight 
                style={styles.newButtonStyle2} 
               
                >
                    <View style={styles.buttonStyle} >
                        <Text style={styles.txt}> Medium </Text>
                    </View>
                </TouchableHighlight>
    </View>
    )
}

export default MediumBordered

const styles = StyleSheet.create({
    txt:{fontWeight: 'bold', 
    color: '#E40046'
},
	btn: {
		maxWidth: 200,
        margin: 10,
	},
	newButtonStyle2: {
		
		borderRadius: 6,
        borderWidth: 2,
        borderColor: '#E40046',
		padding: 8,
		
	},
    buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
        lineHeight: 20,
	}

})
