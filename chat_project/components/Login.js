import React from 'react';
import { Text, View, Button,TextInput,AppRegistry,StyleSheet } from 'react-native';
import firebaseSvc from '../FirebaseSvc';




export default class Login extends React.Component {
  state = {
  name: 'Henry',
  email: 'jymk04130@gmail.com',
  password: '',
  avatar: '',
  };

  onPressLogin = async () => {
  const user = {
    name: this.state.name,
    email: this.state.email,
    password: this.state.password,
    avatar: this.state.avatar,
  };

  const response = firebaseSvc.login(user, this.loginSuccess, this.loginFailed);
  };
  
  loginSuccess = () => {
  console.log('login successful, navigate to chat.');
  this.props.navigation.navigate('Chat', {
    name: this.state.name,
    email: this.state.email,
    avatar: this.state.avatar,
  });
  };

  loginFailed = () => {
  alert('Login failure. Please tried again.');
  };

  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });

  render() {
    return (
      <View>
        <Text>Email</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="jymk04130@gmail.com"
          onChangeText={this.onChangeTextEmail}
          value={this.state.email}
        />

        <Text>Password</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={this.onChangeTextPassword}
        />

        <Text> My Chat</Text>
        <Button 
          title="Login"
          style={styles.buttonText}
          onPress={this.onPressLogin}
        />

        <Button 
          title="Create Account"
          style={styles.buttonText}
          onPress = {()=>this.props.navigation.navigate('CreateAccount')}
        />
      </View>
    );
  }
}


const offset = 16;
const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
    fontSize: offset,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: 42,
  },
});