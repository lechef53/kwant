import React from 'react';
import {
  Stylesheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('HomeScreen');
    }
  }

  render() {
    return {
     <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

            <Text style={styles.header}>- LOGIN -</Text>
            <TextInput
              style={styles.textInput}
              placeholder='Username'
              onChangeText={(username) => this.setState({username})}
            />
            <TextInput
              style={styles.textInput}
              placeholder='Password'
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity
              style={styles.btn}
              onPress={this.login}
              <Text>Log In</Text>
            </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    }
  }

  login = () => {
    //check if the username and password are correct. if so, redirect to the
    //home page
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    paddingLeft: 40,
    paddingRight: 40,
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: 'white',
    fontWeight: 'bold',
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
  }
})
