import { StyleSheet } from 'react-native';
import { Spacing } from '@/constants/StyleConst';

export const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: Spacing.large,
      paddingBottom: 0,
    },
  });
