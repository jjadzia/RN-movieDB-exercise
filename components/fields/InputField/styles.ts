import { StyleSheet } from 'react-native';
import { ColorsType } from '@/constants/Colors';
import {
  BorderWidths,
  FieldSize,
  Radius,
  Spacing,
} from '@/constants/StyleConst';

export const createStyles = (colors: ColorsType) =>
  StyleSheet.create({
    inputWrapper: {
      borderWidth: BorderWidths.default,
      borderRadius: Radius.small,
      borderColor: colors.fieldBorder,
      backgroundColor: colors.fieldBackground,
      minHeight: FieldSize.defaultHeight,
      width: '100%',
      alignItems: 'center',
      padding: Spacing.small,
    },
  });
