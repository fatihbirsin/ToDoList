import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

interface Todo {
  id: number;
  text: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputText,
      };

      setTodos([...todos, newTodo]);
      setInputText('');
    }
  };

  const removeTodo = (id: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yapılacaklar Listesi</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Yapılacakları girin..."
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Ekle</Text>
        </TouchableOpacity>
      </View>

      {todos.map(todo => (
        <TouchableOpacity
          key={todo.id}
          style={styles.todoItem}
          onPress={() => removeTodo(todo.id)}
        >
          <Text style={styles.todoText}>{todo.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'orange',
    marginTop: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'orange',
    borderWidth: 1.5,
    borderRadius: 7,
    marginRight: 10,
    paddingHorizontal: 10,
    
  },
  addButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  todoText: {
    fontSize: 16,
    textAlign: 'left',
    color: 'darkorange'
  },
});

export default App;
