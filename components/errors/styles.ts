import { StyleSheet } from 'react-native';
import { ColorsType } from '@/constants/Colors';
import { Spacing } from '@/constants/StyleConst';

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    error: {
      color: colors.error,
      padding: Spacing.small,
    },
  });
