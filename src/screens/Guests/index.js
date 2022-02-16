// import { Pressable, StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const Adult = ({ adults, setAdults }) => {
//   return (
//     <View>
//       <View style={styles.row}>
//         {/* Title */}
//         <View>
//           <Text style={{ fontWeight: 'bold' }}>Adults</Text>
//           <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
//         </View>
//         {/* Buttons with value */}
//         <View style={styles.buttonRow}>
//           <Pressable
//             onPress={() => setAdults(Math.max(0, adults - 1))}
//             style={styles.button}>
//             <Text style={styles.buttonText}>-</Text>
//           </Pressable>

//           <Text style={styles.countText}>{adults}</Text>

//           <Pressable
//             onPress={() => setAdults(adults + 1)}
//             style={styles.button}>
//             <Text style={styles.buttonText}>+</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// const Children = ({ children, setChildren }) => {
//   return (
//     <View>
//       <View style={styles.row}>
//         {/* Title */}
//         <View>
//           <Text style={{ fontWeight: 'bold' }}>Children</Text>
//           <Text style={{ color: '#8d8d8d' }}>Ages 2 to 12</Text>
//         </View>
//         {/* Buttons with value */}
//         <View style={styles.buttonRow}>
//           <Pressable
//             onPress={() => setChildren(Math.max(0, children - 1))}
//             style={styles.button}>
//             <Text style={styles.buttonText}>-</Text>
//           </Pressable>

//           <Text style={styles.countText}>{children}</Text>

//           <Pressable
//             onPress={() => setChildren(children + 1)}
//             style={styles.button}>
//             <Text style={styles.buttonText}>+</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// const Infant = ({ infant, setInfant }) => {
//   return (
//     <View>
//       <View style={styles.row}>
//         {/* Title */}
//         <View>
//           <Text style={{ fontWeight: 'bold' }}>Infant</Text>
//           <Text style={{ color: '#8d8d8d' }}>Ages 0 to 2</Text>
//         </View>
//         {/* Buttons with value */}
//         <View style={styles.buttonRow}>
//           <Pressable
//             onPress={() => setInfant(Math.max(0, infant - 1))}
//             style={styles.button}>
//             <Text style={styles.buttonText}>-</Text>
//           </Pressable>

//           <Text style={styles.countText}>{infant}</Text>

//           <Pressable
//             onPress={() => setInfant(infant + 1)}
//             style={styles.button}>
//             <Text style={styles.buttonText}>+</Text>
//           </Pressable>
//         </View>
//       </View>
//     </View>
//   );
// };

// const GuestsScreen = () => {
//   const [children, setChildren] = useState(0);
//   const [infant, setInfant] = useState(0);
//   const [adults, setAdults] = useState(0);

//   const navigation = useNavigation();
//   const route = useRoute();

//   return (
//     <View style={{ justifyContent: 'space-between', height: '100%' }}>
//       <View>
//         <Adult adults={adults} setAdults={setAdults} />
//         <Children children={children} setChildren={setChildren} />
//         <Infant infant={infant} setInfant={setInfant} />
//       </View>

//       <Pressable
//         onPress={() =>
//           navigation.navigate('Home', {
//             screen: 'Explore',
//             params: {
//               screen: 'SearchResults',
//               params: {
//                 guests: adults + children,
//                 viewport: route.params.viewport,
//               },
//             },
//           })
//         }
//         style={styles.searchButton}>
//         <Text style={styles.searchText}>Search</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default GuestsScreen;

import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles.js';

const GuestsScreen = props => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: 'space-between', height: '100%' }}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Adults</Text>
            <Text style={{ color: '#8d8d8d' }}>Ages 13 or above</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>

            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Children</Text>
            <Text style={{ color: '#8d8d8d' }}>Ages 2-12</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {children}
            </Text>

            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.row}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Infants</Text>
            <Text style={{ color: '#8d8d8d' }}>Under 2</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={{ fontSize: 20, color: '#474747' }}>-</Text>
            </Pressable>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {infants}
            </Text>

            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={{ fontSize: 20, color: '#474747' }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
        style={{
          marginBottom: 20,
          backgroundColor: '#f15454',
          alignItems: 'center',
          justifyContent: 'center',
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}>
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;
