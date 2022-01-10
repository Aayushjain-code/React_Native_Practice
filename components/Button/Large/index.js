import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native'
import Modal from '../Modal';

const LargeButton = () => {
	const [shouldShow, setShouldShow] = useState(false);
    return (
    <>
        <View style={styles.btn}>
                <TouchableHighlight 
                style={styles.newButtonStyle2} 
                onPress={() => setShouldShow(!shouldShow)}
                >
                    <View style={styles.buttonStyle} >
                        <Text style={styles.txt}> Large </Text>
                    </View>
                </TouchableHighlight>
        </View>
       {
				shouldShow ?( <Modal />) : null
		}
    </>

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
