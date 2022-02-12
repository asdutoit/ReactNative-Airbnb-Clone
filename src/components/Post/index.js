import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import styles from '../../components/Post/styles';

const index = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
      />

      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bathroom</Text>

      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        Adipisicing aute voluptate veniam ullamco quis excepteur sit. Laborum ut
        duis est esse non sunt mollit sunt reprehenderit aliquip quis fugiat. Eu
        officia consequat aliquip nulla qui tempor aliqua.
      </Text>

      {/* Old price & now price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.newPrice}> $30 - per night</Text>
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>$40 total</Text>
    </View>
  );
};

export default index;
