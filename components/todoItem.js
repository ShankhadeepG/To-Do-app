import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
//import { MaterialIcons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style={styles.item}>
            <Icon name='delete' size={18} color='#333'/> 
            <Text>{item.text}</Text>
        </View>  
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
    backgroundColor:'#00bfe7'
  }
});