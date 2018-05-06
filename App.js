import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

const buttonsName = [
  'c', '+/-', '%', 'D', '7', 
  '8', '9', '/', '4', '5', '6', 
  'X', '1', '2', '3', '-', '0', 
  ',', '=', '+',
];
export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.calculatorHeader}> 
          <Text style={styles.formula}>FORM</Text>
          <Text style={styles.result}>Result</Text>
        </View>
        <View style={styles.calculatorBody}>
          <View style={styles.buttonRow}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.buttonText, styles.buttonRed]}>del</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.buttonText, styles.buttonRed]}>/</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.buttonText, styles.buttonRed]}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.buttonText, styles.buttonRed]}>-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>,</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>=</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={[styles.buttonText, styles.buttonRed]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calculatorHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculatorBody: {
    flex: 2,
    backgroundColor: '#000',
  },
  result: {
    color: '#000',
    fontSize: 40,
    fontWeight: 'bold',
  },
  formula: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    opacity: 0.5,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    width: 64,
    height: 64,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonRed: {
    flex: 1,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    paddingVertical: 23,
    paddingHorizontal: 24,
    fontSize: 30,
  },
});
