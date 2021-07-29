import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = props => (
  <View style={styles.container}>
    {/* Back button */}
    <Ionicons
    style={{marginBottom: 25}}
      name="arrow-back"
      size={22}
      onPress={() => {
        props.navigation.closeDrawer();
      }}
    />

    {/* Home button */}
    <TouchableOpacity
      style={{flexDirection: 'row', paddingHorizontal: 10, marginTop: 20}}
      onPress={() => {
        props.navigation.navigate('Home');
        props.navigation.closeDrawer();
      }}>
      {/* Home Icon */}
      <Ionicons name="home" color="#01BA76" size={20} />
      <Text style={styles.home}>Home</Text>
    </TouchableOpacity>

    {/* My Account button */}
    <TouchableOpacity
      style={{flexDirection: 'row', paddingHorizontal: 10, marginTop: 20}}
      onPress={() => {
        props.navigation.navigate('Account');
        props.navigation.closeDrawer();
      }}>
      {/* Account Icon */}
      <Ionicons name="person" color="#01BA76" size={20} />
      <Text style={styles.account}>My Account</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },

  home: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
  },
  account: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
  },
});

export default CustomDrawer;
