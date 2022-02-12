import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import styles from '../../components/Post/styles';

const index = ({ post }) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />

      {/* Bed and Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bath} bathroom
      </Text>

      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/* Old price & now price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}> ${post.newPrice} - per night</Text>
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default index;
