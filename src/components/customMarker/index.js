import React from 'react';
import { Marker } from 'react-native-maps';
import { View, StyleSheet, Text } from 'react-native';

export default function index({ place, onPress, isSelected }) {
  return (
    <Marker coordinate={place.coordinate} onPress={onPress}>
      <View style={isSelected ? styles.priceTagSelected : styles.priceTag}>
        <Text style={isSelected ? styles.priceSelected : styles.price}>
          $ {place.newPrice}
        </Text>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  price: {
    fontWeight: 'bold',
  },
  priceSelected: {
    fontWeight: 'bold',
    color: 'white',
  },
  priceTag: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },
  priceTagSelected: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
  },
});
