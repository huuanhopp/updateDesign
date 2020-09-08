/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import FontAweSome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
      <View style = {{backgroundColor: 'white'}}>
        <ScrollView style={styles.Container}>
            <View style={styles.rowfirst}>
            <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
                Dating
            </Text>
            <TouchableOpacity
                style={[
                styles.btnStyle,
                {
                    borderRadius: 50,
                    backgroundColor: 'rgba(192,192,192,0.6)',
                },
                ]}
                onPress={_funPress}>
                <FontAweSome
                name={'gear'}
                size={30}
                style={{margin: 10, marginHorizontal: 12}}
                />
            </TouchableOpacity>
            </View>

            <View style={styles.rowSecond}>
            {_funToucherAble('user-o','Profile',true,20,20,_funPress,'rgba(192,192,192,0.6)')}
            {_funToucherAble('heart','Liked You',true,20,20,_funPress,'rgba(192,192,192,0.6)')}
            {_funToucherAble('comments-o','Matches',true,20,20,_funPress,'rgba(192,192,192,0.6)')}
            </View>

            <View style={{alignItems: 'center'}}>
            <View style={styles.rowThird}>
                {_funDrawImage(380,360,0,'white','https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',0,0,)}

                <View style={{margin: 10}}>
                {_funText(24, 'bold', 'black', 'Vân')}
                <Text>Trường Cao đẳng Sư Phạm Hà Nội</Text>
                </View>
                <View style={styles.btnImage}>
                <View>
                    {_funToucherAble('window-close',' ',false,40,40,_funPress,'#FF00FF',)}
                </View>
                <View>
                {_funToucherAble('heart',' ',false,40,40,_funPress,'#FF00FF',)}
                </View>
                </View>
            </View>
            </View>
            <View style={styles.lineStyle} />

            <View style={styles.rowFourth}>
            {_funText(24, 'bold', 'black', 'Suggested Stories')}
            <View style={styles.storyItem}>
                {_fun_ItemStory('Mai Anh')}
                {_fun_ItemStory('Mai Anh')}
                {_fun_ItemStory('Mai Anh')}
                {_fun_ItemStory('Mai Anh')}
                </View>
            </View>
        </ScrollView>
      </View>
  );
};



_funPress = () => {
  Alert.alert('This is my app');
};



_funDrawImage = (_width, _height, _radius, _boderColor, _uri, _borderWidth) => {
  return (
    <Image
      style={{
        width: _width,
        height: _height,
        borderRadius: _radius,
        borderWidth: _borderWidth,
        borderColor: _boderColor,
      }}
      source={{uri: _uri}}
    />
  );
};

_funText = (_textSize, _fontWeight, _color, _content) => {
  return (
    <Text style={{fontSize: _textSize, fontWeight: _fontWeight, color: _color}}>
      {_content}
    </Text>
  );
};

_fun_ItemStory = (name) => {
  return (
    <View style={{alignItems: 'center', margin: 10}}>
      {_funDrawImage(
        70,
        70,
        40,
        '#CC0099',
        'https://vanhienblog.info/wp-content/uploads/2019/02/anh-gai-xinh-dep-hot-girl-1-00-600x445.jpg',
        2,
      )}
      <Text>{name}</Text>
    </View>
  );
};

_funToucherAble = (
  iconName,
  title,
  ishaveTitle = false,
  iconSize,
  _boderRadius,
  _onPress,
  _backGroundColor,
) => {
  if (ishaveTitle == true) {
    return (
      <TouchableOpacity
        style={[
          styles.btnStyle,
          {borderRadius: _boderRadius, backgroundColor: _backGroundColor},
        ]}
        onPress={_onPress}>
        <FontAweSome name={iconName} size={iconSize} style={{margin: 8}} />
        <Text style={{fontSize: 15, marginRight: 10, fontWeight: 'bold'}}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View>
      <TouchableOpacity
        style={[
          styles.btnStyle,
          {
            borderRadius: _boderRadius,
            backgroundColor: _backGroundColor,
          },
          styles.shadow
        ]}
        onPress={_onPress}>
        <FontAweSome name={iconName} size={iconSize} style={{margin: 10}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'column',
    margin: 10,

  },
  btnStyle: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowSecond: {
    flexDirection: 'row',
    marginTop: 20,
  },
  rowfirst: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lineStyle: {
    borderWidth: 0.2,
    borderColor: 'black',
    marginTop: 8,
    marginHorizontal: 6,
  },
  rowThird: {
    width: 380,
    height: 440,
    marginTop: 20,
    flexDirection: 'column',
    borderRadius: 15,
    shadowOffset: {width: 4, height: 4},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 6,
    marginBottom: 10,
    // background color must be set
    backgroundColor: 'white', // invisible color
  },
  rowFourth: {
    flexDirection: 'column',
  },
  image: {
    height: 360,
    width: 380,
  },
  storyItem: {
    flexDirection: 'row',
  },
  btnImage: {
    flexDirection: 'row',
    position: 'absolute',
    // left: 0,
    right: 0,
    bottom: 0,
    height: 135,
    padding: 20,
  },
  shadow: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 2,
    elevation: 6,
    // background color must be set
  }
});

export default Home;
