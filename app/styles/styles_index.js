import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    color: '#FF0000', // Red color
    fontWeight: 'bold',
    paddingVertical: 25,
  },
  headerText: {
    fontSize: 30,
    color: '#FF0000', // Red color
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 24,
    color: '#FF0000', // Red color
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
  
});

export default styles;
