import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: COLORS.white
  },
  formContainer: {
    padding: 10,
    marginTop: 70
  },
  label: {
    color: COLORS.black,
    margin: 20,
    marginLeft: 0
  },
  loginButton: {
    marginTop: 20,
    color: COLORS.white,
    height: 40,
    backgroundColor: COLORS.secondary,
    borderRadius: 4
  },
  input: {
    backgroundColor: COLORS.lightGray1,
    height: 40,
    padding: 10,
    borderRadius: 4,
    marginVertical: 15
  },
  loginHeader: {
    textAlign: 'center',
    fontSize: 20,
    paddingBottom: 10
  },
  signupMessage: {
    textAlign: 'center',
    paddingTop: 10
  },
  signupCTA: {
    textAlign: 'center',
    color: COLORS.primary
  },
  errorText: {
    color: COLORS.red
  }
});
