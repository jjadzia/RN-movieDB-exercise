import { StyleSheet } from 'react-native';
import { ColorsType } from '@/constants/Colors';
import { Spacing } from '@/constants/StyleConst';

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    container: {
      padding: Spacing.small,
      alignItems: 'center',
      width: '100%',
    },
    text: {
      color: colors.text,
    },
  });
