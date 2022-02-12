/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/searchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';

const post1 = feed[0];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultsScreen /> */}
        <DestinationSearchScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
