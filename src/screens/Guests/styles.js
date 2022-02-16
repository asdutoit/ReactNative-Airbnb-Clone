import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchButton: {
    marginBottom: 20,
    backgroundColor: '#f15454',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderColor: 'lightgrey',
  },
  button: {
    borderWidth: 1,
    width: 35,
    height: 35,
    borderRadius: 30,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  buttonText: {
    fontSize: 16,
    color: '#474747',
  },
});

export default styles;
