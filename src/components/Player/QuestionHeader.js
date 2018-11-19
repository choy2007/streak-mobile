import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles/question-header';

export default class QuestionHeader extends Component {
  constructor(){
    super();

    this.state = {
      timer: null
    }
  }
  componentDidMount() {
    this.setTimer();
  }

  decreaseTimer(timer){
    while(timer>0) {
      this.setState({ timer: x-- })
    }
  }
  setTimer() {
    setTimeout(() => this.decreaseTimer(this.props.timer), 1000)
  }

  render() {
    const { title, back, close }  = this.props;
    return(
      <View style={styles.container}>
        <Text style={styles.exitButtonStyle}> Exit </Text>
        <Text style={styles.questionTimer}> {this.state.timer} </Text>
        <Text> Score </Text>
      </View>
    )
  }
}


