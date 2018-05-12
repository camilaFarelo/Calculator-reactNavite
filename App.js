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
    totalValue: '',
    previousValue: '',
    symbol: '',
    formulaValue: '',
  };

  handleButtonPressed = (buttonKey) => {
    if (typeof buttonKey == 'number') {
      this.setState({
        totalValue: buttonKey,
      });
    }
    if (typeof buttonKey == 'string') {
      switch (buttonKey) {
        case 'C':
          this.setState({
            formulaValue: '',
            totalValue: '',
            previousValue: '',
            symbol: '',
          })
          break;
        case '/':
        case '*':
        case '+':
        case '-':
          if (this.state.totalValue === '') return;
          this.setState({
              symbol: buttonKey,
              previousValue: this.state.totalValue,
              totalValue: '',
              formulaValue: `${this.state.previousValue} ${this.state.symbol} ${this.state.totalValue}`
          });
          break;
        case '=':
          if (!this.state.symbol) return;
          this.setState({
              previousValue: '',
              totalValue: eval(this.state.previousValue + this.state.symbol + this.state.totalValue),
              symbol: '',
              formulaValue: `${this.state.previousValue} ${this.state.symbol} ${this.state.totalValue}`,
          });
          break;
      }
    }
  }

  _getInputsButtons() {
    let views = [];
    inputButtonsKey.map((buttonKey, index) => {
      let rows = buttonKey;
      let inputRow = [];
      rows.map((row, indexRow)=> {
        let input = row;
        inputRow.push(
          <InputButton
            value={input}
            key={`${index}-${indexRow}`}
            onButtonPressed={this.handleButtonPressed}
          />
        );
      })
      views.push(<View style={Styles.buttonRow} key={`row-${index}`}>{inputRow}</View>)
    })
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
