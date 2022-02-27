import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/customMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

export default function SearchResultsMaps(props) {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map((place, i) => (
          <CustomMarker
            key={i}
            place={place}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{ position: 'absolute', bottom: 10 }}>
        <PostCarouselItem post={places[0]} />
      </View>
    </View>
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
  priceTag: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
  },
});
