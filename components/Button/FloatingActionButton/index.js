import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome5';


const FloatingActionButton = () => {
    return (
 <View style={styles.main}>
    <View style={styles.btn}>
                <TouchableHighlight 
                style={styles.newButtonStyle2} 
                >
                    <View style={styles.buttonStyle} >
                  
                        <Text style={styles.txt}> <Icon name="plus" size={20} />   </Text>
                    </View>
                </TouchableHighlight>
    </View>
    <View style={styles.btn2}>
                <TouchableHighlight 
                style={styles.newButtonStyle2} 
                >
                    <View style={styles.buttonStyle} >
                  
                        <Text style={styles.txt}> <Icon name="plus" size={15} />  Create   </Text>
                    </View>
                </TouchableHighlight>
    </View>
 </View>
    )
}

export default FloatingActionButton

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
    },
    txt:{ 
        fontWeight: 'bold', 
        color: 'white'
    },
        btn: {
            maxWidth: 44,
            margin: 10,
        },
        btn2: {
            maxWidth: 90,
            margin: 10,

        },
        newButtonStyle2: {
            backgroundColor: '#E40046',
            borderRadius: 50,
            padding: 10,
            
        },
        buttonStyle: {
            flexDirection: 'row',
            justifyContent: 'center',
            lineHeight: 20,
        }

})
