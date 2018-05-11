import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';

import InputButton from './InputButton';
import Styles from './Styles';

const inputButtonsKey = [
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+']
];

export default class App extends React.Component {
  state = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false,
    displayFormula: 0,
  };

  clearValues = () => {
    this.setState({
      value: null,
      displayValue: '0',
      operator: null,
      waitingForOperand: false,
      displayFormula: 0,
    })
  }

   _onOperationClick(operation) {
    console.log('hola');
  }

  _getInputsButtons() {
    let views = [];
    for (var r = 0; r < inputButtonsKey.length; r ++) {
      let row = inputButtonsKey[r];
      let inputRow = [];
      for (var i = 0; i < row.length; i ++) {
        let input = row[i];
        inputRow.push(
          <InputButton value={input} key={r + "-" + i} />
        );
      }
      console.log('buttonKey', buttonKey);
      views.push(<View style={Styles.buttonRow} key={"row-" + r}>{inputRow}</View>)
    }
    return views;
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.calculatorHeader}>
          <Text style={Styles.formula}>hola</Text>
          <Text style={Styles.result}>Result</Text>
        </View>
        <View style={Styles.calculatorBody}>
          {this._getInputsButtons()}
        </View>
      </View>
    );
  }
}
