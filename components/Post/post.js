import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Body from './Body'
import Header from './Header'
import Footer from './Footer'

const Post = ({ profile_photo, user_name, title, description, likes_count, comments_count, comments }) => {
	return (
		<View style={styles.container} >
			<Header user_name={user_name} profile_photo={profile_photo} />
			<Body title={title} description={description} />
			<Footer comments={comments} likes_count={likes_count} comments_count={comments_count} comments={comments} />
		</View>
	)
}

export default Post

const styles = StyleSheet.create({
	container: {
		margin: 10,
		padding: 10,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: 'black',
	},
})
