import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import search from '../../../assets/data/search';

const DestinationSearchScreen = props => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Input */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      {/* List of destinations */}
      <FlatList
        data={search}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={25} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textInput: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    borderRadius: 7,
    padding: 5,
    marginRight: 15,
  },
  locationText: {},
});
