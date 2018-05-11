import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';

import InputButton from './InputButton';
import Styles from './Styles';

const inputButtonsKey = [
    ['C', '+/-', '%', 'del'],
    [1, 2, 3, '/'],
    [4, 5, 6, '*'],
    [7, 8, 9, '-'],
    [0, '.', '=', '+'],
];

class App extends React.Component {
  state = {
    totalValue: 0,
    previousValue: 0,
    symbol: null,
    formulaValue: '',
  };

  handleButtonPressed = (buttonKey) => {
    if (typeof buttonKey == 'number') {
      console.log('number');
      this.setState({
        totalValue: (this.state.totalValue * 10) + buttonKey,
      });
    }
    if (typeof buttonKey == 'string') {
      switch (buttonKey) {
        case 'C':
          this.setState({
            formulaValue: '',
            totalValue: 0,
            previousValue: 0,
            symbol: null,
          })
        case '/':
        case '*':
        case '+':
        case '-':
          this.setState({
              symbol: buttonKey,
              previousValue: this.state.totalValue,
              totalValue: 0,
              formulaValue: `${this.state.previousValue} ${this.state.symbol} ${this.state.totalValue}`
          });
        case '=':
          if (!this.state.symbol) return;
          this.setState({
              previousValue: 0,
              totalValue: eval(this.state.previousValue + this.state.symbol + this.state.totalValue),
              symbol: null,
              formulaValue: `${this.state.previousValue} ${this.state.symbol} ${this.state.totalValue}`,
          });
          break;
      }
    }
  }

  _getInputsButtons() {
    let views = [];
    for (var buttonKey = 0; buttonKey < inputButtonsKey.length; buttonKey ++) {
      let row = inputButtonsKey[buttonKey];
      let inputRow = [];
      for (var i = 0; i < row.length; i ++) {
        let input = row[i];
        inputRow.push(
          <InputButton
            value={input}
            key={`${buttonKey}-${i}`}
            onButtonPressed={this.handleButtonPressed}
          />
        );
      }
      views.push(<View style={Styles.buttonRow} key={`row-${buttonKey}`}>{inputRow}</View>)
    }
    return views;
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.calculatorHeader}>
          <Text style={Styles.formula}>{this.state.formulaValue}</Text>
          <Text style={Styles.result}>{this.state.totalValue}</Text>
        </View>
        <View style={Styles.calculatorBody}>
          {this._getInputsButtons()}
        </View>
      </View>
    );
  }
}

export default App;
