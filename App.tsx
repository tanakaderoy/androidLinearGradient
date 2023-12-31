/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
const CARD_HORIZONTAL_WIDTH = Dimensions.get('window').width * 0.7;
const CARD_HEIGHT = 180

const images = new Array(100).fill(0).map((_, i) => ({
  uri: `https://picsum.photos/seed/seed${i+1}/400/${CARD_HEIGHT}`,
  id: i,
}));

function Tile({imageURL}: {imageURL: string}): JSX.Element {
  return (
    <View style={styles.tileContainer}>
      <View style={styles.contentContainer}>
        <ImageBackground
          source={{uri: imageURL}}
          height={CARD_HEIGHT}
          width={CARD_HORIZONTAL_WIDTH}
          style={styles.backgroundImage}>
          <LinearGradient
            style={styles.gradient}
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}>
            <View style={styles.subtitleView}>
              <Text style={styles.textStyle}>Hello</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
}

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={{flex: 1}} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        keyExtractor={x => x.id.toString()}
        renderItem={({item}) => <Tile imageURL={item.uri} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tileContainer: {
    flex: 1,
    overflow: 'visible',
    padding: 2,
  },
  contentContainer: {
    width: CARD_HORIZONTAL_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'rgb(28, 28, 30)',
    borderRadius: 4,
  },
  backgroundImage: {
    width: CARD_HORIZONTAL_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'black',
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
  },
  gradient: {
    bottom: 0,
    height: '50%',
    position: 'absolute',
    width: '100%',
  },
  subtitleView: {
    bottom: 16,
    left: 16,
    position: 'absolute',
    right: 16,
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '800',
  },
  backgroundContainer: {
    backgroundColor: 'rgb(28,28,38)',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
