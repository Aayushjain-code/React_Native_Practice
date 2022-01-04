import React ,{useState}from 'react'
import { Button, ScrollView, StyleSheet, Text, View ,TouchableHighlight,TouchableOpacity} from "react-native";
import { Provider } from "react-native-paper";
import BottomSheet from "./bottom-sheet/BottomSheet";
import Comment from './Comment';

const Footer = ({ likes_count, comments_count, comments ,user_name}) => {
	const [show, setShow] = useState(false);
	return (
		<>
			<View style={styles.footerRow}>
				<View style={{ backgroundColor: 'white', padding: 2, borderRadius: 4, width: "48%", borderWidth: 1 }}>
					<Text> ❤️ 😍 😀 🤣 🙌 {likes_count}</Text>
				</View>
				<View style={{ backgroundColor: 'white', padding: 2, borderRadius: 4, width: "38%", borderWidth: 1 }}>
					<Text>Comments:{comments_count} </Text>
				</View>
			</View>
			<View style={styles.container} >
				<View style={styles.btn}>
					<TouchableHighlight style={styles.quantityButton} style={styles.newButtonStyle1} >
						<View style={styles.buttonStyle} >
							<Text style={{ marginRight: 2, fontWeight: 'bold', color: 'white', }}> Like   ❤️ </Text>
						</View>
					</TouchableHighlight>
				</View>

				<View style={styles.btn}>
					<TouchableHighlight style={styles.quantityButton} style={styles.newButtonStyle2} >
						<View style={styles.buttonStyle} >
							<Text style={{ marginRight: 2, fontWeight: 'bold', color: 'white', }}> Comment  💬 </Text>
						</View>
					</TouchableHighlight>
				</View>

				
			</View>
			<Provider>
      <View style={styles.container1}>
        <Button onPress={() => setShow(true)} title="Load The Comments  💬" />
        <BottomSheet
          show={show}
          onDismiss={() => {
            setShow(false);
          }}
          enableBackdropDismiss
        >
          <ScrollView contentContainerStyle={{ padding: 16 }}>
		  {Array.from({ length: 3 }).map((_, index) => (
              <Comment user_name={comments.user_name} key={index} />
            ))}
            <Comment/>
          </ScrollView>
        </BottomSheet>
      </View>
    </Provider>
			
		</>
	)
}

export default Footer

const styles = StyleSheet.create({
	container1: {
		flex: 1,
		backgroundColor: "#ccc",
		alignItems: "center",
		justifyContent: "center",
	  },
	footerRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	btn: {
		maxWidth: 150,
	},
	container: {
		flexDirection: 'row',
		marginTop: 8,
		borderWidth: 1,
		borderRadius: 10,
	},
	quantityButton: {
		paddingLeft: 10,
		height: 40,
		width: 120,
		fontSize: 25
	},
	newButtonStyle1: {
		backgroundColor: 'blue',
		borderRadius: 5,
		padding: 8,
		margin: 5
	},
	newButtonStyle2: {
		backgroundColor: 'green',
		borderRadius: 5,
		padding: 8,
		margin: 5
	},
	newButtonStyle3: {
		backgroundColor: 'yellow',
		borderRadius: 5,
		padding: 8,
		margin: 5
	},
	buttonStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
	}
})
