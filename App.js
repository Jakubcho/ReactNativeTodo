import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

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
    <View style={styles.screen}>
        <Button title="Add new todo" onPress={() => setIsAddMode(true)} />
        <GoalInput 
          onAddTodo={addTotoHandler}  
          visible={isAddMode} 
          onCancel={cancelTodoAdd}
          />
        <FlatList data={todos} renderItem={itemData => 
            <GoalItem 
              title={itemData.item.value} 
              id={itemData.item.key} 
              onDelete={removeTodoHandler} 
            />
          }  
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

