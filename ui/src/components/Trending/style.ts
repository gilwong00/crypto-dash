import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export const styles = StyleSheet.create({
  trendingContainer: {
    position: 'absolute',
    bottom: '-20%'
  },
  trendingHeader: {
    color: COLORS.white,
    fontSize: 16
  },
  trendingItem: {
    width: 180,
    paddingVertical: 24,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginRight: 12
  },
  coinContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  coinImage: {
    marginTop: 5,
    width: 30,
    height: 30
  },
  coinName: {
    fontSize: 20
  },
  coinSymbol: {
    color: COLORS.gray,
    fontSize: 16
  },
  coinValueContainer: {
    marginTop: 12,
    alignItems: 'center'
  },
  coinPrice: {
    fontSize: 18
  },
  coinChange: {
    fontSize: 16
  }
});
