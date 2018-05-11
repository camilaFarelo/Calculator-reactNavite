import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Styles from './Styles';

class InputButton extends React.Component {
  state = {
    isRed: false,
  }
  componentWillMount() {
    switch (this.props.value) {
      case 'del':
      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({isRed: true});
        break;
    }
  }

  _onButtonPress = () => {
    const {value, onButtonPressed} = this.props;
    onButtonPressed(value)
  }

  render() {
    const {value} = this.props;
    const isRedButton = this.state.isRed ? Styles.buttonRed : {};
    return (
      <TouchableOpacity style={[Styles.button, isRedButton]} onPress={this._onButtonPress}>
        <Text style={Styles.buttonText}>{value}</Text>
      </TouchableOpacity>
    )
  }
}

export default InputButton;
