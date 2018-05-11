import {StyleSheet} from 'react-native';

export default const styles = StyleSheet.create({
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
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});
