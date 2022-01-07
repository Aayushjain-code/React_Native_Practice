import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Comment from './Comment'

const CommentBox = ({comments}) => {
    return (
        <View style={styles.container2}>
            {comments.map((item, index) => {
            return (
                <View key={index}>
                    <Comment comment={item}  />	
                </View>
                )
            })}
       </View>
    )
}

export default CommentBox

const styles = StyleSheet.create({
    container2: {
		paddingBottom: 10,
		borderWidth: 1,
		borderRadius: 10,
		paddingRight: 10,
	},
})
