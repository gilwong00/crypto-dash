import { StyleSheet } from 'react-native';
import { COLORS, theme } from '../../constants';

export const styles = StyleSheet.create({
  container: {
    shadow: theme.shadow,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginTop: 24,
    marginHorizontal: 24
  }
});
