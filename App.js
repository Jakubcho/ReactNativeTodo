import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [todos, setTodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const removeTodoHandler = (id) => {
    setTodos(todos.filter(item => item.key !== id))
  }

  const addTotoHandler = todoTitle => {
    setTodos([
      ...todos, 
      {key: Math.random().toString(), value: todoTitle 
      }]);
    setIsAddMode(false)
  }

  const cancelTodoAdd = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
