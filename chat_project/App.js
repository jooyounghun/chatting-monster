// You can import from local files
import Login from './components/Login';
import Chat from './components/Chat';
import CreateAccount from './components/CreateAccount';
import { createStackNavigator } from 'react-navigation-stack'


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation'


const AppStackNavigator = createAppContainer(createStackNavigator({
  Login: {screen:Login},
  Chat: {screen:Chat},
  CreateAccount: {screen:CreateAccount}
}, 
{
  initialRouteName: 'Login'
}
))

export default AppStackNavigator;
