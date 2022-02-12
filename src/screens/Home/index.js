import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = () => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search button pressed')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? '#fbfbfb' : 'white'},
            styles.button,
          ]}
          onPress={() => console.warn('Explore button clicked')}>
          <Text style={styles.buttonText}>Explore nearby place</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
