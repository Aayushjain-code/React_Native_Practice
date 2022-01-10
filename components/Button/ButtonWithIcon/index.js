import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5';


const ButtonWithIcon = () => {
    return (
    <View style={styles.btn}>
                <TouchableHighlight 
                style={styles.newButtonStyle2} 
                >
                    <View style={styles.buttonStyle} >
                  
                        <Text style={styles.txt}> <Icon name="whatsapp" size={15} />  Home </Text>
                    </View>
                </TouchableHighlight>
    </View>
    )
}

export default ButtonWithIcon

const styles = StyleSheet.create({
    txt:{ 
        fontWeight: 'bold', 
        color: 'white'},
        btn: {
            width: 200,
            margin: 10,
        },
        newButtonStyle2: {
            backgroundColor: '#23CF5F',
            borderRadius: 6,
            padding: 10,
            
        },
        buttonStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            lineHeight: 20,
        }

})
