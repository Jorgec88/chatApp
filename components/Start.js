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
  const [background, setBackground] = useState('');

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../img/BackgroundImage.png')}
        style={styles.imageBackground}
      >
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
            accessible={true}
            accessibilityLabel='More options'
            accessibilityHint='Lets you choose to send an image or your geolocation.'
            accessibilityRole='button'
            style={[
              styles.chooseColor,
              { backgroundColor: '#090C08' },
              background === '#090C08' && styles.selectedColor
            ]}
            onPress={() => setBackground('#090C08')}
          />
          <TouchableOpacity
            style={[
              styles.chooseColor,
              { backgroundColor: '#474056' },
              background === '#474056' && styles.selectedColor
            ]}
            onPress={() => setBackground('#474056')}
          />
          <TouchableOpacity
            style={[
              styles.chooseColor,
              { backgroundColor: '#307ef0' },
              background === '307ef0' && styles.selectedColor
            ]}
            onPress={() => setBackground('#307ef0')}
          />
          <TouchableOpacity
            style={[
              styles.chooseColor,
              { backgroundColor: '#85b061' },
              background === '#85b061' && styles.selectedColor
            ]}
            onPress={() => setBackground('#85b061')}
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
    fontSize: 16,
    fontWeight: '300'
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 45,
    fontWeight: '600',
    color: 'white',
    marginTop: 80
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
  },

  chooseColor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    border: 3,
    marginRight: 15,
    borderColor: 'white'
  },

  selectedColor: {
    borderColor: '#FCD95B',
    borderWidth: 3
  }
});

export default Start;
