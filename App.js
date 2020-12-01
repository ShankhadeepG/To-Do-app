/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addtodo'

//const App: () => React$Node = () => {
export default function app(){

  const [todos, setTodos] = useState([
    { text: 'Wake up', key: '1' },
    { text: 'Read the newspaper', key: '2' },
    { text: 'Check in at work', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler= (text) => {
    if(text.length > 3)
    {
      setTodos((prevTodos)=>{
        return[
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    }
    else
    alert('To-do should be of 4 letters or longer',
    [{text: 'OK',onPress:()=> console.log('alert closed')}]
    ); 
  }


  return (
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
    }}>
    <View style={styles.container}>
      <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
          </View>
        </View>   
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    backgroundColor:'skyblue',
    flex:1
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

//export default App;
