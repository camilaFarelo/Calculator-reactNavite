import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Styles from './Styles';

export default class InputButton extends Component {
  render() {
    return (
      <TouchableOpacity style={Styles.button}>
        <Text style={Styles.buttonText}>{this.props.value}</Text>
      </TouchableOpacity>
    )
  }
}
