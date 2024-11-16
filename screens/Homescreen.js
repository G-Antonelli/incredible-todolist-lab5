import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

export default function HomeScreen({ navigation, tasks, addTask }) {
  return (
    <View style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <View style={styles.buttonContainer}>
        <Button 
          title="Go to About" 
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 10,
  }
});