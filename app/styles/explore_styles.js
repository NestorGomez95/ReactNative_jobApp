import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    paddingTop: 120,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingBottom: 20, 
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  details: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'justify',
    marginHorizontal: 16,
  },
  descriptionText: {  // Aquí está el estilo que faltaba
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
    textAlign: 'justify',
    marginHorizontal: 16,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#007AFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  jobItem: {
    width: '90%',
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    marginTop: 10,
    marginVertical: 10,
    paddingTop: 30,
  },
  logo1: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    paddingTop: 30,
    marginTop: 50,
    marginVertical: 10,

  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
    
  },
});
