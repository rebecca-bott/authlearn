/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import Header from './src/components/common/header';
import firebase from 'firebase';
import LoginForm from "./src/components/LoginForm";
import Button from "./src/components/common/Button";
import Spinner from "./src/components/common/Spinner";

class App extends Component {
  state = { loggedIn: null};

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBxW8moPIvAnKldN6OrPMBZMLDwafUzSH8",
      authDomain: "authlearn-786ec.firebaseapp.com",
      databaseURL: "https://authlearn-786ec.firebaseio.com",
      projectId: "authlearn-786ec",
      storageBucket: "",
      messagingSenderId: "1061005417130",
      appId: "1:1061005417130:web:1e0ad9364eb5b661"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
  return (
    <View>
      <Header headerText='Auth'/>
      {this.renderContent()}
    </View>
  )};
  }
export default App;
