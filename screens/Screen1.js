import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Post from '../components/Post/post'


const data = [
	{
		profile_photo: "https://unsplash.it/300/300",
		"user_name": "Faraz",
		"title": "First post",
		"description": "Hello world this is my first post",
		"likes_count": 110,
		"comments_count": 10,
		"comments": [
			{
				"user_name": "Aayush",
				"comment": "Hello world-1",
				"replies": [
					{
						"user_name": "Naisheel",
						"comment": "Hello world-2",
						"replies": [
							{
								"user_name": "Manish",
								"comment": "Hello world-3",
								"replies": null
							}
						]
					},
					{
						"user_name": "Priyanshu",
						"comment": "Hello world-4",
						"replies": []
					}
				]
			}
		]
	},
	{
		profile_photo: "https://unsplash.it/301/301",
		"user_name": "Aishwary",
		"title": "Second post",
		"description": "Hello world this is my second post",
		"likes_count": 10,
		"comments_count": 0,
		'comments': []
	},
]


const Screen1 = () => {
	return (
		<SafeAreaView>

			<View>
				<FlatList
					data={data}
					keyExtractor={(item, index) => 'key' + index}

					renderItem={({ item }) =>
						<Post
							profile_photo={item.profile_photo}
							user_name={item.user_name}
							title={item.title}
							description={item.description}
							likes_count={item.likes_count}
							comments_count={item.comments_count}
							comments={item.comments} />}
				/>
			</View>
		</SafeAreaView>

	)
}

export default Screen1

const styles = StyleSheet.create({
	myText: {
		fontSize: 30,
		color: 'tomato',
		textAlign: 'center'
	}
})
