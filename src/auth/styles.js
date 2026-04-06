import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#756C6C',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 60,
    color: '#333232',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgotBtn: {
    width: '80%',
    alignItems: 'flex-end',
    marginTop: -10,
    marginBottom: 20,
  },
  forgotText: {
    color: '#fff',
    fontSize: 11,
  },
  loginText: {
    color: 'white',
    fontSize: 11,
  },
  signUpBtn: {
    width: '80%',
    backgroundColor: '#494242',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  signUpBtnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: '#fff',
    fontSize: 11,
    marginTop: -12,
    marginBottom: 8,
    alignSelf: 'flex-start',
    marginLeft: '10%',
  },
  githubCard: {
    width: '80%',
    backgroundColor: '#494242',
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    marginBottom: 12,
  },
  githubCardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 10,
  },
  githubCardText: {
    color: '#c2bfbf',
    fontSize: 12,
    marginBottom: 4,
  },
  jsonText: {
    color: '#c2bfbf',
    fontSize: 11,
    fontFamily: 'monospace',
    lineHeight: 18,
  },
});

export default styles;