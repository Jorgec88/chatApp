import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const image = require('../img/BackgroundImage.png');

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image}>
        <Text style={styles.text}>ChatApp!</Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder='Type your name here'
          placeholderTextColor='#757083'
        />
        <Text style={styles.text1}>Choose Background Color:</Text>

        <View style={styles.colorButtonsContainer}>
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#090C08' }]}
            onPress={() => handleColorSelection('#090C08')}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#474056' }]}
            onPress={() => handleColorSelection('#474056')}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#307ef0' }]}
            onPress={() => handleColorSelection('#307ef0')}
          />
          <TouchableOpacity
            style={[styles.colorButton, { backgroundColor: '#85b061' }]}
            onPress={() => handleColorSelection('#85b061')}
          />
        </View>
        <Button
          title='Start Chatting'
          onPress={() => navigation.navigate('Chat', { name: name })}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    width: '88%',
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15
  },
  text: {
    padding: '25%',
    flex: 5,
    fontSize: 45,
    fontWeight: '600',
    color: 'white'
  },
  text1: {
    fontSize: 15,
    color: '#6b3deb',
    fontWeight: '300',
    opacity: 1,
    marginTop: 11
  },
  colorButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  }
});

export default Start;
