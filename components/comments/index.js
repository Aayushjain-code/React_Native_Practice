import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


 function Comment({ comments }) {
    const nestedComments = (comments.children || []).map((item,index)=> {
      return <Comment key={index} comment={comment} type="child" />
    })
    
    alert(JSON.stringify(comments));
  
    return (
      <View >
        <View><Text>{comments.comment}</Text></View>
        {nestedComments}
      </View>
    )
  }

  export default Comment;
