import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

const Adult = ({ adults, setAdults }) => {
  return (
    <View>
      <View style={styles.row}>
        {/* Title */}
        <View>
          <Text style={{ fontWeight: 'bold' }}>Adults</Text>
          <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => setAdults(Math.max(0, adults - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          <Text style={styles.countText}>{adults}</Text>

          <Pressable
            onPress={() => setAdults(adults + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const Children = ({ children, setChildren }) => {
  return (
    <View>
      <View style={styles.row}>
        {/* Title */}
        <View>
          <Text style={{ fontWeight: 'bold' }}>Children</Text>
          <Text style={{ color: '#8d8d8d' }}>Ages 2 to 12</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => setChildren(Math.max(0, children - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          <Text style={styles.countText}>{children}</Text>

          <Pressable
            onPress={() => setChildren(children + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const Infant = ({ infant, setInfant }) => {
  return (
    <View>
      <View style={styles.row}>
        {/* Title */}
        <View>
          <Text style={{ fontWeight: 'bold' }}>Infant</Text>
          <Text style={{ color: '#8d8d8d' }}>Ages 0 to 2</Text>
        </View>
        {/* Buttons with value */}
        <View style={styles.buttonRow}>
          <Pressable
            onPress={() => setInfant(Math.max(0, infant - 1))}
            style={styles.button}>
            <Text style={styles.buttonText}>-</Text>
          </Pressable>

          <Text style={styles.countText}>{infant}</Text>

          <Pressable
            onPress={() => setInfant(infant + 1)}
            style={styles.button}>
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const GuestsScreen = () => {
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const [adults, setAdults] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={{ justifyContent: 'space-between', height: '100%' }}>
      <View>
        <Adult adults={adults} setAdults={setAdults} />
        <Children children={children} setChildren={setChildren} />
        <Infant infant={infant} setInfant={setInfant} />
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
              params: {
                guests: adults + children,
                // viewport: route.params.viewport,
              },
            },
          })
        }
        style={styles.searchButton}>
        <Text style={styles.searchText}>Search</Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;

const styles = StyleSheet.create({
  searchButton: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderColor: 'lightgrey',
  },
  button: {
    borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 30,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#474747',
  },
});
