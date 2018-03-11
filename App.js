import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board : false,
      signin : false
    }

    this.boards = this.boards.bind(this)
    this.signup = this.signup.bind(this)
  }

  boards() {
    this.setState({
      board : true,
      signin : false
    })
  }

  signup() {
    this.setState({
      board : false,
      signin : true
    })
  }

  render() {
    return(
      <View style={styles.holder}>
        <View style={styles.head}>
          <Text style={styles.header}>
            Scout
          </Text>
          <Text style={styles.bodyText}>
           {'\n'}
            Welcome to Scout a discrete message board that is anonymous by nature.
           {'\n'}
           {'\n'}
           {'\n'}
           {'\n'}
          </Text>
          <Button
            onClick={this.boards}
            title="Look at the Boards"
            color="black"
            accessibilityLabel="Explore"
          />
          <Text>
          {'\n'}
          </Text>
          <Button
            onClick={this.signin}
            title="SignIn to an Account"
            color="black"
            accessibilityLabel="Join the Team"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  holder: {
    flex: 1,
    backgroundColor: '#AED6F1',
  },
  head: {
    flex: 2,
  },
  header: {
    textAlign: 'center',
    justifyContent: 'center',
    color: "white",
    fontSize: 42,
    fontFamily: 'Cochin',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#273746',
  },
  body: {
    justifyContent: 'space-around',
    flex: 3,
    backgroundColor: '#AED6F1'
  },
  bodyText: {
    textAlign: 'center',
    color: 'white',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    fontSize: 28,
  },
});
