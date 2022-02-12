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
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/searchResults';

const post1 = feed[0];

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        <SearchResultsScreen />
      </SafeAreaView>
    </>
  );
};

export default App;
