import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

const Start = ({ navigation }) => {
  const [name, setName] = useState('');
  //const [selectedColor, setSelectedColor] = useState('');
  const [background, setBackground] = useState('');

  //const handleColorSelection = (color) => {
  //setSelectedColor(color);
  //};

  return (
    <ImageBackground
      source={require('../img/BackgroundImage.png')}
      style={styles.imageBackground}
      resizeMode='cover'
    >
      <Text style={styles.text}>ChatApp!</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder='Type your name here'
          placeholderTextColor='#757083'
        ></TextInput>

        <View style={styles.chooseColorBox}>
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
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chooseColor,
                { backgroundColor: '#474056' },
                background === '#474056' && styles.selectedColor
              ]}
              onPress={() => setBackground('#474056')}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chooseColor,
                { backgroundColor: '#307ef0' },
                background === '307ef0' && styles.selectedColor
              ]}
              onPress={() => setBackground('#307ef0')}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chooseColor,
                { backgroundColor: '#85b061' },
                background === '#85b061' && styles.selectedColor
              ]}
              onPress={() => setBackground('#85b061')}
            ></TouchableOpacity>
          </View>
        </View>
      </View>
      <Button
        title='Start Chatting'
        onPress={() => navigation.navigate('Chat', { name: name })}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 45,
    fontWeight: '600',
    color: 'white',
    marginTop: 80
  },
  container: {
    width: '88%',
    height: '44%',
    backgroundColor: 'white',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-evenly'
  },

  textInput: {
    width: '88%',
    padding: 15,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: '300'
  },
  button: {
    width: '88%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757083',
    padding: 10
  },
  chooseColorBox: {
    width: '88%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  colorButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start'
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
  },
  text1: {
    flex: 1,
    fontSize: 15,
    color: 'black',
    fontWeight: '300',
    opacity: 1,
    textAlign: 'left',
    alignSelf: 'flex-start'
  }
});

export default Start;
