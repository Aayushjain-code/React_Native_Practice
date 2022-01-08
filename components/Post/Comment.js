import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


function Comment({ comment }) {
    
    const nestedComments = (comment.replies || []).map((comment,index) => {
      return <Comment key={index} comment={comment} />
    })
   //alert(JSON.stringify(comment))
  
    return (
      <View style={styles.box1}>
        <View style={styles.oneBox}>
            <Text style={styles.commenter}> 
                {comment.user_name} : 
            </Text>
            <Text>
                 {comment.comment}
            </Text>
        </View>
        <View style={styles.reactions}>
            <Text style={styles.react}>Like</Text>
            <Text style={styles.react}>Reply</Text>
        </View>
        {nestedComments}
      </View>
    )
  }

export default Comment



const styles = StyleSheet.create({
    react:{
        fontSize:10,
        paddingRight:5,
        backgroundColor:'#D3D3D3',
        padding:2,
        borderRadius:5,
        marginRight:5,
        marginTop:5,
    },
    reactions: {
        flexDirection: 'row',
        justifyContent:'flex-end',
        marginRight: 10,
    },
    oneBox:{
        flexDirection:'row',
        backgroundColor:'#D3D3D3',
        padding:5,
        borderRadius:5,
    },
    commenter:{
        fontWeight:'bold',
    },
    box1:{
        marginLeft:20,
        marginTop:5,
    },
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





























// function Comment({ comment,user_name,replies }) {
//     const NestedComments = (comment.children || []).map((comment,index )=> {
//       return <Comment key={index} comment={replies.comment} type="child" />
//     })
  
//     return (
//     //   <View >
//     //     <View><Text>{comment}</Text></View>
//     //     {NestedComments}
//     //   </View>


//         <View style={styles.container}> 
//             <Text style={styles.containerTxt}>{user_name}</Text>   
//             <View>
//                 <Text>{comment}</Text>
//             </View>
//             <View style={styles.options}>
//                 <Text style={styles.optionText}>Like</Text>
//                 <Text style={styles.optionText}>Reply</Text>
//             </View>
//             {NestedComments}
//         </View>
//     )
//   }






// const Comment = ({user_name,comment,replies}) => {

//     const firstChild = () =>{
//         if(replies.length > 0){
//                   return (
//                     replies.map((reply,index) => {
//                         return (
//                                 <View style={styles.container}  key={index}> 
//                                     <Text style={styles.containerTxt}>{reply.user_name}</Text>   
//                                     <View>
//                                         <Text>{reply.comment}</Text>
//                                     </View>
//                                     <View style={styles.options}>
//                                         <Text style={styles.optionText}>Like</Text>
//                                         <Text style={styles.optionText}>Reply</Text>
//                                     </View>
//                                 </View>
//                                 )
//                     })
//           )
//         }
    
//         return null;
//     }
//     return (
//         <View style={styles.container}> 
//             <Text style={styles.containerTxt}>{user_name}</Text>   
//             <View>
//                 <Text>{comment}</Text>
//             </View>
//             <View style={styles.options}>
//                 <Text style={styles.optionText}>Like</Text>
//                 <Text style={styles.optionText}>Reply</Text>
//             </View>
//             {firstChild()}
//         </View>
//     )
// }
