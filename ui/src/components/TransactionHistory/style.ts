import { StyleSheet } from 'react-native';
import { COLORS, theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    ...theme.shadow,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginTop: 24,
    marginHorizontal: 24
  },
  transactionHistoryTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  transactionListContainer: {
    marginTop: 8
  },
  transactionItemSeperator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.lightGray
  },
  transactionHistoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 12
  },
  transactionName: {
    fontSize: 16,
    fontWeight: '500'
  },
  transactionDate: {
    fontSize: 14,
    color: COLORS.gray
  },
  transactionAmountDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  transactionAmount: {
    fontSize: 16,
    paddingRight: 10
  }
});
