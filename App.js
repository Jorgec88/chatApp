import Start from './components/Start';
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert('Connection Lost!');
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: 'AIzaSyB_ZWjj60SumYnnoKHSudyAeaUalLe3Guo',
    authDomain: 'chatapp-80da0.firebaseapp.com',
    projectId: 'chatapp-80da0',
    storageBucket: 'chatapp-80da0.appspot.com',
    messagingSenderId: '299024884437',
    appId: '1:299024884437:web:2e6c3afcad30817fc0785c'
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'>
        <Stack.Screen name='Start' component={Start} />
        <Stack.Screen name='Chat'>
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
