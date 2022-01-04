import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SingleComment = (user_name,comment) => {
    return (
        <View style={styles.container}> 
            <Text style={styles.containerTxt}>{user_name}</Text>   
            <View>
                <Text>{comment}</Text>
            </View>
            <View style={styles.options}>
                <Text style={styles.optionText}>Like</Text>
                <Text style={styles.optionText}>Reply</Text>
            </View>
        </View>
    )
}

export default SingleComment

const styles = StyleSheet.create({

    containerTxt: {
        fontWeight: 'bold',
    },
    optionText:{
        fontWeight: 'bold',
        marginRight: 10,
    },
    options: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        color:'black',
    },
    container:{
        backgroundColor:'#808080',
        padding:10,
        borderRadius:5,
        color:'white',
        marginBottom:10,
    },
})
