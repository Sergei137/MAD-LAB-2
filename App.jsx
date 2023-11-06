/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';

import ToDoList from './ToDoList'; // import ToDoList component
import ToDoForm from './ToDoForm'; // import ToDoForm component

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ToDoList />
      </ScrollView>
      <View style={styles.form}>
        <ToDoForm />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
});

export default App;
