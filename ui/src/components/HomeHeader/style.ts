import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 130
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    marginTop: 48,
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 20
  },
  notificationIcon: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  balance: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  balanceHeader: {
    fontSize: 16,
    color: COLORS.white,
    lineHeight: 22,
    fontWeight: 'bold'
  },
  balanceAmount: {
    marginTop: 8,
    color: COLORS.white,
    fontSize: 30
  },
  balanceChangeText: {
    color: COLORS.white,
    fontSize: 12
  }
});
