import { StyleSheet } from 'react-native';
import { ColorsType } from '@/constants/Colors';
import { Spacing } from '@/constants/StyleConst';

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      gap: Spacing.small,
    },
    textInput: {
      flex: 1,
      color: colors.text,
    },
  });
