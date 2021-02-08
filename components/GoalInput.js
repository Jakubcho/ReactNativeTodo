import React, {useState} from 'react';
import {View, Button,TextInput, StyleSheet, Modal} from 'react-native'

const GoalInput = props => {
	const [todo, setTodo] = useState('');
	
	const todoInputHandler = (enteredText) => {
    	setTodo(enteredText);
	};
	const addTodoHandler = () => {
		props.onAddTodo(todo);
		setTodo('');
	};
	return (
		<Modal visible={props.visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Whats is to do?" 
					style={styles.input} 
					onChangeText={todoInputHandler}
					value={todo}
		        />
		        <View style={styles.buttonContainer}>
		        	<View style={styles.button}>
		        		<Button title="Cancel" color="red" onPress={props.onCancel}/>
		        	</View>
		        	<View style={styles.button}>
						<Button title="ADD" style={styles.button}  onPress={addTodoHandler} />
					</View>
				</View>
			</View>
		</Modal> 
	);
};

const styles = StyleSheet.create({
  inputContainer: {
	flex:1, 
    justifyContent:'center', 
    alignItems:'center',
  },
  input: { 
    width:'80%',
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
  	flexDirection:'row-reverse',
  	justifyContent:'space-between',
  	alignItems:'center',
  	width: '60%'
  },
  button: {
  	width:'40%'
  }
})

export default GoalInput;