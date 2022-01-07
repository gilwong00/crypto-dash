import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  noticeContainer: {
    marginTop: 24,
    marginHorizontal: 24,
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#5D2DFD',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  noticeHeader: {
    color: COLORS.white,
    fontSize: 16
  },
  noticeText: {
    color: COLORS.white,
    marginTop: 8,
    fontSize: 14
  },
  learnMoreContainer: {
    marginTop: 8
  },
  learnMore: {
    textDecorationLine: 'underline',
    color: '#37E39F'
  }
});
